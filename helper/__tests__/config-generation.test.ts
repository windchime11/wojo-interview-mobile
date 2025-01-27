import { generateAllCombs } from "../config-generation";

const config1 = [{ S: 1 }]
const config2 = [{ S: 2 }, { D: 1 }]
const config3 = [{ S: 3 }, { S: 1, D: 1 }, { F: 1 }]
const config4 = [{ S: 4 }, { S: 2, D: 1 }, { D: 2 }, { F: 1, S: 1 }, { Q: 1 }]
const config5 = [{ S: 5 }, { S: 3, D: 1 }, { F: 1, S: 2 }, { D: 2, S: 1 }, { Q: 1, S: 1 }, { D: 1, F: 1 }]
const config6 = [{ S: 6 }, {D: 1, S: 4}, { F: 1, S: 3 }, { D: 2, S: 2 }, { Q: 1, S: 2 }, { D: 1, F: 1, S: 1 },
 {D: 3}, {D: 1, Q: 1}, {F: 2}]

describe('generateAllCombs', () => {
    describe('generate', () => {
      it('should generate combinations correctly', () => {
        expect(generateAllCombs(0)).toStrictEqual([]);
        expect(generateAllCombs(1)).toStrictEqual(config1);
        expect(generateAllCombs(2)).toStrictEqual(config2);
        expect(generateAllCombs(3)).toStrictEqual(config3);
        expect(generateAllCombs(4)).toStrictEqual(config4);
        expect(generateAllCombs(5)).toStrictEqual(config5);
        expect(generateAllCombs(6)).toStrictEqual(config6);
      });
    });
});