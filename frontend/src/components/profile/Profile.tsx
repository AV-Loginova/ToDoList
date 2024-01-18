import axios from "axios";
import { useEffect, useState } from "react";

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
  };

  return (
    <div className="w-[90vw] bg-[#f0f8ff] lg:w-[40vw] rounded-[10px] shadow-md p-[20px] min-h-[50vh] overflow-auto flex items-center flex-col">
      <h1 className="text-center">Profile</h1>
      <div className="flex"></div>
      <p className="text-[35px]">{localStorage.getItem("name")}</p>
      <label htmlFor="quote">Quote:</label>
      <p className="italic">
        {quote === "null" ? "Your inspiring quote..." : quote}
      </p>
      <input name="quote" id="quote" type="text" onChange={handleInput}></input>
      <button onClick={handleSubmit}>Edit</button>
    </div>
  );
}

export default Profile;
