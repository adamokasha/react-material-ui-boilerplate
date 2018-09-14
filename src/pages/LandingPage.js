import React from "react";

import NavMain from "../components/NavMain";
import HeroUnit from "../components/HeroUnit";
import CardGrid from "../components/CardGrid";

export const LandingPage = () => {
  return (
    <React.Fragment>
      <NavMain>
        <HeroUnit />
        <CardGrid />
      </NavMain>
    </React.Fragment>
  );
};

export default LandingPage;
