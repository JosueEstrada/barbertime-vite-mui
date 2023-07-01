import SearchBar from "../components/SearchBar.jsx";
import BarberiaCard from "../components/BarberiaCard.jsx";
import PaginationButtons from "../components/PaginationButtons.jsx";
import MapView from "../components/MapView.jsx";

export default function Barberias() {
  return (
    <>
      <SearchBar />
      <BarberiaCard />
      <BarberiaCard />
      <BarberiaCard />
      <BarberiaCard />
      <PaginationButtons />
    </>
  );
}
