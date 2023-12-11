import React, { useState } from 'react';
import Trending from '../component/Trending';
import Markets from '../component/markets';

import NavbarHome from '../component/navbar';
import Footer from '../component/Footer';

const CryptoHome = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <>
      <NavbarHome onSearch={handleSearch} />
      <div className="w-4/6 mx-auto pt-20 pb-20">
        {search ? (
          <Markets search={search} />
        ) : (
          <>
            <Trending />
            <Markets search={search} />
          </>
        )}
      </div>
      {search ? (
        <div className="bottom-0 absolute w-full">
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </>
  );
};

export default CryptoHome;
