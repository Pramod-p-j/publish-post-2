import React, { useEffect, useState } from "react";
import "./view-posts.css";
import postsServices from "../../../../../services/posts-services";

function PublishedPosts(props) {
  const { open } = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (open) {
      postsServices
        .fetchPosts()
        .then((res) => setPosts(res.data.fetchedPosts))
        .catch((err) => err);
    }
  }, [open]);

  return (
    <>
      {open && (
        <div className="postsContainer">
          <div style={{ position: "absolute", right: "200px" }}>
            <h1>PublishedPosts</h1>
            {posts?.map((item, index) => (
              <div key={index} style={{ margin: "12px" }}>
                <div>
                  <span style={{ fontWeight: "bolder" }}>Title:</span>
                  {item?.postTitle}
                </div>
                <div>
                  <span style={{ fontWeight: "bolder" }}>Description:</span>
                  {item?.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PublishedPosts;
