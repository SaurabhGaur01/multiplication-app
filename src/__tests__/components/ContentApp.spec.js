import React from 'react';
import { shallow } from 'enzyme';
import ContentApp from '../../components/ContentApp/ContentApp';
import * as utils from '../../utils/index';

describe('ContentApp', () => {
    it('should render correctly', () => {
        jest.spyOn(utils, 'getDynamicArrayOfGivenSize').mockImplementation(() => [ 1,2,3,4,5 ]);
        const renderedModule = shallow(<ContentApp />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call onCityChange when input changes', () => {
        jest.spyOn(utils, 'getDynamicArrayOfGivenSize').mockImplementation(() => [ 1,2,3 ]);
        const divisibleSpy = jest.spyOn(utils, 'getAllDivisibleNumbers').mockImplementation(() => [ 1 ]);
        const renderedModule = shallow(<ContentApp />);
        renderedModule.find('#list-item-1').at(0).simulate('click');
        expect(divisibleSpy).toHaveBeenCalled();
        expect(divisibleSpy).toHaveBeenCalledWith(2);
    });

    it("should update state on click", () => {
        jest.spyOn(utils, 'getDynamicArrayOfGivenSize').mockImplementation(() => [ 1,2,3 ]);
        const setActiveIndexes = jest.fn();
        const renderedModule = shallow(<ContentApp />);
        const useStateMock = jest.spyOn(React, "useState");
       
        useStateMock.mockImplementation(activeIndexes => [activeIndexes, setActiveIndexes]);
        renderedModule.find('#list-item-1').at(0).simulate('click');
        expect(setActiveIndexes).toBeTruthy();
      });
})