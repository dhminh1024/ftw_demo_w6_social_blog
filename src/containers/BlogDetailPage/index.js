import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { blogActions } from "../../redux/actions";
import { Button } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import Moment from "react-moment";
import Markdown from "react-markdown";
import ReviewList from "../../components/ReviewList";

const BlogDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.selectedBlog);
  const loading = useSelector((state) => state.blog.loading);
  const history = useHistory();

  useEffect(() => {
    if (params?.id) {
      dispatch(blogActions.getSingleBlog(params.id));
    }
  }, [dispatch]);

  const handleGoBackClick = (e) => {
    history.goBack();
  };

  return (
    <>
      <div>
        <Button onClick={handleGoBackClick}>Back</Button>
        <h1>{blog.title}</h1>
      </div>
      {loading ? (
        <ClipLoader color="#f86c6b" size={150} loading={loading} />
      ) : (
        <>
          {blog && (
            <div className="mb-5">
              <h1>{blog.title}</h1>
              <span className="text-muted">
                @{blog?.user?.name} wrote{" "}
                <Moment fromNow>{blog.createdAt}</Moment>
              </span>
              <hr />
              <Markdown source={blog.content} />
              <hr />
              <ReviewList reviews={blog.reviews} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default BlogDetailPage;
