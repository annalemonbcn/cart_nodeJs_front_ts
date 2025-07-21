import type { PropsWithChildren } from "@/variables/types/global.types";
import FlexContainer from "../flexContainer";
import { tokens } from "@/variables/styles";
import { StyledDecorator } from "./styles";

const VerticalBarDecorator = ({ children }: PropsWithChildren) => (
  <FlexContainer gap={tokens.space.md}>
    <StyledDecorator />
    {children}
  </FlexContainer>
)


export default VerticalBarDecorator