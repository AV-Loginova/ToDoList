import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignInValidation";
import axios from "axios";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState<any>({});

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/signin", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/");
          } else {
            console.log("No record exists", res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[80vw] bg-[#f0f8ff] lg:w-[30vw] rounded-[10px] shadow-md p-[20px] min-h-[50vh] overflow-auto flex flex-col gap-[10px]"
    >
      <h1 className="text-center">Log In</h1>
      {/* EMAIL */}
      <div className="flex flex-col">
        <label htmlFor="email">Your email:</label>
        <input
          name="email"
          onChange={handleInput}
          type="email"
          id="email"
          className="border-[1px] border-gray rounded-[5px] "
        ></input>
        {errors.email && (
          <span className="text-danger text-xs">{errors.email}</span>
        )}
      </div>

      {/* PASSWORD */}
      <div className="flex flex-col mb-[10px]">
        <label htmlFor="password">Your password:</label>
        <input
          name="password"
          onChange={handleInput}
          type="password"
          id="password"
          className="border-[1px] border-gray rounded-[5px]"
        ></input>
        {errors.password && (
          <span className="text-danger text-xs">{errors.password}</span>
        )}
      </div>

      {/* SUBMIT */}
      <button type="submit" className="btn btn-success">
        Log In
      </button>
      <p className="mb-0 text-center">or</p>
      <Link to="/signup" className="btn btn-primary">
        Create account
      </Link>
    </form>
  );
};

export default SignIn;
