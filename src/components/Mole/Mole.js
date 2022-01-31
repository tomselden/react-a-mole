import { useEffect } from "react";
import MoleImage from "./mole.png";

function Mole(props) {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      this.props.toggle(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img
        style={{ width: "30vw" }}
        src={MoleImage}
        onClick={props.handleClick}
      />
    </div>
  );
}

export default Mole;
