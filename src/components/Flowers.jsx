import Flower from "../assets/flower.png";
import "../css/main.scss";
import "./flowers.scss";

export default function Flowers() {
  return (
    <>
    <div className="set">
      <div><img src={Flower} alt="" /></div>
      <div><img src={Flower} alt="" /></div>
      <div><img src={Flower} alt="" /></div>
      <div><img src={Flower} alt="" /></div>
      <div><img src={Flower} alt="" /></div>
      <div><img src={Flower} alt="" /></div>
      <div><img src={Flower} alt="" /></div>
      <div><img src={Flower} alt="" /></div>
    </div>
    <div className="set set2">
      <div><img src={Flower} alt="" /></div>
      <div><img src={Flower} alt="" /></div>
      <div><img src={Flower} alt="" /></div>
      <div><img src={Flower} alt="" /></div>
      <div><img src={Flower} alt="" /></div>
      <div><img src={Flower} alt="" /></div>
      <div><img src={Flower} alt="" /></div>
      <div><img src={Flower} alt="" /></div>
    </div>
    </>
    
  );
}
