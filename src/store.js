import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./redux/post/postSlice";
import userSlice from "./redux/user/userSlice";

export default configureStore({
  reducer: {
    post: postSlice,
    user: userSlice,
  },
});
