import React from "react";
import PublicNavbar from "../PublicNavbar";
import { Container, CardColumns, Jumbotron } from "react-bootstrap";
import BlogCard from "../../components/BlogCard";

const HomePage = () => {
  return (
    <>
      <Container>
        <Jumbotron className="text-center">
          <h1>Social Blog</h1>
          <p>Write about your amazing experiences.</p>
        </Jumbotron>
        <CardColumns>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </CardColumns>
      </Container>
    </>
  );
};

export default HomePage;
