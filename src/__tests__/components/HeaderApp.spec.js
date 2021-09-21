import React from 'react';
import { shallow } from 'enzyme';
import HeaderApp from '../../components/HeaderApp/HeaderApp';

describe('HeaderApp', () => {
    it('should render correctly', () => {
        const renderedModule = shallow(<HeaderApp />);
        expect(renderedModule).toMatchSnapshot();
    });
})