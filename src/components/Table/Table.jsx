import React, { useCallback, useMemo, useState } from "react";
import { getUnit } from "../../utils/Math/getUnit";

const Table = ({ data = [] }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const pageStart = 1;
  const pageEnd = useMemo(() => pageNumber * 50, [pageNumber]);
  const filteredData = useMemo(
    () => data.filter((itm) => itm.rank >= pageStart && itm.rank <= pageEnd),
    [data, pageStart, pageEnd]
  );
  const handleClick = useCallback(() => {
    setPageNumber((pageNumber) => pageNumber + 1);
  }, []);
  return (
    <div className="mx-12r">
      <div className="w-75 m-auto bg-white box-shadow-3 border-raius-5p">
        <div className="grid grid-col-8 py-2r gap-3r font-one-half border-bottom-2">
          <li className="list-none flex flex-center align-center opacity-7 cursor-pointer font-bold-500">
            Rank
          </li>
          <li className="list-none flex flex-center align-center opacity-7 cursor-pointer font-bold-500 justify-self-start">
            Name
          </li>
          <li className="list-none flex flex-center align-center opacity-7 cursor-pointer font-bold-500 justify-self-start">
            Price
          </li>
          <li className="list-none flex flex-center align-center opacity-7 cursor-pointer font-bold-500 justify-self-start">
            Market Cap
          </li>
          <li className="list-none flex flex-center align-center opacity-7 cursor-pointer font-bold-500 justify-self-start">
            VWAP(24Hr)
          </li>
          <li className="list-none flex flex-center align-center opacity-7 cursor-pointer font-bold-500 justify-self-start">
            Supply
          </li>
          <li className="list-none flex flex-center align-center opacity-7 cursor-pointer font-bold-500 justify-self-start">
            Volume(24Hr)
          </li>
          <li className="list-none flex flex-center align-center opacity-7 cursor-pointer font-bold-500 justify-self-start">
            Change(24Hr)
          </li>
        </div>
        {filteredData.map(
          (
            {
              id,
              rank,
              symbol,
              name,
              supply,
              maxSupply,
              marketCapUsd,
              volumeUsd24Hr,
              priceUsd,
              changePercent24Hr,
              vwap24Hr,
              explorer,
            },
            i
          ) => (
            <a
              href={explorer}
              key={id}
              className="grid grid-col-8 py-1r gap-3r font-one-half border-bottom-2 text-decoration-none color-black font-bold-700 hover-bg-light-grey"
            >
              <li className="list-none flex flex-center align-center">
                {rank}
              </li>
              <li className="list-none flex flex-center align-center justify-self-start">
                <div className="flex gap-1r align-center">
                  <img
                    src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                    alt="logo"
                    className="h-3"
                  />
                  <div className="flex flex-col">
                    <span>{name}</span>
                    <span className="opacity-7 font-normal">{symbol}</span>
                  </div>
                </div>
              </li>
              <li className="list-none flex flex-center align-center justify-self-start">
                ${Number(priceUsd).toFixed(2)}
              </li>
              <li className="list-none flex flex-center align-center justify-self-start">
                ${getUnit(marketCapUsd)}
              </li>
              <li className="list-none flex flex-center align-center justify-self-start">
                ${Number(vwap24Hr).toFixed(2)}
              </li>
              <li className="list-none flex flex-center align-center justify-self-start">
                {getUnit(supply)}
              </li>
              <li className="list-none flex flex-center align-center justify-self-start">
                ${getUnit(volumeUsd24Hr)}
              </li>
              <li
                className={`list-none flex flex-center align-center justify-self-start ${
                  Number(changePercent24Hr) < 0 ? "color-red" : "color-green"
                }`}
              >
                {Number(changePercent24Hr).toFixed(2)}
              </li>
            </a>
          )
        )}
      </div>
      <div className="w-75 m-auto mx-2r flex flex-center align-center">
        {filteredData.length === data.length ? null : (
          <button onClick={handleClick} className="load-btn">
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default Table;
