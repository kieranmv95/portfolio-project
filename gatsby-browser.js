import React from 'react';
import Layout from './src/components/Layout';
import Theme from './src/components/Theme';

export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <Theme>{element}</Theme>;
}
