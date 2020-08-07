import React, { useEffect } from "react";
import { Container, CardColumns, Jumbotron } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { blogActions } from "../../redux/actions";
import BlogCard from "../../components/BlogCard";
import ClipLoader from "react-spinners/ClipLoader";

const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.blog.loading);
  const blogs = useSelector((state) => state.blog.blogs);
  console.log(blogs);
  useEffect(() => {
    dispatch(blogActions.blogsRequest());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Jumbotron className="text-center">
          <h1>Social Blog</h1>
          <p>Write about your amazing experiences.</p>
        </Jumbotron>
        {loading ? (
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        ) : (
          <>
            {blogs.length ? (
              <CardColumns>
                {blogs.map((blog) => (
                  <BlogCard blog={blog} key={blog._id} />
                ))}
              </CardColumns>
            ) : (
              <p>There are no blogs</p>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default HomePage;
