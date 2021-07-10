import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { contactsData } from "./data/contactsData.js";

function App() {
  const [category, setcategory] = useState("mycontacts");
  const [contacts, setContacts] = useState([]);

  const handelCategory = (category) => {
    setcategory(category);
  };

  useEffect(() => {
    // Fetch data
    const data = contactsData;

    // Function for filtering data
    const filterData = (d) => {
      if (d[category]) return true;
      return false;
    };

    // setContacts based on category
    if (category === "mycontacts") {
      setContacts(data);
      return;
    }
    const currentData = data.filter((d) => filterData(d));
    setContacts(currentData);
  }, [category]);

  return (
    <React.Fragment>
      <Header handelCategory={handelCategory} />
      <div className="wrapper">
        <Search />
        <Contacts contacts={contacts} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
