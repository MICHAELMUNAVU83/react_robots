import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


function BotsPage({allBots , setAllBots}) {
 
  return (
    <div>
      <YourBotArmy setAllBots={setAllBots} allBots={allBots} />
      <BotCollection setAllBots={setAllBots} allBots={allBots} />
    </div>
  );
}

export default BotsPage;
