import { useEffect, useState } from "react";

export default function ClockExample(){
    const [myDate, myDateUpdate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      myDateUpdate(new Date());
    }, 100);

  return () => clearInterval(intervalId);
});

return(
  <div>
    <h3>Example React</h3>
    <input/>
    <div>{myDate.toDateString()}</div>
  </div>
    
  );
}