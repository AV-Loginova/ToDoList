import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignUpValidation";
import axios from "axios";

const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState<any>({});
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors(Validation(values));
    if (errors.name == "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          console.log(res);
          navigate("/signIn");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[80vw] bg-[#f0f8ff] md:w-[30vw] rounded-[10px] shadow-md p-[20px] min-h-[50vh] overflow-auto flex flex-col gap-[10px]"
    >
      <h1 className="text-center">Sign Up</h1>
      {/* EMAIL */}
      <div className="flex flex-col">
        <label htmlFor="email">Your email:</label>
        <input
          onChange={handleInput}
          name="email"
          type="email"
          id="email"
          className="border-[1px] border-gray rounded-[5px]"
        ></input>
        {errors.email && (
          <span className="text-danger text-xs">{errors.email}</span>
        )}
      </div>
      {/* NAME */}
      <div className="flex flex-col">
        <label htmlFor="name">Your name:</label>
        <input
          onChange={handleInput}
          name="name"
          type="text"
          id="name"
          className="border-[1px] border-gray rounded-[5px]"
        ></input>
        {errors.name && (
          <span className="text-danger text-xs">{errors.name}</span>
        )}
      </div>
      {/* PASSWORD */}
      <div className="flex flex-col">
        <label htmlFor="password">Your password:</label>
        <input
          onChange={handleInput}
          name="password"
          type="password"
          id="password"
          className="border-[1px] border-gray rounded-[5px]"
        ></input>

        {errors.password && (
          <span className="text-danger text-xs">{errors.password}</span>
        )}
      </div>
      {/* SUBMIT */}
      <button type="submit" className="btn btn-success w-full">
        Create Account
      </button>
      <p className="mb-0 text-center">or</p>
      <Link to="/signin" className="btn btn-primary w-full">
        Log In
      </Link>
    </form>
  );
};

export default SignUp;
