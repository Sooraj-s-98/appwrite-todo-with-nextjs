import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

import MuiLink from '@material-ui/core/Link';

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
  const { as, href, prefetch, ...other } = props;
  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

NextComposed.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  prefetch: PropTypes.bool,
};

const Link = ({ href, innerRef, naked, ...other }) => {
  if (naked) {
    return (
      <NextComposed data-ref="naked" ref={innerRef} href={href} {...other} />
    );
  }

  return (
    <MuiLink component={NextComposed} ref={innerRef} href={href} {...other} />
  );
};

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
};

const ForwardLink = React.forwardRef((props, ref) => (
  <Link {...props} innerRef={ref} />
));

export default ForwardLink;
