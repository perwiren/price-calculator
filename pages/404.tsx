import { NextPage } from "next";
import NotFoundSvg from "public/404.svg";

const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <NotFoundSvg className="fill-current text-blue-500" />
      Sidan du letar efter kunde inte hittas
    </div>
  );
};

export default NotFound;
