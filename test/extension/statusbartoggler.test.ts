import { expect } from "chai";
import sinon from "sinon";
import { Config } from "../../src/extension/config";
import { StatusBarToggler } from "../../src/extension/statusbartoggler";

const stubConfig = sinon.createStubInstance(Config) as Config;

suite("Status Bar Toggler Tests", () => {
    test("Should toggle showStatusBarToggler command and message @unit", () => {
        const statusBarToggler = new StatusBarToggler(stubConfig);
        statusBarToggler.toggle(true);
        expect(statusBarToggler.statusText).to.equal("$(circle-large-outline) No Coverage");
    });

    test("Should not toggle twice showStatusBarToggler command and message @unit", () => {
        const statusBarToggler = new StatusBarToggler(stubConfig);
        statusBarToggler.toggle(true);
        expect(statusBarToggler.statusText).to.equal("$(circle-large-outline) No Coverage");
        statusBarToggler.toggle(true);
        expect(statusBarToggler.statusText).to.equal("$(circle-large-outline) No Coverage");
    });

    test("Should toggle showStatusBarToggler command and message back to \"Watch\" @unit", () => {
        const statusBarToggler = new StatusBarToggler(stubConfig);
        statusBarToggler.toggle(true);
        expect(statusBarToggler.statusText).to.equal("$(circle-large-outline) No Coverage");
        statusBarToggler.toggle(false);
        expect(statusBarToggler.statusText).to.equal("$(circle-large-outline) Watch");
    });

    test("Should show the spinner when setting the `isLoading` status @unit", () => {
        const statusBarToggler = new StatusBarToggler(stubConfig);
        statusBarToggler.setLoading(true);
        expect(statusBarToggler.statusText).to.equal("$(loading~spin) Coverage");
        statusBarToggler.toggle(true);
        expect(statusBarToggler.statusText).to.equal("$(loading~spin) Coverage");
        statusBarToggler.setLoading(false);
        expect(statusBarToggler.statusText).to.equal("$(circle-large-outline) No Coverage");
    });

    test("Should show coverage when a number is set @unit", () => {
        const statusBarToggler = new StatusBarToggler(stubConfig);
        statusBarToggler.toggle(true);
        statusBarToggler.setLoading(false);
        expect(statusBarToggler.statusText).to.equal("$(circle-large-outline) No Coverage");
        statusBarToggler.setCoverage(84);
        expect(statusBarToggler.statusText).to.equal("$(circle-large-outline) 84% Coverage");
        statusBarToggler.setCoverage(undefined);
        expect(statusBarToggler.statusText).to.equal("$(circle-large-outline) No Coverage");
        statusBarToggler.setCoverage(50);
        expect(statusBarToggler.statusText).to.equal("$(circle-large-outline) 50% Coverage");
        statusBarToggler.setCoverage(0);
        expect(statusBarToggler.statusText).to.equal("$(circle-large-outline) 0% Coverage");
    });

    test("Should dispose when asked @unit", () => {
        const statusBarToggler = new StatusBarToggler(stubConfig);
        statusBarToggler.dispose();
    });
});
