import { useState } from 'react';
import ProductList from './ProductList';
import Collections from './Collections';
import Layout from './Layout';
import PopularCategories from './PopularCategories';
import FeatureItems from './FeatureItems';


function Pages() {

  return (
    <>
      <Layout>
        <FeatureItems/>
        <ProductList/>
        <PopularCategories/>
        <Collections/>
      </Layout>
    </>
  )
}

export default Pages
