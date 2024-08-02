import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivePlan, Plan, PlansData } from "../types";
import data from "../assets/data.json";

type PricingSliceState = {
  data: PlansData;
  activePlan: ActivePlan;
  openDropdownMenu: string;
  selectPlans: Plan;
};

const initialState: PricingSliceState = {
  data: data,
  activePlan: ActivePlan.MONTHLY,
  openDropdownMenu: "",
  selectPlans: {} as Plan,
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
    setSelectPlans(state, action: PayloadAction<Plan>) {
      state.openDropdownMenu = "";
      state.selectPlans = action.payload
    },
  },
});

export const { setActivePlan, setDropdownOpen, setSelectPlans } =
  pricingPlanSlice.actions;
export const pricingPlanSliceReducer = pricingPlanSlice.reducer;
