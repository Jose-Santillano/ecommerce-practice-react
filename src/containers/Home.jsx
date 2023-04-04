import React from 'react';

//State.
import initialState from '../initialState';

//Components.
import Products from '../components/Products';

const Home = () => {
  return (
    <Products products={initialState.products} />
  );
}

export default Home;