import React from "react";
import { Breadcrumb, Flowbite, Footer } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import Hero from "../components/Hero";

function App() {
  return (
    <Flowbite>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="#" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
        <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
      </Breadcrumb>
      <Hero />
      <Footer container>
        <Footer.Copyright href="#" by="Akolade™" year={2024} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </Flowbite>
  );
}

export default App;
