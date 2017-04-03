import {ConfigStore} from "./config";
import {InterfaceFs} from "./wrappers/fs";
import {InterfaceVscode} from "./wrappers/vscode";

export interface InterfaceLcov {
    find(): Promise<string>;
    load(lcovPath: string): Promise<string>;
}

export class Lcov implements InterfaceLcov {
    private configStore: ConfigStore;
    private vscode: InterfaceVscode;
    private fs: InterfaceFs;

    constructor(
        configStore: ConfigStore,
        vscode: InterfaceVscode,
        fs: InterfaceFs,
    ) {
        this.configStore = configStore;
        this.vscode = vscode;
        this.fs = fs;
    }

    public find(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.vscode.findFiles("**/" + this.configStore.lcovFileName, "**/node_modules/**")
                .then((uriLcov) => {
                    if (!uriLcov || !uriLcov.length) { return reject("Could not find a lcov file!"); }
                    if (uriLcov.length > 1) { return reject("More then one lcov file found!"); }
                    return resolve(uriLcov[0].fsPath);
                });
        });
    }

    public load(lcovPath: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.fs.readFile(lcovPath, (err, data) => {
                if (err) { return reject(err); }
                return resolve(data.toString());
            });
        });
    }
}
