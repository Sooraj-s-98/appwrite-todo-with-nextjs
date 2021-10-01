import React from 'react';
import { shallow } from 'enzyme';

import Flex from './flex';

describe('Flex', () => {
  it('Should have display flex property', () => {
    const flex = shallow(<Flex>test</Flex>);

    expect(flex.props()).toHaveProperty('display', 'flex');
  });
});
