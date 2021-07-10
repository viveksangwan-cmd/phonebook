import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { contactsData } from "./data/contactsData.js";

function App() {
  const [category, setcategory] = useState("mycontacts");
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const handelCategory = (category) => {
    setcategory(category);
    setSearch("");
  };

  const handelSearch = (str) => {
    setSearch(str);
  };

  useEffect(() => {
    // Fetch data
    let data = contactsData;

    // Function for filtering data
    const filterData = (d) => {
      if (d[category]) return true;
      return false;
    };

    // setContacts based on category and then filter

    if (category !== "mycontacts") {
      data = data.filter((d) => filterData(d));
    }
    if (search !== "") {
      const query = search.toLowerCase().trim();
      if (query[0] <= "9" && query[0] >= "0") {
        data = data.filter(({ number }) => {
          return number.startsWith(query);
        });
      } else if (
        (query[0] >= "a" && query[0] <= "z") ||
        (query[0] >= "A" && query[0] <= "Z")
      ) {
        data = data.filter(({ name }) => {
          name = name.toLowerCase().trim();
          return name.startsWith(query);
        });
      }
    }
    const displayContact = data;
    setContacts(displayContact);
  }, [category, search]);

  return (
    <React.Fragment>
      <Header handelCategory={handelCategory} />
      <div className="wrapper">
        <Search value={search} onChange={handelSearch} />
        <Contacts contacts={contacts} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
