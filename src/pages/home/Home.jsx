import { Hero } from "../../pages/Hero";
import { Search } from "../search";
import { Category } from "./Category";
import { Rooms } from "./Room";
import { Services } from "./Services";
import { SalesDeals } from "./SalesDeals";
import { Collection } from "./Collection";
// import { Sponsors } from "../../components/Sponsors";

export default function Home() {
  return (
    <div>
      <Search />
      <Hero />
      <Services />
      <Rooms />
      <Collection />
      <Category />
      <SalesDeals />
      {/* <Sponsors /> */}
    </div>
  );
}
