// @flow
import React from "react";

import generate from "./anniversary_generator";
import addYears from "date-fns/add_years";
import format from "date-fns/format";

const Home = () => {
  const birthday = new Date(1987, 8, 5);
  const now = Date.now();
  const minDate = addYears(now, -1);
  const maxDate = addYears(birthday, 150);
  const anniversaries = generate(birthday, minDate, maxDate);
  return (
    <div>
      <ul>
        {anniversaries.map(anniversary => (
          <li>
            {format(anniversary.date, "YYYY-MM-DD")}
            {anniversary.interestingNumber.value}
            {anniversary.units}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;