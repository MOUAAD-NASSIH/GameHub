import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color =
    score > 75
      ? "green"
      : score > 60
      ? "yellow"
      : score > 40
      ? "orange"
      : "red";

  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;
