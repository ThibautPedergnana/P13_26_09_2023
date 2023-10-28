import React from "react";
import Container from "../../components/container/Container";
import "../../../src/Global.css";
import Banner from "../../components/banner/Banner";
import Feature from "../../components/features/Feature";

export function Home() {
  return (
    <Container>
      <Banner />
      <Feature />
    </Container>
  );
}
