import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivePlan, PlansData } from "../types";
import data from "../assets/data.json";

type PricingSliceState = {
  data: PlansData;
  activePlan: ActivePlan;
};

const initialState: PricingSliceState = {
  data: data,
  activePlan: ActivePlan.MONTHLY,
};

const pricingPlanSlice = createSlice({
  name: "pricing-plans",
  initialState,
  reducers: {
    setActivePlan(state, action: PayloadAction<ActivePlan>) {
      state.activePlan = action.payload;
    },
  },
});

export const { setActivePlan } = pricingPlanSlice.actions;
export const pricingPlanSliceReducer = pricingPlanSlice.reducer;