import React, { useContext, useEffect, useState } from 'react';
import { MdCurrencyExchange } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const [sticky, setSticky] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`text-white flex justify-between items-center h-20 fixed w-full top-0 transition duration-500 ${sticky ? 'bg-gray-800 ' : 'bg-none text-black '}`}>
      <div className="  px-20 w-full">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/')}>
          <MdCurrencyExchange className="text-3xl text-yellow-500" />
          <p className="font-semibold">
            <span className="text-yellow-500">C</span>RYPTO <span className="text-yellow-500">U</span>PDATE
          </p>
        </div>
      </div>
      <div className="px-20">
        <form>
          <input type="text" onChange={(e) => onSearch(e.target.value)} placeholder="Search for Crypto" className="w-80 p-2 rounded-lg border border-black text-black" />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
