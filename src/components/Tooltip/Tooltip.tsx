import React from "react";
import { TooltipStyled } from "./styled";

const Tooltip: React.FC<{
  arrowPosition?: "left" | "right";
  content: string;
}> = ({ arrowPosition = "right", content }) => {
  return (
    <TooltipStyled
      arrowPosition={arrowPosition}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Tooltip;
