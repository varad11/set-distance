"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SetOperation = /** @class */ (function () {
    /**
    * @method: Init SetOperation Contructor with two sets.
    */
    function SetOperation(set1, set2) {
        this.set1 = set1;
        this.set2 = set2;
    }
    /**
    * @method: Returns measure of Intersection between two sets.
    * @param {}
    * @return {number}
    */
    SetOperation.prototype.getIntersectionMeasure = function () {
        var intersection = 0;
        if ((this.set1 && this.set2) && (Array.isArray(this.set1) && Array.isArray(this.set2))) {
            var shortSet = void 0;
            var longSet_1;
            if (this.set1.length < this.set2.length) {
                shortSet = this.set1;
                longSet_1 = this.set2;
            }
            else {
                shortSet = this.set2;
                longSet_1 = this.set1;
            }
            intersection = shortSet.filter(function (value) { return -1 !== longSet_1.indexOf(value); }).length;
        }
        return intersection;
    };
    /**
    * @method: Returns measure of Union between two sets.
    * @param {}
    * @return {number}
    */
    SetOperation.prototype.getUnionMeasure = function () {
        var union = 0;
        if ((this.set1 && this.set2) && (Array.isArray(this.set1) && Array.isArray(this.set2))) {
            union = this.set1.length + this.set2.length - this.getIntersectionMeasure();
        }
        return union;
    };
    SetOperation.prototype.getMatrix = function () {
        var matrix;
        matrix = [];
        for (var i = 0; i < this.set1.length; i++) {
            matrix[i] = new Array(this.set2.length);
            if (i === 0) {
                for (var j = 0; j < matrix[i].length; j++) {
                    matrix[i][j] = j;
                }
            }
            else {
                for (var j = 0; j < matrix[i].length; j++) {
                    matrix[i][j] = i;
                }
            }
        }
        return matrix;
    };
    return SetOperation;
}());
/**
* @class: Ochiai Coefficient
*/
var Ochiai = /** @class */ (function (_super) {
    __extends(Ochiai, _super);
    function Ochiai(set1, set2) {
        var _this = _super.call(this, set1, set2) || this;
        _this.coefficient = 0;
        return _this;
    }
    /**
    * @method: Calculate and return Ochiai Coefficient
    * @param {}
    * @returns {any}
    */
    Ochiai.prototype.getCoefficient = function () {
        try {
            this.coefficient = _super.prototype.getIntersectionMeasure.call(this) / (Math.sqrt(this.set1.length * this.set2.length));
            return this.coefficient;
        }
        catch (error) {
            return error;
        }
    };
    return Ochiai;
}(SetOperation));
exports.Ochiai = Ochiai;
/**
* @class: Sorensen-Dice Coefficient
*/
var SorensenDice = /** @class */ (function (_super) {
    __extends(SorensenDice, _super);
    function SorensenDice(set1, set2) {
        var _this = _super.call(this, set1, set2) || this;
        _this.coefficient = 0;
        return _this;
    }
    /**
    * @method: Calculate and return Sorensen-Dice Coefficient
    * @param {}
    * @returns {any}
    */
    SorensenDice.prototype.getCoefficient = function () {
        try {
            this.coefficient = (2 * _super.prototype.getIntersectionMeasure.call(this)) / (this.set1.length + this.set2.length);
            return this.coefficient;
        }
        catch (error) {
            return error;
        }
    };
    return SorensenDice;
}(SetOperation));
exports.SorensenDice = SorensenDice;
/**
* @class: Jaccard Coefficient
*/
var Jaccard = /** @class */ (function (_super) {
    __extends(Jaccard, _super);
    function Jaccard(set1, set2) {
        var _this = _super.call(this, set1, set2) || this;
        _this.coefficient = 0;
        return _this;
    }
    /**
    * @method: Calculate and return Jaccard Coefficient
    * @param {}
    * @returns {any}
    */
    Jaccard.prototype.getCoefficient = function () {
        try {
            this.coefficient = this.getIntersectionMeasure() / this.getUnionMeasure();
            return this.coefficient;
        }
        catch (error) {
            return error;
        }
    };
    return Jaccard;
}(SetOperation));
exports.Jaccard = Jaccard;
/**
* @class: Overlap Coefficient
*/
var Overlap = /** @class */ (function (_super) {
    __extends(Overlap, _super);
    function Overlap(set1, set2) {
        var _this = _super.call(this, set1, set2) || this;
        _this.coefficient = 0;
        return _this;
    }
    /**
    * @method: Calculate and return Overlap Coefficient
    * @param {}
    * @returns {any}
    */
    Overlap.prototype.getCoefficient = function () {
        try {
            this.coefficient = this.getIntersectionMeasure() / Math.min(this.set1.length, this.set2.length);
            return this.coefficient;
        }
        catch (error) {
            return error;
        }
    };
    return Overlap;
}(SetOperation));
exports.Overlap = Overlap;
/**
* @class: Levenshtein Coefficient
*/
var Levenshtein = /** @class */ (function (_super) {
    __extends(Levenshtein, _super);
    function Levenshtein(set1, set2) {
        var _this = this;
        set1.unshift(0);
        set2.unshift(0);
        (set1.length <= set2.length) ? _this = _super.call(this, set1, set2) || this : _this = _super.call(this, set2, set1) || this;
        _this.coefficient = 0;
        return _this;
    }
    /**
    * @method: Calculate and return Levenshtein Coefficient
    * @param {}
    * @returns {any}
    */
    Levenshtein.prototype.getCoefficient = function () {
        try {
            var distanceMat = this.getMatrix();
            var cost = void 0;
            for (var i = 1; i < this.set1.length; i++) {
                for (var j = 1; j < this.set2.length; j++) {
                    cost = 0;
                    //distanceMat[i][j] = cost;
                    if (this.set1[i] !== this.set2[j]) {
                        cost = 1;
                    }
                    distanceMat[i][j] = Math.min(distanceMat[i - 1][j - 1] + 1, distanceMat[i][j - 1] + 1, distanceMat[i - 1][j - 1] + cost);
                }
            }
            this.coefficient = distanceMat[this.set1.length - 1][this.set2.length - 1];
            return this.coefficient;
        }
        catch (error) {
            return error;
        }
    };
    return Levenshtein;
}(SetOperation));
exports.Levenshtein = Levenshtein;
/**
 * @class: Euclidean Distance
 */
var Euclidean = /** @class */ (function () {
    function Euclidean(set1, set2) {
        this.set1 = set1;
        this.set2 = set2;
        this.distance = 0;
    }
    /**
    * @method: Calculate and return higher dimension Euclidean Distance
    * @param {}
    * @returns {number | Error}
    */
    Euclidean.prototype.getDistance = function () {
        try {
            if (this.set1.length == this.set2.length) {
                var squaredDistance = this.getSquaredDistance();
                this.distance = typeof squaredDistance === "number" ? Math.sqrt(squaredDistance) : 0;
                return this.distance;
            }
            throw new Error("Euclidean distance supports only pairs");
        }
        catch (error) {
            return error;
        }
    };
    /**
    * @method: Calculate and return higher dimension Squared Euclidean Distance
    * @param {}
    * @returns {number | Error}
    */
    Euclidean.prototype.getSquaredDistance = function () {
        var _this = this;
        try {
            if (this.set1.length == this.set2.length) {
                return this.set1.reduce(function (prev, current, index) {
                    return prev + Math.pow((current - _this.set2[index]), 2);
                }, 0);
            }
            throw new Error("Euclidean distance supports only pairs");
        }
        catch (error) {
            return error;
        }
    };
    return Euclidean;
}());
exports.Euclidean = Euclidean;
