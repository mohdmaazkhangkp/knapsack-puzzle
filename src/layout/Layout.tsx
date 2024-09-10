import { ReactNode } from "react";
import bg from "../assets/bg.webp";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="w-full min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
