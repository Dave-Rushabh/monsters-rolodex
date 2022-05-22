import { myarr } from "./database";
import "./../Styles/MonsterCard.css";
import monster from "./../Images/monster.jpg";
import { useEffect, useState } from "react";

const MonstersCard = (props) => {
  const { search } = props || {};
  const [card, setCard] = useState([]);

  useEffect(() => {
    if (search === "") {
      setCard(myarr);
    }
    const myCards = myarr.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setCard(myCards);
  }, [search]);

  return (
    <div className="main-container">
      {card.map((item) => {
        return (
          <div className="monster-container" key={item.id}>
            <div className="monster-img">
              <img src={monster} alt="img" />
            </div>
            <p className="monster-name">
              <span>Name</span> : {item.name}
            </p>
            <p className="monster-name">
              <span>Power</span> : {item.power}
            </p>
            <p className="monster-name">
              <span>Weapon</span> : {item.weapon}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MonstersCard;
