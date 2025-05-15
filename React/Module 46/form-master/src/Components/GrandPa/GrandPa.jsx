import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

const GrandPa = () => {
  return (
    <div className="border-2 border-white p-5 text-7xl">
      <h1>GrandPa</h1>
      <div className="flex flex-col gap-3">
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </div>
    </div>
  );
};

export default GrandPa;
