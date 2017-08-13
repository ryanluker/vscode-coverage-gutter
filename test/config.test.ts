import * as assert from "assert";
import * as vscode from "vscode";
import {Config} from "../src/config";

suite("Config Tests", function() {
    const fakeVscode: any = {
        createTextEditorDecorationType: (options) => {
            assert.equal(Object.keys(options).length, 4);
            return {};
        },

        executeCommand: () => {
            return ;
        },

        getConfiguration: () => {
            return {
                get: () => "123",
                test1: "test1",
                test2: "test2",
                test3: "test3",
            };
        },
    };

    const fakeContext: any = {
        asAbsolutePath: () => {
            return "123";
        },
    };

    const fakeReport: any = {
        sendEvent: () => {
            return ;
        },
    };

    test("Constructor should setup properly", function() {
        assert.doesNotThrow(() => {
            const _CONFIG = new Config(fakeVscode, fakeContext, fakeReport);
        });
    });

    test("Can get configStore after initialization", function() {
        const config = new Config(fakeVscode, fakeContext, fakeReport);
        const store = config.get();
        assert.notEqual(store.altSfCompare, null);
        assert.notEqual(store.lcovFileName, null);
    });

    test("Should remove gutter icons if path is blank, allows breakpoint usage", function() {
        fakeVscode.createTextEditorDecorationType = (options) => {
            assert.equal("gutterIconPath" in options.dark, false);
            assert.equal("gutterIconPath" in options.light, false);
        };
        fakeContext.asAbsolutePath = (options) => "";
        const config = new Config(fakeVscode, fakeContext, fakeReport);
    });
});
