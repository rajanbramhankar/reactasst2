import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import Submits from './Submits';
function Randam() {
  const [user, setUser] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState(0);
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setData([{ name: user, dept: department, rate: rating, id: uuidv1()},
        ...data]);
        setUser('');
        setDepartment('');
        setRating(0);
  };
  return (
    <React.Fragment>
      <div className="feedback__container">
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form action="" onSubmit={submitHandler}>
          <div className="input__container">
            <label htmlFor="">Name: </label>
            <input
              className="pub"

              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            required/>
          </div>
          <div className="input__container">
            <label htmlFor="">Department:</label>
            <input
              className="pub"

              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            required/>
          </div>
          <div className="input__container">
            <label htmlFor="">Rating</label>
            <input
              className="pub"
              type="number"
              value={rating}
              max={10}
              min={0}
              step={1}
              onChange={(e) => setRating(e.target.value)}
            required/>
          </div>
          <input type="submit" className="submitbtn" />
        </form>
      </div>
      <Submits submitData={data}/>
    </React.Fragment>
  );
}

export default Randam;