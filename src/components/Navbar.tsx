import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
// import Epiclogo from "../assets/Epic_Games_logo.png";

function Navbar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      {/* <Image src={Epiclogo} height="40px" marginInline="10px" /> */}
      <Text>Navbar</Text>
    </HStack>
  );
}

export default Navbar;
