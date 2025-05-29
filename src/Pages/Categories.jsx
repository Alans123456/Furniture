import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Component/NavBar";
import SignUpBar from "../Component/SignUpBar";
import Footer from "../Component/Footer";
import CategoryPage from "../Component/Catagorypage";

export default function Categories() {
  const { category, type } = useParams(); // get params from URL

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40">
        <SignUpBar />
        <NavBar />
      </div>
      <div>
        {/* Pass params as props to CategoryPage */}
        <CategoryPage category={category} type={type} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
