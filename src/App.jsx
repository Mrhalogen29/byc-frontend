import Blog from "./components/Blog";
import Collections from "./components/Collections";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";
import ShopByCategory from "./components/ShopByCategory";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewArrivals />
      <Collections />
      <ShopByCategory />
      <Blog />
    </>
  );
}

export default App;
