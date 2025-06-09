class TestScores {
    #testScores = null;
    constructor() {
        this.#testScores = [];
    }

    add(score) {
        this.#testScores.push(score);
    }

    get avg() {
        const sum = this.#testScores.reduce((total, elem) => total + elem, 0);
        return sum/this.#testScores.length;
    }

    get toString() {
        let str = '';
        for (let score of this.#testScores) {
            str += score + ', ';
        }
        return str;
    }

    get toLetterString() {
        const grades = this.#testScores.map(elem => {
            if (elem >= 90) return "A";
            else if (elem >= 80) return "B";
            else if (elem >= 70) return "C";
            else if (elem >= 60) return "D";
            else return "F";
        });
        return grades.join(", ");
    }

    get toSortedString() {
        const sortedScores = this.#testScores.slice();
        sortedScores.sort((a, b) => b - a); 
        return sortedScores.join(", ");
    }
}