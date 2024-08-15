import { Hero } from "../../pages/Hero";
import { Search } from "../search";
import { Category } from "./Category";
import { Rooms } from "./Room";
import { Services } from "./Services";
import { SalesDeals } from "./SalesDeals";
import { Collection } from "./Collection";
import { Newsletter } from "./Newsletter";

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
