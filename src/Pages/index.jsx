import { useState } from 'react';
import ProductList from './ProductList';
import Collections from './Collections';
import Layout from './Layout';
import PopularCategories from './PopularCategories';
import FeatureItems from './FeatureItems';
import Banner from './Banner';


function Pages() {

  return (
    <>
      <Layout>
        <Banner/>
        <FeatureItems/>
        <ProductList/>
        <PopularCategories/>
        <Collections/>
      </Layout>
    </>
  )
}

export default Pages
