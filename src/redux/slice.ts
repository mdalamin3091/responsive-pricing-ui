import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivePlan, PlansData } from "../types";
import data from "../assets/data.json";

type PricingSliceState = {
  data: PlansData;
  activePlan: ActivePlan;
  dropdownOpen:boolean;
};

const initialState: PricingSliceState = {
  data: data,
  activePlan: ActivePlan.MONTHLY,
  dropdownOpen:false,
};

const pricingPlanSlice = createSlice({
  name: "pricing-plans",
  initialState,
  reducers: {
    setActivePlan(state, action: PayloadAction<ActivePlan>) {
      state.activePlan = action.payload;
    },
    setDropdownOpen(state, action:PayloadAction<boolean>){
      state.dropdownOpen = action.payload
    }
  },
});

export const { setActivePlan, setDropdownOpen } = pricingPlanSlice.actions;
export const pricingPlanSliceReducer = pricingPlanSlice.reducer;