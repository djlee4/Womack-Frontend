import { ButtonHTMLAttributes, ReactElement, useState } from "react";
import {
  useFindByBarcodeQuery,
  usePartsQuery,
} from "../../api/generated/generated";
import "./inventory.css";

export const Inventory = () => {
  // const { data: { parts } = {} } = usePartsQuery();

  // console.log(parts);

  const [barcodeInput, setBarcodeInput] = useState("");
  const [searchBarcode, setSearchBarcode] = useState("");
  const { data: { findByBarcode: part } = {} } = useFindByBarcodeQuery({
    barcode: searchBarcode,
  });

  console.log("input", barcodeInput);
  console.log("part", part);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setSearchBarcode(barcodeInput);
  };

  return (
    <>
      <div className="wt__inventory-search">
        <input
          className="wt__inventory-search_barcode"
          type="text"
          placeholder="Barcode Search"
          onChange={(e) => {
            setBarcodeInput(e.target.value);
          }}
        ></input>
        <input
          className="wt__inventory-search_partNumber"
          type="text"
          placeholder="Search by Part Number"
        ></input>
        <button id="btn1" type="button" onClick={handleSubmit}>
          Search
        </button>
      </div>
      <div>
        {part ? (
          <div>
            <div style={{ color: "white" }}>PartName</div>
            <div style={{ color: "white" }}>{part.name}</div>
          </div>
        ) : null}
      </div>
    </>
  );
};
