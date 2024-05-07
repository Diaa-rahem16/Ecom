import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SellerSecondNav = () => {
  let [Url, setUrl] = useState('store');
  let selected = {
    backgroundColor: '#E9E9E9'
  };

  return (
    <>
      <nav id='sellerSecondNav'>
        <li style={Url === 'store' ? selected : {}}>
          <Link to='store' className='link'><button onClick={_ => { setUrl('store') }}>Store page</button></Link>
        </li>
        <li style={Url === 'orders' ? selected : {}}>
          <Link to='orders' className='link'><button onClick={_ => { setUrl('orders') }}>Purchase orders</button></Link>
        </li>
      </nav>
    </>
  );
};

export default SellerSecondNav;
