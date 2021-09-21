const MAX_NUMBER = 144;

// will return all divisible numbers of the given number whenever called
export const getAllDivisibleNumbers = number => (
    getDynamicArrayOfGivenSize().filter(item => item % number === 0)
)    

// will return the dynamic array of the given size whenever called
export const getDynamicArrayOfGivenSize = () =>  [...Array(MAX_NUMBER).keys()];
