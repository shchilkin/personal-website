import React from "react";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
