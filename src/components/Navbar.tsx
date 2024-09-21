import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
// import Epiclogo from "../assets/Epic_Games_logo.png";

interface Props {
  onSearch: (searchText: string) => void;
}

function Navbar({ onSearch }: Props) {
  return (
    <HStack justifyContent="space-between" paddingInline="10px">
      <Image src={logo} boxSize="60px" />
      {/* <Image src={Epiclogo} height="40px" marginInline="10px" /> */}
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
