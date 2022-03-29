import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import BlogList from '../components/BlogList';

import * as styles from './index.module.css';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`);

  return (
    <Layout>
    </Layout>
  );
}

