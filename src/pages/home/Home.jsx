import { Hero } from "./Hero";
import { Category } from "./Category";
import { Rooms } from "./Room";
import { Services } from "./Services";
import { SalesDeals } from "./SalesDeals";
import { Collection } from "./Collection";
import { Newsletter } from "../../components/misc/Newsletter";

export default function Home() {
  return (
    <div>
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
