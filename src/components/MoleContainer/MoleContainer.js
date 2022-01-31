import { useState } from "react";
import EmptySlot from "../EmptySlot/EmptySlot";
import Mole from "../Mole/Mole";

function MoleContainer(props) {
  let [displayMole, setdisplayMole] = useState(false);

  const moleHit = (e) => {
    props.setScore(props.score + 1);
    setdisplayMole(false);
  };

  let displayMoles = displayMole ? (
    <Mole
      setScore={props.setScore}
      toggle={setdisplayMole}
      handleClick={moleHit}
    />
  ) : (
    <EmptySlot toggle={setdisplayMole} />
  );
  return <div className="container">{displayMoles}</div>;
}

export default MoleContainer;

