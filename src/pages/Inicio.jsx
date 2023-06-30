import SearchBar from "../components/SearchBar.jsx";
import BackgroundBox from "../components/BackgroundBox.jsx";
import LogoAndTitle from "../components/LogoAndTitle.jsx";

export default function Inicio() {
  return (
    <BackgroundBox>
      <LogoAndTitle />
      <SearchBar />
    </BackgroundBox>
  );
}
