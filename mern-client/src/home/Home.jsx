// Home.jsx

import React from 'react';
import Banner from '../components/Banner'; // Update import path for Banner component
import BestSellerBooks from './BestSellBooks'; // Update import path for BestSellerBooks component
import FavBook from './FavBook';
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Review from './Review';

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerBooks />
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
      {/* Other components */}
    </div>
  );
};

export default Home;
