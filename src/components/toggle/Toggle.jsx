import './toggle.scss';
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";

export default function Toggle({setDark, dark}) {
    const handelClick = () => {
        setDark(!dark)
    }

  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div className="t-button" style={{left: dark ? 0 : "27px"}} onClick={() => handelClick()}></div>
    </div>
  )
}
