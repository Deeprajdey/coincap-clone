import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Table } from "../components";
import { getDataFetch } from "../features/cryptoTableSlice";

const Cryptotable = () => {
  const { cryptoData, isLoading } = useSelector((state) => state.cryptoTable);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFetch());
  }, [dispatch]);
  return (
    <div>
      <div className="h-20 px-15 gradient-blue color-white flex flex-between py-3r  font-one-half text-uppercase font-bold-700">
        <li className="flex flex-col  align-center">
          <span>Market Cap</span>
          <span>$1.15T</span>
        </li>
        <li className="flex flex-col align-center">
          <span>EXCHANGE VOL</span>
          <span>$43.76B</span>
        </li>
        <li className="flex flex-col align-center">
          <span>ASSETS</span>
          <span>2,295</span>
        </li>
        <li className="flex flex-col align-center">
          <span>EXCHANGES</span>
          <span>73</span>
        </li>
        <li className="flex flex-col align-center">
          <span>MARKETS</span>
          <span>12,563</span>
        </li>
        <li className="flex flex-col align-center">
          <span>BTC DOM INDEX</span>
          <span>35.0%</span>
        </li>
      </div>
      {isLoading ? <Spinner /> : <Table data={cryptoData.data} />}
    </div>
  );
};

export default Cryptotable;
