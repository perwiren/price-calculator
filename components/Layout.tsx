import React from "react";
import Header from "./Header";

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
