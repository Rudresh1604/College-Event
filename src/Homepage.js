import React from "react";
import Benefits from "./Pages/Benefits";
import Header from "./Components/Header";

import EventList from "./Pages/EventList";
import EventTypes from "./Pages/EventTypes";
import Footer from "./Components/Footer";
import Intro from "./Pages/Intro";
import Sponsors from "./Pages/Sponsors";

function Homepage() {
  return (
    <div>
      <Header />
      <Intro />
      <EventTypes />
      <Benefits />
      <EventList />
      <Sponsors />
    </div>
  );
}

export default Homepage;
