import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Camille Cushman LLC</h1>
    <p>She&apos;s the bee&apos;s knees</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more about her
    </Link>
  </div>
);

export default HomePage;
