class SetOperation {
    protected set1: Array<string | number>;
    protected set2: Array<string | number>;

    /**
    * @method: Init SetOperation Contructor with two sets.
    */
    constructor(set1: Array<string | number>, set2: Array<string | number>) {
        this.set1 = set1;
        this.set2 = set2;
    }

    /**
    * @method: Returns measure of Intersection between two sets.
    * @param {}
    * @return {number}
    */
    protected getIntersectionMeasure(): number {        
        let intersection = 0;
        if((this.set1 && this.set2) && (Array.isArray(this.set1) && Array.isArray(this.set2))) {
            let shortSet: Array<string | number>;
            let longSet: Array<string | number>;
            if(this.set1.length < this.set2.length) {
                shortSet = this.set1;
                longSet = this.set2;
            } else {
                shortSet = this.set2;	
                longSet = this.set1;
            }
            intersection =  shortSet.filter(value => -1 !== longSet.indexOf(value)).length;
        }
        return intersection;         
    }

    /**
    * @method: Returns measure of Union between two sets.
    * @param {}
    * @return {number}
    */
    protected getUnionMeasure(): number {
        let union = 0;
        if((this.set1 && this.set2) && (Array.isArray(this.set1) && Array.isArray(this.set2))) {
            union = this.set1.length + this.set2.length - this.getIntersectionMeasure();
        }
        return union;
    }

    protected getMatrix(): Array<Array<number>> {
        let matrix: Array<Array<number>>;
            matrix = [];
            for (let i = 0; i < this.set1.length; i++) {
                matrix[i] = new Array(this.set2.length);
                if(i === 0) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        matrix[i][j] = j;                    
                    }
                } else {
                    
                    for (let j = 0; j < matrix[i].length; j++) {
                        matrix[i][j] = i;                    
                    }
                }
            }
        return matrix;
    }
}

/**
* @class: Ochiai Coefficient
*/
export class Ochiai extends SetOperation {
    private coefficient: number;
    constructor(set1: Array<string | number>, set2: Array<string | number>) {
        super(set1, set2);
        this.coefficient = 0;
    }

    /**
    * @method: Calculate and return Ochiai Coefficient
    * @param {}
    * @returns {any}
    */
    public getCoefficient(): any {
        try {
            this.coefficient = super.getIntersectionMeasure() / (Math.sqrt(this.set1.length * this.set2.length));
            return this.coefficient;
        } catch (error) {
            return error;
        }        
    }
}

/**
* @class: Sorensen-Dice Coefficient
*/
export class SorensenDice extends SetOperation {
    private coefficient: number;
    constructor(set1: Array<string | number>, set2: Array<string | number>) {
        super(set1, set2);
        this.coefficient = 0;
    }

    /**
    * @method: Calculate and return Sorensen-Dice Coefficient
    * @param {}
    * @returns {any}
    */
    public getCoefficient(): any {
        try {
            this.coefficient = (2 * super.getIntersectionMeasure())/(this.set1.length + this.set2.length);
            return this.coefficient;
        } catch (error) {
            return error;            
        }        
    }
}

/**
* @class: Jaccard Coefficient
*/
export class Jaccard extends SetOperation {
    private coefficient: number;
    constructor(set1: Array<string | number>, set2: Array<string | number>) {
        super(set1, set2);
        this.coefficient = 0;
    }

    /**
    * @method: Calculate and return Jaccard Coefficient
    * @param {}
    * @returns {any}
    */
    public getCoefficient(): any {
        try {
            this.coefficient = this.getIntersectionMeasure()/this.getUnionMeasure();
            return this.coefficient;
        } catch (error) {
            return error;            
        }        
    }
}

/**
* @class: Overlap Coefficient
*/
export class Overlap extends SetOperation {
    private coefficient: number;
    constructor(set1: Array<string | number>, set2: Array<string | number>) {
        super(set1, set2);
        this.coefficient = 0;
    }

    /**
    * @method: Calculate and return Overlap Coefficient
    * @param {}
    * @returns {any}
    */
    public getCoefficient(): any {
        try {
            this.coefficient = this.getIntersectionMeasure()/Math.min(this.set1.length, this.set2.length);
            return this.coefficient;
        } catch (error) {
            return error;            
        }        
    }
}

/**
* @class: Overlap Coefficient
*/
export class Levenshtein extends SetOperation {
    private coefficient: number;
    constructor(set1: Array<string | number>, set2: Array<string | number>) {
        set1.unshift(0);
        set2.unshift(0);
        (set1.length <= set2.length)? super(set1, set2) : super(set2, set1);
        this.coefficient = 0;
    }

    /**
    * @method: Calculate and return Overlap Coefficient
    * @param {}
    * @returns {any}
    */
    public getCoefficient(): any {
        try {
            let distanceMat = this.getMatrix();
            let cost;
            for (let i = 1; i < this.set1.length; i++) {
                for (let j = 1; j < this.set2.length; j++) {
                    cost = 0;
                    //distanceMat[i][j] = cost;
                    if(this.set1[i] !== this.set2[j]) {
                        cost = 1;
                    }
                    distanceMat[i][j] = Math.min(distanceMat[i-1][j-1] + 1,
                                                distanceMat[i][j-1] + 1,
                                                distanceMat[i-1][j-1] + cost);
                }                
            }
            this.coefficient = distanceMat[this.set1.length - 1][this.set2.length - 1];
            return this.coefficient;
        } catch (error) {
            return error;            
        }        
    }
}