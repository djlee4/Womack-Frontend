import "./brand.css";
import { cat, napa, timken } from "./imports";

const Brand = () => {
  return (
    <div className="wt__brand section__padding">
      <div>
        <img src={cat} alt="cat" />
      </div>
      <div>
        <img src={napa} alt="napa" />
      </div>
      <div>
        <img src={timken} alt="timken" />
      </div>
    </div>
  );
};

export default Brand;
