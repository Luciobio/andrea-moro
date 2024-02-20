import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Inicio | Dashboard",
  description: "This is Inicio page for dashboard",
};

const Homepage: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <h1>Este es el inicio!</h1>
      </div>
    </>
  );
};

export default Homepage;
