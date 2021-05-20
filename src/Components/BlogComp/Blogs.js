import React from "react";
import "./Blog.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
const Blogs = ({ blogs }) => {
  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <div className="blogs-lists">
          {/* Used MDBootstrap for display blogs in cards */}
          <MDBCard
            className="card"
            key={blog.id}
            style={{ maxWidth: "22rem" }}
            width="276"
            height="395"
          >
            <MDBCardImage
              src="https://cdn.lifehack.org/wp-content/uploads/2013/07/best-blogs-1024x768.jpeg"
              position="top"
              alt="..."
              width="350"
              height="230"
            />
            <MDBCardBody className="card-body">
              <MDBCardTitle className="blog-title">{blog.title} </MDBCardTitle>
              <MDBCardText className="blog-body">{blog.body}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
