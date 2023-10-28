import React from "react";
import moneyIcon from "../../assets/img/icon-money.png";

function Interest() {
  return (
    <div className="feature-item">
      <img src={moneyIcon} alt="Money Icon" className="feature-icon" />
      <h3 className="feature-item-title">More savings means higher rates</h3>
      <p>The more you save with us, the higher your interest rate will be!</p>
    </div>
  );
}

export default Interest;
