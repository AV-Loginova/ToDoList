import axios from "axios";
import { useEffect, useState } from "react";

type val = {
  status: string;
  id: string | null;
};

function Profile() {
  //   const [value, setValue] = useState<val>({
  //     status: "",
  //     id: localStorage.getItem("id"),
  //   });
  //   const [status, setStatus] = useState(null || localStorage.getItem("status"));

  //   const handleInput = (e: any) => {
  //     setValue((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  //   };
  //   const handleSubmit = (e: any) => {
  //     setStatus(value.status);
  //     e.preventDefault();
  //     axios
  //       .post("http://localhost:8081/profile", value)
  //       .then((res) => {
  //         localStorage.setItem("status", value.status);
  //         console.log(value);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <div className="w-[90vw] bg-[#f0f8ff] lg:w-[40vw] rounded-[10px] shadow-md p-[20px] min-h-[50vh] overflow-auto flex items-center flex-col">
      <h1 className="text-center">Profile</h1>
      <div className="flex"></div>
      <p className="text-[35px]">{localStorage.getItem("name")}</p>
      <label htmlFor="status">Status:</label>
      <input
        name="status"
        id="status"
        type="text"
        // onChange={handleInput}
      ></input>
      <button
      //   onClick={handleSubmit}
      >
        Edit
      </button>
    </div>
  );
}

export default Profile;
