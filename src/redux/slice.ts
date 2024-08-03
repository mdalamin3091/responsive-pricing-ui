import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivePlan, Plan, PlansData } from "../types";
import data from "../assets/data.json";

type PricingSliceState = {
  data: PlansData;
  activePlan: ActivePlan;
  openDropdownMenu: string;
  selectPlans: Plan[];
};

const initialState: PricingSliceState = {
  data: data,
  activePlan: ActivePlan.MONTHLY,
  openDropdownMenu: "",
  selectPlans: [],
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
      const existingPlanIndex = state.selectPlans.findIndex(plan => plan.name === action.payload.name);

      if (existingPlanIndex >= 0) {
        // Replace existing plan
        state.selectPlans[existingPlanIndex] = action.payload;
      } else {
        // Push new plan
        state.selectPlans.push(action.payload);
      }
    },
  },
});

export const { setActivePlan, setDropdownOpen, setSelectPlans } =
  pricingPlanSlice.actions;
export const pricingPlanSliceReducer = pricingPlanSlice.reducer;
