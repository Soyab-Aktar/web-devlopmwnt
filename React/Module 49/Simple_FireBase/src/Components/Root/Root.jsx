import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div className="border-2 border-red-900 rounded-xl p-6 flex flex-col gap-4">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
