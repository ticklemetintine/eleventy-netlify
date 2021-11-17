/*
 * Black Sun Plc
 * Fulham Palace, Bishop's Avenue, London, SW6 6EA.
 * http://www.blacksunplc.com/
 *
 * Copyright (c) 2019 Black Sun Plc. All rights reserved.
 */
package com.blacksunplc.tr21.config;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Writer;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonIOException;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.stream.JsonReader;

/**
 * Static utility methods for working with JSON files.
 */
public final class JsonFileUtil {

    /**
     * @param inputFile Input file to be read.
     * @return JSON object read from the file.
     * @throws IOException If an I/O error occurs.
     */
    public static JsonObject readJsonObject(final Path inputFile) throws IOException {
        return read(inputFile).getAsJsonObject();
    }

    /**
     * @param inputFile Input file to be read.
     * @return JSON array read from the file.
     * @throws IOException If an I/O error occurs.
     */
    public static JsonArray readJsonArray(final Path inputFile) throws IOException {
        final JsonElement element = read(inputFile);
        if (element.isJsonArray()) {
            return element.getAsJsonArray();
        }
        return new JsonArray();
    }

    /**
     * @param inputFile Input file to be read.
     * @return JSON element read from the file.
     * @throws IOException If an I/O error occurs.
     */
    public static JsonElement read(final Path inputFile) throws IOException {
        try (
             InputStream inputStream = Files.newInputStream(inputFile);
             JsonReader jsonReader = new JsonReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))
        ) {
            return new JsonParser().parse(jsonReader);
        } catch (final JsonIOException ex) {
            throw new IOException(ex);
        }
    }

    /**
     * @param json JSON to be written to the file.
     * @param outputFile File to which JSON element needs to be written.
     * @throws IOException If an I/O error occurs.
     */
    public static void write(final JsonElement json, final Path outputFile) throws IOException {
        try (Writer writer = Files.newBufferedWriter(outputFile, StandardCharsets.UTF_8)) {
            write(json, writer);
        }
    }

    /**
     * @param json JSON to be written to the file.
     * @param writer Writer to which JSON element needs to be written.
     * @throws IOException If an I/O error occurs.
     */
    public static void write(final JsonElement json, final Writer writer) throws IOException {
        try {
            new GsonBuilder()
                //.setPrettyPrinting()
                .disableHtmlEscaping()
                .create()
                .toJson(json, writer);
        } catch (final JsonIOException ex) {
            throw new IOException(ex);
        }
    }

    private JsonFileUtil() {
        throw new UnsupportedOperationException();
    }
}
