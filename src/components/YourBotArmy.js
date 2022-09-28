import React from "react";
import YourBot from "./YourBot";

function YourBotArmy({ allBots, setAllBots }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {allBots.map((bot) =>
            bot.selected ? (
              <YourBot
                bot={bot}
                allBots={allBots}
                setAllBots={setAllBots}
                key={bot.id}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
