import { expect } from "chai";
import fs from "fs";
import sinon from "sinon";
import * as vscode from "vscode";
import { Config } from "../../src/extension/config";

import {FilesLoader} from "../../src/files/filesloader";

const stubConfig = sinon.createStubInstance(Config) as Config;

// Original functions
const readFile = fs.readFile;

suite("FilesLoader Tests", function() {
    teardown(function() {
        (fs as any).readFile = readFile;
    });

    test("loadDataFiles takes file paths and fetches their data strings @unit", async function() {
        // tslint:disable-next-line
        const readFile = function(path: string, cb) {
            return cb(undefined, Buffer.from("123"));
        };
        (fs as any).readFile = readFile;

        const filesLoader = new FilesLoader(stubConfig);
        const testData = new Set(["file1", "file2"]);
        return filesLoader.loadDataFiles(testData)
            .then(function(mapData) {
                expect(mapData.size).to.equal(2);
                expect(mapData.get("file1")).to.equal("123");
            });
    });

    test("findCoverageFiles returns an error if no coverage file @unit", async function() {
        stubConfig.manualCoverageFilePaths = [];
        const filesLoader = new FilesLoader(stubConfig);
        (filesLoader as any).findCoverageInWorkspace = async () => new Map();

        let captureMessage = "";
        const showWarningMessage = async (message: string) => captureMessage=message; // tslint:disable-line
        (vscode as any).window.showWarningMessage = showWarningMessage;

        await filesLoader.findCoverageFiles();
        expect(captureMessage).to.equal("Could not find a Coverage file!");
    });

    test("findCoverageFiles returns manual coverage paths if set @unit", async function() {
        const coverageFiles = ["test.js", "test2.js"];
        stubConfig.manualCoverageFilePaths = coverageFiles;
        const filesLoader = new FilesLoader(stubConfig);
        const files = await filesLoader.findCoverageFiles();
        expect(new Set(coverageFiles)).to.deep.equal(files);
    });
});
