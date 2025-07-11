import Dermatolodists from "./components/Dermatologists";
import Header from "./components/Header";

const page = () => {
  return (
    <>
      <Header title="Врачи" />
      <div className="bg-bg1 py-8">
        <Dermatolodists />
        <Dermatolodists />
        <Dermatolodists />
        <Dermatolodists />
      </div>
    </>
  );
};

export default page;
