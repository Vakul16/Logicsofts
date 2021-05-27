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
              src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/blog-list-2.png"
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
