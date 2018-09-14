import React from 'react';

import NavMain from '../components/NavMain';
import HeroUnit from '../components/HeroUnit';
import CardGrid from '../components/CardGrid';

export const LandingPage = () => {
  return (
    <div>
    <NavMain>
      <HeroUnit />
      <CardGrid />
    </NavMain>
    </div>
  )
}

export default LandingPage;