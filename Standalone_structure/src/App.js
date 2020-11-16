import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

function App() {
  return (
      <Router>
      <Header />
      <main>
      <Routes />
      </main>
      <Footer />
      </Router>
);
}

export default App;