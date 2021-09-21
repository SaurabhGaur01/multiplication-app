import { getAllDivisibleNumbers, getDynamicArrayOfGivenSize } from '../../utils/index';

describe('Utility function Test', () => {
    it('should return the dynamic array of given size when called', () => {
        expect(getDynamicArrayOfGivenSize().length)
        .toEqual(144);
    });

    it('should return all numbers which are divisible by the argumented number recieved', () => {
        expect(getAllDivisibleNumbers(10))
        .toEqual([0,10,20,30,40,50,60,70,80,90,100,110,120,130,140]);
    });
})