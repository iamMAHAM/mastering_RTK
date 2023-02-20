import { RootState } from './../../app/store';
import {
  createSlice,
  PayloadAction,
  nanoid,
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const datas: Post[] = await (
    await fetch('https://jsonplaceholder.typicode.com/posts')
  ).json();
  return datas;
});

export type Post = {
  userId: number;
  id: string;
  title: string;
  body: string;
};

type State = {
  posts: Post[];
  error?: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
};
const initialState: State = {
  posts: [],
  error: undefined,
  status: 'idle',
};

type StateType = typeof initialState;
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer: (state: StateType, action: PayloadAction<Post>) => {
        state.posts.push(action.payload);
      },
      prepare: (title: string, body: string, userId: number) => ({
        payload: { id: nanoid(), title, body, userId },
      }),
    },
    postRemoved: (state: StateType, action: PayloadAction<string>) => {
      state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const loaded = action.payload.map((p) => ({ ...p, id: p.id.toString() }));
      state.posts = state.posts.concat(loaded);
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = 'failed';
    });
  },
});

export const { postAdded, postRemoved } = postsSlice.actions;

export const selectAllPosts = (state: RootState) => state.posts.posts;
export const getPostStatus = (state: RootState) => state.posts.status;
export const getPostsError = (state: RootState) => state.posts.error;
export default postsSlice.reducer;
