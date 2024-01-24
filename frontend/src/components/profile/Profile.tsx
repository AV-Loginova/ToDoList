import axios from "axios";
import { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";

type val = {
  quote: string;
  id: string | null;
};

function Profile() {
  const [value, setValue] = useState<val>({
    quote: "",
    id: localStorage.getItem("id"),
  });
  const [quote, setQuote] = useState(null || localStorage.getItem("quote"));
  const [click, setClick] = useState(false);

  const handleInput = (e: any) => {
    setValue((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const handleSubmit = (e: any) => {
    setQuote(value.quote);
    e.preventDefault();
    axios
      .post("http://localhost:8081/profile", value)
      .then((res) => {
        localStorage.setItem("quote", value.quote);
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
      });
    setClick(!click);
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="w-[90vw] bg-[#f0f8ff] lg:w-[40vw] rounded-[10px] shadow-md p-[20px] min-h-[50vh] overflow-auto flex items-center flex-col">
      <h1 className="text-center">Profile of {localStorage.getItem("name")}</h1>
      <div className="flex">
        <p className="italic">
          {quote === "null" || quote === "" ? "Your inspiring quote..." : quote}
        </p>
        <button className="mt-[-20px]" onClick={handleClick}>
          <Icon.PenFill
            size={15}
            color={"grey"}
            className="hover:fill-[black]"
          />
        </button>
      </div>
      <div className={`flex gap-[1px] ${!click && "hidden"}`}>
        <input
          name="quote"
          id="quote"
          type="text"
          onChange={handleInput}
          className="p-[6px] border-1 rounded-[5px]"
        ></input>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default Profile;
