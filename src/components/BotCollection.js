import React from "react";
import BotCard from "./BotCard";

function BotCollection({ allBots , setAllBots }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {allBots.map((bot) => (
          <BotCard bot={bot} allBots={allBots}  setAllBots={setAllBots} key={bot.id} />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
