import React, { useEffect, useState } from "react";
import Table from "./Table";
import { GetPosts, CreatePost, DeletePost } from "../apiServices";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const initState = { title: "", content: "" };

function Post() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [post, setPost] = useState(initState);

  useEffect(() => {
    dispatch(GetPosts());
  }, []);

  const { posts } = useSelector((state) => state.post);

  const createPost = () => {
    dispatch(
      CreatePost({
        userId: "322343434565767676",
        title: post.title,
        content: post.content,
      })
    );
  };

  const deletePost = (id) => {
    dispatch(DeletePost({ id }));
  };

  const onChange = (type, value) => {
    setPost({ ...post, [type]: value });
  };

  const clear = () => {
    setPost(initState);
  };

  const navigateToUsers = () => {
    history.push("/user");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-9">
          <h2>Posts</h2>
        </div>
        <div className="col-md-2">
          <button className="btn btn-secondary" onClick={navigateToUsers}>
            Navigate to Users
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <form>
            <div className="mb-3">
              <label htmlFor="nameData" className="form-label">
                Title
              </label>
              <input
                type="text"
                value={post.title}
                aria-describedby="name"
                className="form-control"
                onChange={(e) => onChange("title", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="usernameData" className="form-label">
                Content
              </label>
              <input
                type="text"
                value={post.content}
                className="form-control"
                aria-describedby="username"
                onChange={(e) => onChange("content", e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-9"></div>
        <div className="col-md-1">
          <button className="btn btn-primary" onClick={clear}>
            Cancel
          </button>
        </div>
        <div className="col-md-1">
          <button className="btn btn-primary" onClick={createPost}>
            Save
          </button>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div style={{ height: "25px" }} />
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <Table data={posts} remove={deletePost} type="post" />
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default Post;
