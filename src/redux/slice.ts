import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivePlan, PlansData } from "../types";
import data from "../assets/data.json";

type PricingSliceState = {
  data: PlansData;
  activePlan: ActivePlan;
  openDropdownMenu: string;
};

const initialState: PricingSliceState = {
  data: data,
  activePlan: ActivePlan.MONTHLY,
  openDropdownMenu: "",
};

const pricingPlanSlice = createSlice({
  name: "pricing-plans",
  initialState,
  reducers: {
    setActivePlan(state, action: PayloadAction<ActivePlan>) {
      state.activePlan = action.payload;
    },
    setDropdownOpen(state, action: PayloadAction<string>) {
      state.openDropdownMenu = action.payload;
    },
  },
});

export const { setActivePlan, setDropdownOpen } = pricingPlanSlice.actions;
export const pricingPlanSliceReducer = pricingPlanSlice.reducer;
