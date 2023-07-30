import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AllRouter from "./routerFile/AllRouter";
import DataProvider from "./GlobalState";

const App = () => {
  return (
    <div>
      <DataProvider>
        <Navbar />
        <AllRouter />
        <Footer />
      </DataProvider>
    </div>
  );
};

export default App;
