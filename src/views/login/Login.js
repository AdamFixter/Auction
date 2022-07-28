import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../components/Providers/Auth/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { signIn, isAuthorised } = useContext(AuthContext);

  const [ error, setError ] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    let email = inputs["email"];
    let password = inputs["password"];

    let error = signIn(email, password);
    if (!error) {
      console.log("Redirect");
      console.log(isAuthorised())
      return navigate("/");
    } 
    
    setError(error);
  }

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <div className="h-full flex items-center justify-center">
        <div className="max-w-lg w-full py-5 px-10 bg-gray-800 rounded shadow-xl">
          <div>
            <h3 className="font-bold">Sign In</h3>
          </div>
          <form className="space-y-6" onSubmit={e => handleSubmit(e)}>
            <h6 className="text-red-500">{error}</h6>
            <div className="mt-6 relative flex flex-col">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="mt-6 relative flex flex-col">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required={true}
                onChange={handleChange}
              />
            </div>


            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#">
                  Forgot your password?
                </a>
              </div>
            </div> */}
            <div className="flex">
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
