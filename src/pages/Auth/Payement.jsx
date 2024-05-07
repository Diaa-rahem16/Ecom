import { useState } from "react";

const Payment = ({ handleCardData }) => {
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const [cardInfo, setCardInfo] = useState({
    fullName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [paypalEmail, setPaypalEmail] = useState("");

  const handleCardInfoChange = (e) => {
    setCardInfo({
      ...cardInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaypalEmailChange = (e) => {
    setPaypalEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCardData(
      paymentMethod,
      paymentMethod === "visa" ? cardInfo : { paypalEmail }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <div className="relative inline-block w-full text-gray-700">
          <select
            className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="visa">Visa</option>
            <option value="paypal">PayPal</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7.05 11.293l2.5-2.5a.4.4 0 0 1 .586 0l2.5 2.5a.4.4 0 0 1-.293.683H7.343a.4.4 0 0 1-.293-.683z" />
            </svg>
          </div>
        </div>
      </div>

      {paymentMethod === "visa" && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full name
          </label>
          <input
            type="text"
            name="fullName"
            value={cardInfo.fullName}
            onChange={handleCardInfoChange}
            className="input"
          />

          <label className="block text-sm font-medium text-gray-700">
            Card number
          </label>
          <input
            type="text"
            name="cardNumber"
            value={cardInfo.cardNumber}
            onChange={handleCardInfoChange}
            className="input"
          />
          <label className="block text-sm font-medium text-gray-700">
            Expiry date
          </label>
          <input
            type="text"
            name="expiryDate"
            value={cardInfo.expiryDate}
            onChange={handleCardInfoChange}
            className="input"
          />
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input
            type="text"
            name="cvv"
            value={cardInfo.cvv}
            onChange={handleCardInfoChange}
            className="input"
          />
        </div>
      )}

      {paymentMethod === "paypal" && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            PayPal email
          </label>
          <input
            type="email"
            name="paypalEmail"
            value={paypalEmail}
            onChange={handlePaypalEmailChange}
            className=" input"
          />
        </div>
      )}

      <button type="submit" className="button">
        Confirm
      </button>
    </form>
  );
};

export default Payment;
