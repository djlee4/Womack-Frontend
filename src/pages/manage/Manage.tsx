import "./manage.css";

const Manage = () => {
  return (
    <div className="wt__manage">
      <input
        className="wt__manage_barcode"
        type="text"
        placeholder="Barcode"
      ></input>
      <input
        className="wt__manage_partNumber"
        type="text"
        placeholder="Part Number"
      ></input>
      <input
        className="wt__manage_brand"
        type="text"
        placeholder="Brand"
      ></input>
      <input className="wt__manage_type" type="text" placeholder="Type"></input>
      <input
        className="wt__manage_amount"
        type="text"
        placeholder="Amount"
      ></input>
      <button id="btn2" type="button">
        Add
      </button>
      <button id="btn3" type="button">
        Delete
      </button>
    </div>
  );
};

export default Manage;
