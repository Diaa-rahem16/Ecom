import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientInfo = () => {
  const [clientInfoForm, setClientInfoForm] = useState({
    fullName: "",
    phoneNumber: "",
    delievryAdress: "",
    paymentAccountNumber: "",
    payemntType: "",
  });
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

  const navigate = useNavigate();
  // const location = useLocation();
  // const formData = location.state.formData;

  // handle the Changes of the visa card
  const handleCardData = (data) => {
    setClientInfoForm({
      ...clientInfoForm,
      paymentAccountNumber: data.cardNumber, // replace 'cardNumber' with the actual property name in the data object
      // add other properties from the data object if needed
    });
  };

  // handle Changes on the form
  const handleChange = (e) => {
    setClientInfoForm({
      ...clientInfoForm,
      [e.target.name]: e.target.value,
    });
    console.log(clientInfoForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (clientInfoForm.password !== clientInfoForm.confirmPassword) {
    //   alert("Passwords do not match");
    //   return;
    // }

    // for (let field in clientInfoForm) {
    //   if (!clientInfoForm[field]) {
    //     alert("All fields must be filled");
    //     return;
    //   }
    // }

    // // Send the form data to the backend
    // // Replace this with your actual backend service call
    // fetch("/api/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(clientInfoForm),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.success) {
    //       // Navigate to the ClientInfoPage
    //       history.push("/clientinfopage");
    //     } else {
    //       alert("Error: " + data.message);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    // After Submit
    navigate("/home");
  };

  // ...

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-background rounded bg-cover bg-no-repeat px-4 sm:px-10 lg:px-8 py-12 ">
      <div className="max-w-xl w-full py-10 px-16 rounded space-y-8 bg-white">
        <div>
          <h2 className="text-center text-4xl font-extrabold text-gray-900 font-montserrat ">
            Client Information
          </h2>
        </div>
        <form className="space-y-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md font-montserrat flex flex-col gap-4">
            <div>
              <label htmlFor="fullName" className="font-semibold text-gray-900">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="input appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={clientInfoForm.fullName}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="password" className="font-semibold text-gray-900">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                required
                className="input appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={clientInfoForm.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="delievryAdress"
                className="font-semibold text-gray-900"
              >
                Delievry Adress
              </label>
              <input
                id="delievryAdress"
                name="delievryAdress"
                type="text"
                required
                className="input  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={clientInfoForm.delievryAdress}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className="text-lg text-gray-500">
              Payement method{" "}
            </label>
            <div className="relative inline-block w-full text-gray-700">
              <select
                className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline mb-4"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="visa">
                  <div className="flex justify-around">
                    <p>Visa</p>
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png"
                      alt="visa"
                      className="w-8 h-8"
                    />
                  </div>
                </option>
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
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
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
                  className="input"
                />
              </div>
            )}
          </div>

          <button type="submit" className="button ">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientInfo;
