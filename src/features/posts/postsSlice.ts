import { RootState } from './../../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { posts } from '../../utils/posts';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const initialState: Post[] = posts;

type StateType = typeof initialState;
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: (state: StateType, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
    postRemoved: (state: StateType, action: PayloadAction<number>) => {
      state.filter((post) => post.id !== action.payload);
    },
  },
});

export const { postAdded, postRemoved } = postsSlice.actions;

export const selectAllPosts = (state: RootState) => state.posts;
export const selectByPostId = (state: RootState, id: number) =>
  state.posts.find((p) => p.id === id);
export const selectBy = (state: RootState, selector: keyof Post) =>
  state.posts.filter((p) => p[selector] === selector);
export default postsSlice.reducer;
