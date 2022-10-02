import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotSpecs({ allBots, setAllBots }) {
  const params = useParams();
  const bot = allBots.filter((robot) => robot.id === parseInt(params.botId));
  const enlistBot = () => {
    var pair = { selected: true };
    const obj = { ...bot[0], ...pair };
    setAllBots(
      allBots.map((robot) =>
        robot.id === parseInt(params.botId) ? obj : robot
      )
    );
  };

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot[0].avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot[0].name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot[0].catchphrase}
            </p>
            <strong>
              Class: {bot[0].bot_class}
              <i className={botTypeClasses[bot[0].bot_class]} />
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot[0].health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot[0].damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot[0].armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button className="ui button fluid">
              <Link to="/">Back to Bots</Link>
            </button>
            <button className="ui button fluid" onClick={enlistBot}>
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
