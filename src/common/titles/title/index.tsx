import Text from "@/components/text";
import type { ITitleProps } from "./types";

const Title = ({ title }: ITitleProps) => (
  <Text size="s6" weight="bold" color="darkNeutral">
    {title}
  </Text>
)

export default Title