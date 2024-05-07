import React from 'react'

const sellerOrder = (props) => {
  return (
    <div className="seller-order">
        <div className="product">
          <img src ="../../public/images/img_games.png"/>
          <div className="content">
            <h4>ps5 games</h4>
            <p>some of the cool games that i don't</p>
          </div>
        </div>
        <p className="quant">x2</p>
        <p className="color">Purple</p>
        <p className="size">L</p>
        <p className="dim">/</p>
        <p className="client">Omar ben yakhlef saaid</p>
        <p className="price">500DA</p>
        <p className="PM">edahabia</p>
        <p className="SA">algeria , consatntine , there city 12 house 300 bab zian i do not know</p>
        <p className="date">12/05/24<br/>15:33 PM</p>
        <select name="orderStatus" className="status">
          <option value="pending">pending</option>
          <option value="processing">processing</option>
          <option value="In Transit">In Transit</option>
          <option value="delivered">delivered</option>
          <option value="cancelled">cancelled</option>
          <option value="returned">returned</option>
          <option value="refunded">refunded</option>
        </select>
        <div className="status-color"></div>
      </div>
  )
}

export default sellerOrder