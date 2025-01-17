import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  userAutherized:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state,action) => {
      state.user=action.payload;
      state.userAutherized=true
    },
    clearUser: (state) => {
      state.user={};
      state.userAutherized=false
    },

  },
})
export const { saveUser,clearUser } = userSlice.actions

export default userSlice.reducer