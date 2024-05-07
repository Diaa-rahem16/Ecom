import React, { useState } from 'react';
import SellerOrder from '../../components/SellerOrder.jsx';



const SellerOrders = () => {
  let [filters, setFilters] = useState({
    hideDelivered: false,
    sortDate: false
  });

  const handleClick = (event) => {
    const { name } = event.target;
    setFilters(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div id='seller-orders'>
      <div className="title">
        <h2>Orders<br /><span>(Confirmed purchases)</span></h2>
        <p></p>
        <hr />
      </div>
      <div className="filters">
        <input type='checkbox' name='hideDelivered' checked={filters.hideDelivered} onChange={handleClick} />
        <label htmlFor='hideDelivered'>hide delivered orders</label>
        <input type='checkbox' name='sortDate' checked={filters.sortDate} onChange={handleClick} />
        <label htmlFor='sortDate'>sort by date</label>
      </div>
      <hr />
      <div className="orders">
        <SellerOrder/>
        <SellerOrder/>
        <SellerOrder/>
        <SellerOrder/>
      </div>
    </div>
  );
};

export default SellerOrders;
