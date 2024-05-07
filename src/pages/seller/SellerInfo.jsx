import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const SellerInfo = () => {
  const [sellerInfoForm, setSellerInfoForm] = useState({
    sellerType: "",
    sellerName: "",
    sellerPhoneNumber: "",
    sellerEmail: "",
    sellerAdress: "",
    SellerId: File,
    commerceRegisterNumber: "",
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
    setSellerInfoForm({
      ...sellerInfoForm,
      paymentAccountNumber: data.cardNumber, // replace 'cardNumber' with the actual property name in the data object
      // add other properties from the data object if needed
    });
  };
  const handleSellerTypeChange = (type) => {
    setSellerInfoForm({
      ...sellerInfoForm,
      sellerType: type,
    });
  };
  // handle Changes on the form
  const handleChange = (e) => {
    setSellerInfoForm({
      ...sellerInfoForm,
      [e.target.name]: e.target.value,
    });
    console.log(sellerInfoForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (sellerInfoForm.password !== sellerInfoForm.confirmPassword) {
    //   alert("Passwords do not match");
    //   return;
    // }

    // for (let field in sellerInfoForm) {
    //   if (!sellerInfoForm[field]) {
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
    //   body: JSON.stringify(sellerInfoForm),
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
            Seller Information
          </h2>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md font-montserrat flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="label "> Type </label>
              <div>
                <button
                  type="button"
                  className={`px-8 py-4 font-semibold font-montserrat mr-2 border-2 p
                ${
                  sellerInfoForm.sellerType === "Company"
                    ? "border-[#607D8B] border-[3px]"
                    : "border-gray-300"
                }`}
                  onClick={() => handleSellerTypeChange("Company")}
                >
                  Company
                </button>
                <button
                  type="button"
                  className={`px-8 py-4 font-semibold font-montserrat mr-2  p
                ${
                  sellerInfoForm.sellerType === "Individual"
                    ? "border-[#607D8B] border-[3px]"
                    : "border-gray-300"
                }`}
                  onClick={() => handleSellerTypeChange("Individual")}
                >
                  Individual
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="fullName" className="label">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="input appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={sellerInfoForm.fullName}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="password" className="label">
                Buisness Phone Number
              </label>
              <input
                id="sellerPhoneNumber"
                name="sellerPhoneNumber"
                type="text"
                required
                className="input"
                value={sellerInfoForm.sellerPhoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="sellerAdress" className="label">
                Adress
              </label>
              <input
                id="sellerAdress"
                name="sellerAdress"
                type="text"
                required
                className="input "
                value={sellerInfoForm.sellerAdress}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Start Payement label */}
          <div>
            <label htmlFor="" className="label">
              Payement method{" "}
            </label>
            <div className="relative inline-block w-full text-gray-700">
              <select
                className="  w-full mb-4  h-10 pl-3 pr-6 text-lg placeholder-gray-600 border-2 rounded-lg appearance-none focus:shadow-outline  font-bold"
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
          {/* End Payement section */}
          <div>
            <label htmlFor="commerceRegisterNumber" className="label">
              Commerce Register Number
            </label>
            <input
              id="commerceRegisterNumber"
              name="commerceRegisterNumber"
              type="text"
              required
              className="input"
              value={sellerInfoForm.commerceRegisterNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="SellerId" className="label ">
              Seller ID
            </label>
            <div className="mt-4 relative">
              <input
                id="SellerId"
                name="SellerId"
                type="file"
                required
                className="input absolute opacity-0 w-full h-full cursor-pointer"
                onChange={handleChange}
              />
              <div className="flex items-center justify-center border-2 border-dashed border-gray-400 rounded px-4 py-2 cursor-pointer">
                <FaPlus className="mr-2" />
                <span>{SellerInfo.SellerId || "Add File"}</span>
              </div>
            </div>
          </div>
          <button type="submit" className="button ">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerInfo;
