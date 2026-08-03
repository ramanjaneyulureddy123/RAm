import ReactDOM from "react-dom";
import { createPortal } from "react-dom"
import "./App.css"

function Tooltip({ text }) {
  return ReactDOM.createPortal(
    <div className="tooltip">
      {text}
    </div>,
    document.getElementById("portal-root")
  );
}

export default Tooltip