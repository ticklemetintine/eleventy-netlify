/*
 * Black Sun Plc Fulham Palace, Bishop's Avenue, London, SW6 6EA.
 * http://www.blacksunplc.com/
 *
 * Copyright (c) 2021 Black Sun Plc. All rights reserved.
 */
package com.blacksunplc.tr21.config;

import java.io.IOException;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Row.MissingCellPolicy;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.ss.util.CellReference;
import org.slf4j.LoggerFactory;

/**
 * Reads Temasek configuration file (MS Excel).
 * <p>See: http://cqcidev.blacksun.com:8082/svn/JEE/temasek-review-2018/trunk/configuration-en.xls</p>
 */
public class TemasekExcelConfiguration {

    /** The SLF4J logger for this class. */
    private static final Logger LOG = LoggerFactory.getLogger(TemasekExcelConfiguration.class);

    private enum Column {
        SECTION("A"),
        PAGE_NAME("B"),
        CANONICAL_URL("C"),
        TEMPLATE_LAYOUT("D");

        private final int index;

        /**
         * @param columnName Column name (ex. A, B, C, &hellip;, X, Y, Z, &hellip;, ZZ, &hellip;).
         */
        Column(final String columnName) {
            this.index = CellReference.convertColStringToIndex(columnName);
        }

        /**
         * @return 0-based column index.
         */
        public int getIndex() {
            return this.index;
        }
    }

    private final Path excelConfigurationFile;
    private final int firstPageEntryRowNumber;

    /**
     * @param excelConfigurationFile Excel configuration file.
     * @param firstPageEntryRowNumber Row number of the first page entry
     */
    public TemasekExcelConfiguration(final Path excelConfigurationFile, final int firstPageEntryRowNumber) {
        if (!excelConfigurationFile.toFile().exists()) {
            throw new IllegalArgumentException(
                    "File doesn't exist: " + excelConfigurationFile.toAbsolutePath().toString());
        }
        this.excelConfigurationFile = excelConfigurationFile;
        this.firstPageEntryRowNumber = firstPageEntryRowNumber;
    }

    /**
     * @return Page entries read from this configuration file.
     * @throws IOException If an I/O error occurs.
     */
    public List<PageEntry> pageEntries() throws IOException {
        final List<PageEntry> pageEntries = new ArrayList<>();
        try (Workbook workbook = WorkbookFactory.create(this.excelConfigurationFile.toFile())) {
            final Sheet sheet = workbook.getSheetAt(0);
            LOG.debug("Processing sheet: {}", sheet.getSheetName());

            final int lastRowNumber = sheet.getLastRowNum() + 1;
            for (int rowNumber = this.firstPageEntryRowNumber; rowNumber <= lastRowNumber; ++rowNumber) {
                final int rowIndex = rowNumber - 1;
                final Row row = sheet.getRow(rowIndex);

                final PageEntry pageEntry = toPageEntry(row);
                LOG.debug("[{}/{}] Read page entry: {}",
                        Integer.valueOf(rowNumber), Integer.valueOf(lastRowNumber), pageEntry);

                if (pageEntry.isEmpty()) {
                    LOG.info("Breaking at empty row: {}", Integer.valueOf(rowNumber));
                    break;
                }

                pageEntries.add(pageEntry);
            }
        }
        return pageEntries;
    }

    private static PageEntry toPageEntry(final Row row) {
        final String sectionNameStr = cellStringValue(row, Column.SECTION);
        final String pageNameStr = cellStringValue(row, Column.PAGE_NAME);
        final String canonicalUrlStr = cellStringValue(row, Column.CANONICAL_URL);
        final String templateLayoutStr = cellStringValue(row, Column.TEMPLATE_LAYOUT);
        return new PageEntry(sectionNameStr, pageNameStr, canonicalUrlStr, templateLayoutStr);
    }

    private static String cellStringValue(final Row row, final Column column) {
        return row
                .getCell(column.getIndex(), MissingCellPolicy.CREATE_NULL_AS_BLANK)
                .getStringCellValue()
                .trim();
    }
}
