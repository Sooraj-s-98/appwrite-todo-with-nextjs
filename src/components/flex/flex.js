import React from 'react';
import { node } from 'prop-types';

import Box from '@material-ui/core/Box';

const Flex = ({ children, ...rest }) => (
  <Box display="flex" {...rest}>
    {children}
  </Box>
);

Flex.propTypes = {
  children: node.isRequired,
};

export default Flex;
