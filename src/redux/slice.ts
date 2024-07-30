import { createSlice } from "@reduxjs/toolkit";
import { PlansData } from "../types";
import data from "../assets/data.json";

type PricingSliceState = {
  data: PlansData;
};

const initialState: PricingSliceState = {
    data: data,
};

const pricingPlanSlice = createSlice({
  name: "pricing-plans",
  initialState,
  reducers: {},
});

export const {
} = pricingPlanSlice.actions;

export const pricingPlanSliceReducer = pricingPlanSlice.reducer;