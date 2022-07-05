import "./inventory.css";

const Inventory = () => {
  return (
    <div className="wt__inventory-search">
      <input
        className="wt__inventory-search_barcode"
        type="text"
        placeholder="Barcode Search"
      ></input>
      <input
        className="wt__inventory-search_partNumber"
        type="text"
        placeholder="Search by Part Number"
      ></input>
      <button id="btn1" type="button">
        Search
      </button>
    </div>
  );
};

export default Inventory;
