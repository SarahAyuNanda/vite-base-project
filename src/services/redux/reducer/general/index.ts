import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IGeneralState } from "@/services/redux/reducer/general/index.model";

const initialState: IGeneralState = {
  isError: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setError: (state: IGeneralState, action: PayloadAction<IGeneralState>) => {
      state.isError = action.payload.isError;
    },
  },
});

export const { setError } = generalSlice.actions;
export default generalSlice.reducer;
