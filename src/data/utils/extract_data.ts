import { resolve } from "path";
import { readFileSync, writeFileSync } from "fs";

const inputPath = resolve(__dirname, "..", "languages", "polish", "polish_frequency_list.ndjson");
const outputPath = resolve(__dirname, "..", "languages", "polish", "polish_frequency_list_level.json");

type Item = Record<string, string>;
const input: Array<Item> = readFileSync(inputPath, "utf-8")
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => JSON.parse(line.trim()));

const columns: Item = {
    "band": "level",
    "base lemma": "lemma",
};

const parsedContent = input.map((record) => {
    const output: Item = {};
    
    for (const key of Object.keys(columns)) {
        output[columns[key]] = record[key];
    }

    return output;
});

writeFileSync(outputPath, JSON.stringify(parsedContent));

