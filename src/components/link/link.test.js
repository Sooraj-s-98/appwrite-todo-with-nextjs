import React from 'react';
import { mount } from 'enzyme';

import Link from './link';

describe('Link', () => {
  it('Should have a mui link component if naked is false', () => {
    const wrapper = mount(<Link href="/">Link</Link>);

    expect(wrapper.find('.MuiLink-root').length).toBeTruthy();
    expect(wrapper.find('[data-ref="naked"]').length).toBeFalsy();
  });
  it('Should have a naked component if naked is true', () => {
    const wrapper = mount(
      <Link naked href="/">
        Link
      </Link>
    );

    expect(wrapper.find('[data-ref="naked"]').length).toBeTruthy();
    expect(wrapper.find('.MuiLink-root').length).toBeFalsy();
  });
});
