import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:8080";

export const GetPosts = createAsyncThunk(
  "post/getPosts",
  async () => (await axios.get(`${BASE_URL}/posts`)).data
);

export const CreatePost = createAsyncThunk(
  "post/createPost",
  async (post) => (await axios.post(`${BASE_URL}/post`, post)).data
);

export const DeletePost = createAsyncThunk(
  "post/deletePost",
  async (post) => (await axios.post(`${BASE_URL}/post`, post)).data
);
