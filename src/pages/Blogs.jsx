import React from "react";
import blog1 from "../assets/blogs/blog1.png";
import blog2 from "../assets/blogs/blog2.png";
import blog3 from "../assets/blogs/blog3.png";

function blogs() {
  const blogs = [
    {
      id: 1,
      title: "Fashion trend forecast for Summer 2026",
      image: blog1,
      description:
        "Stay ahead of the season with our latest fashion insights and discover the trends defining summer 2026.",
      author: "BYC Africa",
      date: "August 2026",
      views: 35,
      likes: 23,
    },
    {
      id: 2,
      title: "Comfort Meets Style",
      image: blog2,
      description:
        "Explore everyday fashion that combines comfort, confidence, and timeless style.",
      author: "BYC Africa",
      date: "August 2026",
      views: 52,
      likes: 31,
    },
    {
      id: 3,
      title: "Why Quality Clothing Matters",
      image: blog3,
      description:
        "Quality clothing is more than appearance—it offers durability, comfort, and confidence.",
      author: "BYC Africa",
      date: "August 2026",
      views: 41,
      likes: 28,
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">BYC AFRICA BLOG NEWS</h2>
      </div>

      {blogs.map((blog, index) => (
        <div className="row align-items-center mb-5" key={blog.id}>
          {index % 2 === 0 ? (
            <>
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="img-fluid rounded shadow-sm"
                />
              </div>

              <div className="col-lg-6">
                <h4 className="fw-bold">{blog.title}</h4>

                <p className="text-muted">{blog.description}</p>

                <button className="btn btn-outline-dark">Read More →</button>

                <div className="d-flex align-items-center mt-4">
                  <div>
                    <h6 className="mb-0">{blog.author}</h6>
                    <small className="text-muted">{blog.date}</small>
                  </div>

                  <div className="ms-auto">
                    👁 {blog.views} &nbsp;&nbsp; ❤️ {blog.likes}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Text */}
              <div className="col-lg-6 order-2 order-lg-1">
                <h4 className="fw-bold">{blog.title}</h4>

                <p className="text-muted">{blog.description}</p>

                <button className="btn btn-outline-dark">Read More →</button>

                <div className="d-flex align-items-center mt-4">
                  <div>
                    <h6 className="mb-0">{blog.author}</h6>
                    <small className="text-muted">{blog.date}</small>
                  </div>

                  <div className="ms-auto">
                    👁 {blog.views} &nbsp;&nbsp; ❤️ {blog.likes}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </>
          )}
        </div>
      ))}

      <div className="text-center my-5">
        <h2 className="fw-bold">More Blog News</h2>
      </div>

      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={`more-${blog.id}`}>
            <div className="card border-0 shadow-sm h-100">
              <img
                src={blog.image}
                alt={blog.title}
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body">
                <h5 className="fw-bold">{blog.title}</h5>

                <p className="text-muted small">
                  {blog.description.substring(0, 80)}...
                </p>

                <button className="btn btn-sm btn-dark">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default blogs;
