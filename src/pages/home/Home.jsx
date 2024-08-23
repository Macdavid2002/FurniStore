import { Hero } from "../../pages/hero";
import { Search } from "../search";
import { Category } from "./Category";
import { Rooms } from "./Room";
import { Services } from "./Services";
import { SalesDeals } from "./SalesDeals";
import { Collection } from "./Collection";
import { Newsletter } from "../../components/Newsletter";

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
      <Newsletter />
    </div>
  );
}
