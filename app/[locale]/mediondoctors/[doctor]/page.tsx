import About from "./components/About";
import Articles from "./components/Articles";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Reviews from "./components/Reviews";

const page = () => {
  return (
    <>
      <Header />
      <div className="bg-bg1">
        <About />
        <Gallery />
        <Reviews />
        <Articles />
      </div>
    </>
  );
};

export default page;
