import { useEffect } from "react";
import Molehill from "./molehill.png";

function EmptySlot(props) {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      this.props.toggle(true);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img style={{ width: "30vw" }} src={Molehill} />
    </div>
  );
}

export default EmptySlot;
