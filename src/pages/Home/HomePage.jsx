import React from 'react';
import Categories from '../../components/Categories/Categories';

const HomePage = () => {
  return (
    <div>
      <h1>Trending today films:</h1>
      {<Categories />}
    </div>
  );
};

export default HomePage;
