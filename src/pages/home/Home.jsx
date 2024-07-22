import { Hero } from "../../pages/Hero";
import { Search } from "../search";
import { BestSeller } from "./BestSeller";
import { Rooms } from "./Room";

export default function Home() {
  return (
    <div>
      <Hero />
      <Rooms />
      <BestSeller />
      <Search />
    </div>
  );
}
