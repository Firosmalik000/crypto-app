import React from 'react';
import HistoryChart from '../component/HistoryChart';
import CoinDetail from '../component/CoinDetail';
import Navbar from '../component/navbar';
import { Link } from 'react-router-dom';

const CryptoDetail = () => {
  return (
    <>
      <div className="w-4/6 mx-auto  pt-20">
        <HistoryChart />
        <CoinDetail />
      </div>
      <Link to={'/'}>
        <div className="absolute left-20 top-5 ">
          <button className="btn bg-blue-500 px-4 py-3 rounded-lg font-bold hover:bg-gray-700 duration-300 transition text-white">Back</button>
        </div>
      </Link>
    </>
  );
};

export default CryptoDetail;
