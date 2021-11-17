/*
 * Black Sun Plc Fulham Palace, Bishop's Avenue, London, SW6 6EA.
 * http://www.blacksunplc.com/
 *
 * Copyright (c) 2021 Black Sun Plc. All rights reserved.
 */
package com.blacksunplc.tr21;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import org.slf4j.LoggerFactory;

import com.blacksunplc.tr21.config.JsonFileUtil;
import com.blacksunplc.tr21.config.PageEntry;
import com.blacksunplc.tr21.config.TemasekExcelConfiguration;

/**
 * Converts Temasek configuration file (MS Excel) to report spec.
 * <p>Tool should be provided with the following arguments:</p>
 * <ol>
 *   <li>Path to Temasek MS Excel configuration.</li>
 *   <li>Path to the report spec file (file will be created if it doesn't exist).</li>
 *   <li>Row number of the first page entry from the MS Excel file.</li>
 * </ol>
 * <p><strong>Warning!</strong> If report spec already exists, all page entries will be overwritten.</p>
 * @see TemasekExcelConfiguration
 */
public class TemasekExcelConfigurationToSitemap {

    /** The SLF4J logger for this class. */
    private static final Logger LOG = LoggerFactory.getLogger(TemasekExcelConfigurationToSitemap.class);

    private static class Arguments {
        final Path excelConfigurationFile;
        final Path reportSpecFile;
        final int firstPageEntryRowNumber;

//        @SuppressWarnings("squid:S109")
        Arguments(final String ...args) {
            if (args.length != 3) {
                throw new IllegalArgumentException("Expecting 3 parameters.");
            }

            this.excelConfigurationFile = Paths.get(args[0]);
            if (!this.excelConfigurationFile.toFile().exists()) {
                throw new IllegalArgumentException("File " + this.excelConfigurationFile + " doesn't exist.");
            }

            this.reportSpecFile = Paths.get(args[1]);
            this.firstPageEntryRowNumber = Integer.parseInt(args[2]);
        }
    }

    /**
     * @param args Command line arguments.
     * @throws IOException If an I/O error occurs.
     */
    public static void main(final String[] args) throws IOException {
        final Arguments arguments = new Arguments(args);

        final TemasekExcelConfiguration configFile = new TemasekExcelConfiguration(
                arguments.excelConfigurationFile, arguments.firstPageEntryRowNumber);
        final List<PageEntry> pageEntries = configFile.pageEntries();
        LOG.info("Found {} page entries.", Integer.valueOf(pageEntries.size()));

        readAndUpdateReportSpec(arguments.reportSpecFile, pageEntries);

        LOG.warn("Please make sure to open created report spec and update all values starting with 'TODO:'. " +
                    "File path: {}", arguments.reportSpecFile);
        LOG.info("Done.");
    }

    /**
     * Reads existing or creates new report spec out of a template (if it
     * doesn't already exist) and updates it with provided data.
     * @param reportSpecFile Report spec file.
     * @param pageEntries List of page entries read from Excel configuration
     *            file to be added to the given report spec.
     * @throws IOException If an I/O error occurs.
     */
    private static void readAndUpdateReportSpec(final Path reportSpecFile,
            final List<PageEntry> pageEntries) throws IOException {
        final JsonObject reportSpec = new JsonObject();
        updateReportSpec(reportSpec, pageEntries);
        JsonFileUtil.write(reportSpec, reportSpecFile);
    }

    private static void updateReportSpec(final JsonObject reportSpec, final List<PageEntry> pageEntries)
            throws IOException {

        final JsonArray sections = new JsonArray();
        final Map<String, List<PageEntry>> sectionMap = new LinkedHashMap<String, List<PageEntry>>();
        for (final PageEntry pageEntry : pageEntries) {
            final List<PageEntry> pageList = sectionMap.getOrDefault(pageEntry.getSectionName(), new ArrayList<>());
            pageList.add(pageEntry);
            sectionMap.put(pageEntry.getSectionName(), pageList);
        }

        for(final Map.Entry<String, List<PageEntry>> entry : sectionMap.entrySet()) {
            final List<PageEntry> sectionPages = entry.getValue();
            final PageEntry sectionPage = removeSectionPage(sectionPages);
            if (sectionPage != null) {
                final JsonObject section = new JsonObject();
                section.addProperty("sectionName", sectionPage.getPageName());
                section.addProperty("href", sectionPage.getCanonicalUrl());
                section.add("sectionPages", pagesToJson(sectionPages));
                sections.add(section);
            }
        }
        reportSpec.add("sections", sections);
    }

    private static PageEntry removeSectionPage(final List<PageEntry> sectionPages) {
        for (int i = 0; i<sectionPages.size(); i++) {
            final PageEntry page = sectionPages.get(i);
            if (page.getPageName().equals(page.getSectionName())) {
                return sectionPages.remove(i);
            }
        }
        return null;
    }

    private static JsonArray pagesToJson(final List<PageEntry> sectionPages) {
        final JsonArray pages = new JsonArray(sectionPages.size());
        for (final PageEntry page : sectionPages) {
            final JsonObject jsonPage = new JsonObject();
            jsonPage.addProperty("pageName", page.getPageName());
            jsonPage.addProperty("href", page.getCanonicalUrl());
            pages.add(jsonPage);
        }
        return pages;
    }
}
