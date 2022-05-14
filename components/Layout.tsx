import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => (
  <div className="flex flex-col h-screen justify-between">
    <Header />
    <main className="container mb-auto mt-4 mb-4 mx-auto px-4">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
