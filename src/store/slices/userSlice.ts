import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: {
    name: string;
    email: string;
  };
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: {
    name: "",
    email: "",
  },
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        name: string;
        email: string;
      }>
    ) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions;
