
export interface PlanDetail {
    price: string;
    price_postfix: string;
    plan_type: string;
    plan_info: string;
    dd_text: string;
    btn_text: string;
    price_id: string;
  }
  
  export interface Plan {
    name: string;
    price: string;
    title: string;
    text: string;
    details: {
      "1_year": PlanDetail;
      "2_year": PlanDetail;
    };
  }
  
  interface PlansInfoDetail {
    title: string;
    sub_title: string;
    discount: string;
  }
  
  export interface Feature {
    is_pro: string;
    feature_title: string;
    feature_desc: string;
  }
  
  export interface PlansData {
    plans: Plan[];
    plansInfo: {
      "1_year": PlansInfoDetail;
      "2_year": PlansInfoDetail;
    };
    features: Feature[];
  }

  export enum ActivePlan {
    MONTHLY = "Billed monthly",
    YEARLY = "Billed annually",
  }