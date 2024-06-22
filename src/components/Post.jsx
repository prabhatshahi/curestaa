import React from "react";
import post1 from "../images/post-1.jpg";
import post2 from "../images/post-2.jpg";
import post3 from "../images/post-3.jpg";
const Post = () => {
  return (
    <div>
      {/* posts section */}
      <section id="posts" className="posts py">
        <div className="container">
          <div className="section-head">
            <h2>Latest Post</h2>
          </div>
          <div className="posts-inner grid">
            <article className="post-item bg-white">
              <div className="img">
                <img src={post1} alt="Post 1" />
              </div>
              <div className="content">
                <h4>
                  Inspiring stories of person and family centered care during a
                  global pandemic.
                </h4>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptas eius recusandae sunt obcaecati esse facere
                  cumque. Aliquid, cupiditate debitis.
                </p>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quia ipsam, quis iure sed nulla.
                </p>
                <div className="info flex">
                  <small className="text text-sm">
                    <i className="fas fa-clock"></i> October 27, 2024
                  </small>
                  <small className="text text-sm">
                    <i className="fas fa-comment"></i> 5 comments
                  </small>
                </div>
              </div>
            </article>

            <article className="post-item bg-white">
              <div className="img">
                <img src={post2} alt="Post 2" />
              </div>
              <div className="content">
                <h4>
                  Inspiring stories of person and family centered care during a
                  global pandemic.
                </h4>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptas eius recusandae sunt obcaecati esse facere
                  cumque. Aliquid, cupiditate debitis.
                </p>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quia ipsam, quis iure sed nulla.
                </p>
                <div className="info flex">
                  <small className="text text-sm">
                    <i className="fas fa-clock"></i> October 27, 2024
                  </small>
                  <small className="text text-sm">
                    <i className="fas fa-comment"></i> 5 comments
                  </small>
                </div>
              </div>
            </article>

            <article className="post-item bg-white">
              <div className="img">
                <img src={post3} alt="Post 3" />
              </div>
              <div className="content">
                <h4>
                  Inspiring stories of person and family centered care during a
                  global pandemic.
                </h4>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptas eius recusandae sunt obcaecati esse facere
                  cumque. Aliquid, cupiditate debitis.
                </p>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quia ipsam, quis iure sed nulla.
                </p>
                <div className="info flex">
                  <small className="text text-sm">
                    <i className="fas fa-clock"></i> October 27, 2024
                  </small>
                  <small className="text text-sm">
                    <i className="fas fa-comment"></i> 5 comments
                  </small>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* end of posts section */}
    </div>
  );
};

export default Post;
