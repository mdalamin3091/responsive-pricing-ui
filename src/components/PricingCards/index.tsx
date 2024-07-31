import { useAppSelector } from "../../redux/hook"
import PricingCardItem from "./PricingCardItem/PricingCardItem";
import { CardWrapper } from "./styled"

const PricingCards = () => {
    const data = useAppSelector((state) => state.pricingPlans.data);
    console.log("data", data);
    
  return (
    <CardWrapper>
        {
            Array.from({length:4}).map((_, index) => (
                <PricingCardItem key={index} />
            ))
        }
    </CardWrapper>
  )
}

export default PricingCards