import React, { useEffect, useState } from "react";
import BotsPage from "./BotsPage";
import BotSpecs from "./BotSpecs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [allBots, setAllBots] = useState([]);
  const fetchingBots = () => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setAllBots(data));
  };
  useEffect(() => {
    fetchingBots();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<BotsPage setAllBots={setAllBots} allBots={allBots} />}
          />
          <Route
            path="/bots/:botId"
            element={<BotSpecs setAllBots={setAllBots} allBots={allBots} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
