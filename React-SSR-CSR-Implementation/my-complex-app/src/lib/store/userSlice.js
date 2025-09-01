import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Example reducer for setting user profile
    setProfile(state, action) {
      state.profile = action.payload;
      state.status = 'succeeded';
    },
    // Example reducer for handling errors
    setError(state, action) {
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const { setProfile, setError } = userSlice.actions;

export default userSlice.reducer;