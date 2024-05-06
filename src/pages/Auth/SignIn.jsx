import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    // Send the form data to the backend for processing
    // You would replace this with your actual backend service call
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-background rounded bg-cover bg-no-repeat px-4 sm:px-10 lg:px-8">
      <div className="max-w-lg w-full py-10 px-16 rounded space-y-8 bg-white">
        <div>
          <h2 className="text-center text-4xl font-extrabold text-gray-900 font-sans capitalize">
            SIGN IN
          </h2>
        </div>
        <form className="space-y-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-mdshadow-sm -space-y-px flex flex-col gap-4">
            <div>
              <label
                htmlFor="email-or-phone"
                className="font-semibold text-gray-900"
              >
                Email address or Phone number
              </label>
              <input
                id="email-or-phone"
                name="emailOrPhone"
                type="text"
                required
                className="input appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={form.emailOrPhone}
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
                className="input appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={form.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button onClick={handleSubmit} className="button mt-12">
            Next
          </button>
          <div>
            <p className="text-center text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </p>
          </div>
          <div>
            <p className="text-center text-gray-500 text-sm">
              Forgot your password?{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Reset password
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
