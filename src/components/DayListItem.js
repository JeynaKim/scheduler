import React from "react";
import './DayListItem.scss';

export default function DayListItem(props) {
  const returnClassName = () => {
    if (props.selected) {
      return "day-list__item--selected";
    } 

    if (props.spots === 0) {
      return "day-list__item--full";
    }

    return "day-list__item";
  }


  return (
  
    <li className={returnClassName()} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}