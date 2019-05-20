declare class SetOperation {
    protected set1: Array<string | number>;
    protected set2: Array<string | number>;
    /**
    * @method: Init SetOperation Contructor with two sets.
    */
    constructor(set1: Array<string | number>, set2: Array<string | number>);
    /**
    * @method: Returns measure of Intersection between two sets.
    * @param {}
    * @return {number}
    */
    protected getIntersectionMeasure(): number;
    /**
    * @method: Returns measure of Union between two sets.
    * @param {}
    * @return {number}
    */
    protected getUnionMeasure(): number;
    protected getMatrix(): Array<Array<number>>;
}
/**
* @class: Ochiai Coefficient
*/
export declare class Ochiai extends SetOperation {
    private coefficient;
    constructor(set1: Array<string | number>, set2: Array<string | number>);
    /**
    * @method: Calculate and return Ochiai Coefficient
    * @param {}
    * @returns {any}
    */
    getCoefficient(): any;
}
/**
* @class: Sorensen-Dice Coefficient
*/
export declare class SorensenDice extends SetOperation {
    private coefficient;
    constructor(set1: Array<string | number>, set2: Array<string | number>);
    /**
    * @method: Calculate and return Sorensen-Dice Coefficient
    * @param {}
    * @returns {any}
    */
    getCoefficient(): any;
}
/**
* @class: Jaccard Coefficient
*/
export declare class Jaccard extends SetOperation {
    private coefficient;
    constructor(set1: Array<string | number>, set2: Array<string | number>);
    /**
    * @method: Calculate and return Jaccard Coefficient
    * @param {}
    * @returns {any}
    */
    getCoefficient(): any;
}
/**
* @class: Overlap Coefficient
*/
export declare class Overlap extends SetOperation {
    private coefficient;
    constructor(set1: Array<string | number>, set2: Array<string | number>);
    /**
    * @method: Calculate and return Overlap Coefficient
    * @param {}
    * @returns {any}
    */
    getCoefficient(): any;
}
/**
* @class: Overlap Coefficient
*/
export declare class Levenshtein extends SetOperation {
    private coefficient;
    constructor(set1: Array<string | number>, set2: Array<string | number>);
    /**
    * @method: Calculate and return Overlap Coefficient
    * @param {}
    * @returns {any}
    */
    getCoefficient(): any;
}
export {};
