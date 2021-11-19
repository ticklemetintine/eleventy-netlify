/*
 * Black Sun Plc
 * Fulham Palace, Bishop's Avenue, London, SW6 6EA.
 * http://www.blacksunplc.com/
 *
 * Copyright (c) 2019 Black Sun Plc. All rights reserved.
 */
package com.blacksunplc.tr21.config;

import java.util.StringJoiner;

/**
 * Page entry read from Temasek configuration file.
 */
public class PageEntry {

    private final String sectionName;
    private final String pageName;
    private final String canonicalUrl;
    private final String templateLayout;

    public PageEntry(final String sectionName, final String pageName, final String canonicalUrl,
            final String templateLayout) {

        this.sectionName = sectionName;
        this.pageName = pageName;
        this.canonicalUrl = canonicalUrl;
        this.templateLayout = templateLayout;
    }

    public String getSectionName() {
        return this.sectionName;
    }

    public String getPageName() {
        return this.pageName;
    }

    public String getCanonicalUrl() {
        return this.canonicalUrl;
    }

    public String getTemplateLayout() {
        return this.templateLayout;
    }

    public boolean isEmpty() {
        return getSectionName().isEmpty() &&
                getPageName().isEmpty() &&
                getCanonicalUrl().isEmpty() &&
                getTemplateLayout().isEmpty();
    }

    /** {@inheritDoc} */
    @Override
    public String toString() {
        return new StringJoiner(", ", PageEntry.class.getSimpleName() + "{", "}")
                .add("sectionName=" + getSectionName())
                .add("pageName=" + getPageName())
                .add("canonicalUrl=" + getCanonicalUrl())
                .add("templateLayout=" + getTemplateLayout())
                .toString();
    }
}
