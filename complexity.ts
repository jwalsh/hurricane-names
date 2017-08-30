declare module namespace {

    export interface Sloc {
        logical: number;
        physical: number;
    }

    export interface Halstead {
        vocabulary: number;
        difficulty: number;
        volume: number;
        effort: number;
        bugs: number;
        time: number;
    }

    export interface Aggregate {
        sloc: Sloc;
        params: number;
        cyclomatic: number;
        cyclomaticDensity: number;
        halstead: Halstead;
    }

    export interface Sloc2 {
        logical: number;
        physical: number;
    }

    export interface Halstead2 {
        vocabulary: number;
        difficulty: number;
        volume: number;
        effort: number;
        bugs: number;
        time: number;
    }

    export interface Function {
        name: string;
        line: number;
        sloc: Sloc2;
        params: number;
        cyclomatic: number;
        cyclomaticDensity: number;
        halstead: Halstead2;
    }

    export interface RootObject {
        maintainability: number;
        dependencies: any[];
        aggregate: Aggregate;
        functions: Function[];
    }

}

