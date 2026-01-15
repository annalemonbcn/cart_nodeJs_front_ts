import Text from "@/components/text";
import type { TitleProps } from "./types";

const Title = ({ title }: TitleProps) => (
  <Text size="s6" weight="bold" color="darkNeutral">
    {title}
  </Text>
)

export default Title