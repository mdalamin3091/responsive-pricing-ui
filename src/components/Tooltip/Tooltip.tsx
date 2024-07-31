import React from "react";
import { TooltipStyled } from "./styled";

const Tooltip: React.FC<{
  arrowPosition?: "left" | "right";
  content: string;
}> = ({ arrowPosition = "right", content }) => {
  return (
    <TooltipStyled arrowPosition={arrowPosition}>
      {content} The total number of unique visitors who can view Chaty on your
      website each month. The visitors' counter resets once every month
    </TooltipStyled>
  );
};

export default Tooltip;
