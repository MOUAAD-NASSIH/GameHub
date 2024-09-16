import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
// import Epiclogo from "../assets/Epic_Games_logo.png";

function Navbar() {
  return (
    <HStack justifyContent="space-between" paddingInline="10px">
      <Image src={logo} boxSize="60px" />
      {/* <Image src={Epiclogo} height="40px" marginInline="10px" /> */}
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
