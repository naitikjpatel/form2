import React, { useState } from "react";


const App = () => {
  const [fromData, setFromData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification:""
  })

  function changeHandler(event) {
    const [name, value, checked, type] = event.target;
    setFromData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Printing Data");
    console.log(fromData);
  }
  return <div className="flex flex-col items-center mt-2">
    <form onSubmit={submitHandler}>
      <label htmlFor="firstName">First Name</label>
      <br></br>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder=" Love"
        value={fromData.firstName}
        onChange={changeHandler}
        className="outline"
      />

      <br />

      <label htmlFor="lastName">Last Name</label>
      <br></br>
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Babbar"
        value={fromData.lastName}
        onChange={changeHandler}
        className="outline"
      />

      <br />
      <label htmlFor="email">Email</label>
      <br></br>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="love@abcd.com"
        value={fromData.email}
        onChange={changeHandler}
        className="outline"
      />

      <br />

      <label htmlFor="country">Country</label>
      <br />
      <select
        id="country"
        name="country"
        value={fromData.country}
        onChange={changeHandler}
        className="outline"
      >

        <option>India</option>
        <option>United States</option>
        <option>Caneda</option>
        <option>Mexico</option>
      </select>
      <br />


      <label htmlFor="streetAddress">streetAddress</label>
      <br></br>
      <input
        type="text"
        name="streetAddress"
        id="streetAddress"
        placeholder="B-25C"
        value={fromData.streetAddress}
        onChange={changeHandler}
        className="outline"
      />

      <br />
      <label htmlFor="city">City</label>
      <br></br>
      <input
        type="text"
        name="city"
        id="city"
        placeholder="B-25C"
        value={fromData.city}
        onChange={changeHandler}
        className="outline"
      />

      <br />
      <label htmlFor="state">State</label>
      <br></br>
      <input
        type="text"
        name="state"
        id="state"
        placeholder="Bihar"
        value={fromData.state}
        onChange={changeHandler}
        className="outline"
      />

      <br />

      <label htmlFor="postalCode">Postal Code</label>
      <br></br>
      <input
        type="text"
        name="postalCode"
        id="postalCode"
        placeholder="110077"
        value={fromData.state}
        onChange={changeHandler}
        className="outline"
      />

      <br />

      <fieldset>
        <legend>By Email</legend>
        <div className="flex ">
          <input type="checkbox"
            id="comments"
            name="comments"
            checked={fromData.comments}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someones posts a comment on a posting</p>
          </div>
        </div>

        <div className="flex ">
          <input type="checkbox"
            id="candidates"
            name="candidates"
            checked={fromData.candidates}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="candidates">candidates</label>
            <p>Your are my best candidate i never seen</p>
          </div>
        </div>

        <div className="flex ">
          <input type="checkbox"
            id="offers"
            name="offers"
            checked={fromData.offers}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="offers">offers</label>
            <p>Best offer for you only</p>
          </div>
        </div>

      </fieldset>


      <fieldset>
        <legend>Push Notification</legend>
        <p>These are delivered via sma to your mobile phone.</p>

        <input 
          type="radio"
          id="pushEverything"
          name="pushNotification"
          value="Everything"
          onChange={changeHandler}
        
        />
        <label htmlFor="pushEverything">Everything</label>
        <br></br>
        <input 
          type="radio"
          id="pushEmail"
          name="pushNotification"
          value="Same as email"
          onChange={changeHandler}
        
        />
        <label htmlFor="pushEmail">Same as email</label>
        <br></br>
        <input 
          type="radio"
          id="pushNothing"
          name="pushNotification"
          value="No push Notification"
          onChange={changeHandler}
        
        />
        <label htmlFor="pushNothing">No Push Notification</label>
        <br></br>
      </fieldset>

      <br></br>
      <button className="outline rounded py-2 px-4 mb-20 bg-blue-500 text-white font-bold">Submit</button>
    </form>
  </div>;
};

export default App;
