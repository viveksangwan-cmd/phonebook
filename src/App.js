import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="wrapper">
        <Search />
        <Contacts />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
