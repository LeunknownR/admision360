import AppLogoIcon from "../../icons/AppLogoIcon";
import AppLogoUniversityIcon from "../../icons/AppLogoUniversityIcon";
import { Container } from "./styles";

const AppHeader = () => {
  return (
    <Container>
      <AppLogoIcon/>
      <AppLogoUniversityIcon/>
    </Container>
  );
}

export default AppHeader;