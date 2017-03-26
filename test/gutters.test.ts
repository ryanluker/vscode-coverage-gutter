"use strict";

import * as assert from "assert";

import * as vscode from "vscode";
import {Gutters} from "../src/gutters";

suite("Gutters Tests", function() {
    test("Should setup gutters based on config values with no errors", function(done) {
        this.timeout(12000);
        try {
            let ctx: vscode.ExtensionContext = <any> {
                asAbsolutePath() {
                    return "test";
                },
                subscriptions: [],
            };
            const gutters = new Gutters(ctx);
            assert.equal(gutters.getTextEditors().length, 0);
            return done();
        } catch (e) {
            return done(e);
        }
    });

    test("Should remove the activeEditor from the textEditors array", async function() {
        this.timeout(12000);
        let ctx: vscode.ExtensionContext = <any> {
            asAbsolutePath() {
                return "test";
            },
            subscriptions: [],
        };
        const gutters = new Gutters(ctx);
        await gutters.displayCoverageForActiveFile();
        assert.equal(gutters.getTextEditors().length, 1);
        gutters.removeCoverageForActiveFile();
        assert.equal(gutters.getTextEditors().length, 0);
    });
});
