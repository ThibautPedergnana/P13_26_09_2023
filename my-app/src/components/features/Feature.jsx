import React from "react";
import Contact from "./Contact";
import Interest from "./Interest";
import Security from "./Security";

function Feature() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Contact />
      <Interest />
      <Security />
    </section>
  );
}

export default Feature;
