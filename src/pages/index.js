import React from 'react'
import Why from '../components/why'
import LatestRecipes from '../components/latestRecipes'
import LatestArticles from '../components/latestArticles'
import Layout from '../layouts/layout'

export default () => (
  <Layout>
    <Why />
    <LatestRecipes />
    <LatestArticles />
  </Layout>
);
