import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { FaUserCircle } from "react-icons/fa"; // Import the profile icon

const ClientProfile = () => {
  const [accountInformation, setAccountInformation] = useState({
    email: "example@example.com",
    username: "exampleUser",
    password: "examplePassword",
    profilePic: "",
  });

  const [clientInformation, setClientInformation] = useState({
    fullName: "John Doe",
    gender: "Male",
    phoneNumber: "123-456-7890",
    birthday: "1990-01-01",
    shippingAddress1: "123 Example St",
    shippingAddress2: "Apt 4B",
    creditCardNumber: "1234-5678-9012-3456",
    paypalAccountNumber: "example@paypal.com",
  });
  // handle the changes of the first form Acoonut
  const handleAccountChange = (e) => {
    setAccountInformation({
      ...accountInformation,
      [e.target.name]: e.target.value,
    });
  };
  //handle the Changes of the second Form
  const handleClientChange = (e) => {
    setClientInformation({
      ...clientInformation,
      [e.target.name]: e.target.value,
    });
  };

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    // Handle account information submit
  };

  const handleClientSubmit = (e) => {
    e.preventDefault();
    // Handle client information submit
  };
  // to change the picture of the profile
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAccountInformation({
          ...accountInformation,
          profilePic: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  // handle Changes password
  const changePassword = () => {
    const newPassword = prompt("Enter new password");
    if (newPassword) {
      setAccountInformation({
        ...accountInformation,
        password: newPassword,
      });
    }
  };
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-col px-12 py-8 gap-4">
          <h3 className="text-2xl font-bold text-black mb-4">
            Account Information
          </h3>
          <form onSubmit={handleAccountSubmit} className="space-y-4">
            {/* Email */}
            <div className="flex justify-between space-x-4">
              <div className="flex-1">
                <label className="label">Email</label>
                <input
                  name="email"
                  value={accountInformation.email}
                  onChange={handleAccountChange}
                  className="input"
                />
              </div>
              {/* UserName */}
              <div className="flex-1">
                <label className="label">Username</label>
                <input
                  name="username"
                  value={accountInformation.username}
                  onChange={handleAccountChange}
                  className="input"
                />
              </div>
            </div>
            {/* Password */}
            <div className="">
              <label className="label">Password</label>
              <div className="flex gap-8 items-center ">
                <input
                  name="password"
                  value={accountInformation.password}
                  onChange={handleAccountChange}
                  className="input flex-1"
                />
                <div>
                  <button
                    className="button"
                    type="button"
                    onClick={changePassword}
                  >
                    {" "}
                    Change Password
                  </button>
                </div>
              </div>
              <div className=""></div>
            </div>
            {/* Profile Picture */}

            <div>
              <label className="label">Profile Picture</label>
              <div
                onClick={() =>
                  document.getElementById("profilePicInput").click()
                }
                className="w-40 h-40 border border-black rounded-full overflow-hidden cursor-pointer"
              >
                {accountInformation.profilePic ? (
                  <img
                    src={accountInformation.profilePic}
                    alt="Profile"
                    className=" bg-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FaUserCircle size={80} className="w-full h-full" />
                  </div>
                )}
              </div>
              <input
                id="profilePicInput"
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
                style={{ display: "none" }}
              />
            </div>
            <button type="submit" className="button w-[200px]">
              Confirm Changes
            </button>
          </form>
          <hr />
          {/* Client info Form */}
          <h3 className="text-2xl font-bold text-black mb-4">
            Client Information
          </h3>

          <hr className="border-t border-gray-400 " />
          <form onSubmit={handleClientSubmit} className="space-y-4">
            <div className="flex  justify-between gap-8 ">
              {/* fullname */}
              <div className="flex-1">
                <label className="block text-black">Full Name</label>
                <input
                  name="fullName"
                  value={clientInformation.fullName}
                  onChange={handleClientChange}
                  className="input"
                />
              </div>
              {/* Gender */}
              <div className="flex-1 flex flex-col ">
                <label className="label">Gender</label>
                <select
                  name="gender"
                  value={clientInformation.gender}
                  onChange={handleClientChange}
                  className="w-[30%]   px-3 py-2 border border-gray-300 rounded-md  bg-white text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            {/* Phone number , Birthday  */}
            <div className="flex gap-8">
              <div className="flex-1">
                <label className="label">Phone Number</label>
                <input
                  name="phoneNumber"
                  value={clientInformation.phoneNumber}
                  onChange={handleClientChange}
                  className="input"
                />
              </div>
              <div className="flex-1">
                <label className="label">Birthday</label>
                <input
                  type="date"
                  name="birthday"
                  value={clientInformation.birthday}
                  onChange={handleClientChange}
                  className="input"
                />
              </div>
            </div>
            {/* Shipping Address 1 , Shipping Address 2 */}

            <div className="flex gap-8">
              <div className="flex-1">
                <label className="label">Shipping Address 1</label>
                <input
                  name="shippingAddress1"
                  value={clientInformation.shippingAddress1}
                  onChange={handleClientChange}
                  className="input"
                />
              </div>
              <div className="flex-1">
                <label className="label">Shipping Address 2</label>
                <input
                  name="shippingAddress2"
                  value={clientInformation.shippingAddress2}
                  onChange={handleClientChange}
                  className="input"
                />
              </div>
            </div>
            <div>
              <label className="label">Credit Card Number</label>
              <input
                name="creditCardNumber"
                value={clientInformation.creditCardNumber}
                onChange={handleClientChange}
                className="input"
              />
            </div>
            <div>
              <label className="label">Paypal Account Number</label>
              <input
                name="paypalAccountNumber"
                value={clientInformation.paypalAccountNumber}
                onChange={handleClientChange}
                className="input"
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="button px-[20px] mt-4 ">
                Confirm Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ClientProfile;
