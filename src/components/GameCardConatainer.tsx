import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardConatainer({ children }: Props) {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardConatainer;
