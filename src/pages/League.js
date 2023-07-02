import React, { useState } from "react";

const schedules = {
  "men-comp": "Men’s Comp Schedule ",
  "women-comp": "Women’s Comp Schedule ",
  "men-rec": "Men’s Rec Schedule ",
  "women-rec": "Women’s Rec Schedule ",
  "co-ed": "Co-ed Schedule "
}

export default function League() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="league-container">
      <h1 className="tittleLeague">League schedules</h1>
      <div className="tabs">
        <div className="dropdown">
          <button onClick={() => handleMenuClick('men-comp')}>Men’s Comp Schedule</button>
        </div>
        <div className="dropdown">
          <button onClick={() => handleMenuClick('women-comp')}>Women’s Comp Schedule</button>
        </div>
        <div className="dropdown">
          <button onClick={() => handleMenuClick('men-rec')}>Men’s Rec Schedule</button>
        </div>
        <div className="dropdown">
          <button onClick={() => handleMenuClick('women-rec')}>Women’s Rec Schedule</button>
        </div>
        <div className="dropdown">
          <button onClick={() => handleMenuClick('co-ed')}>Co-ed Schedule</button>
        </div>
      </div>
      <div>
        {activeMenu && <p>{schedules[activeMenu]}</p>}
      </div>
    </div>
  );
}
