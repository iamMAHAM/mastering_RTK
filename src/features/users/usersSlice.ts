import { users } from '../../utils/users';
import { RootState } from './../../app/store';
import { createSlice } from '@reduxjs/toolkit';

export type IUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const initialState: IUser[] = users;

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: RootState) => state.users;
export const {} = userSlice.actions;

export default userSlice.reducer;
