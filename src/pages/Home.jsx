import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import Collections from "../components/Collections";
import ShopByCategories from "../components/ShopByCategory";
import Blog from "../components/Blog";

function Home() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <Collections />
      <ShopByCategories />
      <Blog />
    </>
  );
}

export default Home;
