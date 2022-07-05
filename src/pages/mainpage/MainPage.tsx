import { Brand } from "../../components/index.js";
import "./mainpage.css";

const MainPage = () => {
  return (
    <>
      <div className="wt__header section__padding" id="home">
        <div className="wt__header-content">
          <h1 className="gradient__text">
            Womack Transportation Inventory Management
          </h1>
          <p>An invnetory management system for the shop guys</p>
        </div>
      </div>
      <div>
        <Brand />
      </div>
    </>
  );
};

export default MainPage;
