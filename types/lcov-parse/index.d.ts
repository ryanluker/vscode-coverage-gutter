declare namespace parse {
    function source(str: string, cb: (err: Error, data: Array<LcovSection>) => void): void

    interface LineDetail {
        hit: number,
        line: number
    }

    interface BranchDetail {
        block: number,
        branch: number,
        line: number,
        taken: number
    }

    interface FunctionDetail {
        hit: number,
        line: number,
        name: string
    }

    interface Lines {
        details: Array<LineDetail>,
        hit: number,
        found: number
    }

    interface Branches {
        details: Array<BranchDetail>,
        hit: number,
        found: number
    }

    interface Functions {
        details: Array<FunctionDetail>,
        hit: number,
        found: number
    }

    interface LcovSection {
        branches: Branches,
        file: string,
        functions: Functions,
        lines: Lines
    }
}

declare module "lcov-parse" {
    export = parse;
}