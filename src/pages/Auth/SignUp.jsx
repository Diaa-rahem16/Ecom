import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
    agreeTerms: false,
  });
  const handleUserTypeChange = (type) => {
    setSignUpForm({
      ...signUpForm,
      userType: type,
    });
  };
  const handleChange = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
    console.log(signUpForm);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    // event.preventDefault();

    // // Send the signUpForm data
    // const response = await fetch("/api/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(signUpForm),
    // });

    // if (!response.ok) {
    //   // Handle error
    //   console.error("Signup failed");
    //   return;
    // }

    // After form is successfully submitted
    if (signUpForm.userType === "client") {
      navigate("/signup/clientInfo", { state: { formData: signUpForm } });
    } else if (signUpForm.userType === "seller") {
      navigate("/signup/sellerInfo", { state: { formData: signUpForm } });
    }
    // ...
  };
  return (
    <div className=" py-12  min-h-screen flex items-center justify-center bg-custom-background rounded bg-cover bg-no-repeat px-4 sm:px-10 lg:px-8">
      <div className="max-w-lg w-full py-10 px-16 rounded space-y-8 bg-white">
        <div>
          <h2 className="text-center text-4xl font-extrabold text-gray-900 font-montserrat ">
            REGISTER
          </h2>
        </div>
        <form
          className="space-y-6 flex flex-col gap-4"
          onSubmit={handleSubmit}
          method="post"
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md font-montserrat flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="font-semibold text-gray-900">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="text"
                required
                className="input appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={signUpForm.emailOrPhone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="font-semibold text-gray-900">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                min={8}
                className="input appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={signUpForm.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="font-semibold text-gray-900"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                min={8}
                required
                className="input  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={signUpForm.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-900 mb-4">
                User Type
              </label>
              <div>
                <button
                  type="button"
                  className={`px-8 py-4 font-semibold font-montserrat mr-2 border-2 p
                ${
                  signUpForm.userType === "client"
                    ? "border-[#607D8B] border-[3px]"
                    : "border-gray-300"
                }`}
                  onClick={() => handleUserTypeChange("client")}
                >
                  Client
                </button>
                <button
                  type="button"
                  className={`px-8 py-4 font-semibold font-montserrat mr-2  p
                ${
                  signUpForm.userType === "seller"
                    ? "border-[#607D8B] border-[3px]"
                    : "border-gray-300"
                }`}
                  onClick={() => handleUserTypeChange("seller")}
                >
                  Seller
                </button>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                required
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                value={signUpForm.agreeTerms}
                checked={signUpForm.agreeTerms}
                onChange={handleChange}
              />
              <label
                htmlFor="agreeTerms"
                className="ml-2 block text-sm text-gray-900"
              >
                I agree to the
                <a
                  href="#"
                  className="font-medium text-blue-400 inline-block ml-1"
                >
                  terms and conditions
                </a>
              </label>
            </div>
          </div>

          <button onClick={handleSubmit} className="button">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
