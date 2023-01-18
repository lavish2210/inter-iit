import React, { useState } from 'react';
import './App.css';
import { connectBlockchain } from "./web3.js";

var web3;
async function setup() {
  web3 = await connectBlockchain();
}
setup();

let count = 0;

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [userNumber, setUserNumber] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('name: ', name);
    console.log('age: ', age);
    count++;
    await web3.contracts.UserContract.methods
      .storeUser(count, name, age)
      .send({ from: web3.account })
      .once("receipt", (receipt) => {
        console.log("Transaction Number:", receipt.transactionIndex);
        console.log("Block Number:", receipt.blockNumber);
        console.log("Block Hash:", receipt.blockHash);
        console.log("Transaction Hash:", receipt.transactionHash);
      });
    document.getElementById("submission-form").reset();
  }

  async function fetchUser(e) {
    e.preventDefault();

    try {
      var user = await web3.contracts.UserContract.methods
        .users(userNumber)
        .call();
      if (user.Name !== "") {
        document.getElementById("user").innerHTML = `${user.Name}, ${user.Age}`;
      } else {
        document.getElementById("user").innerHTML = ``;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id='loginform'>
    <h2 id="headerTitle">Form</h2>
    <form onSubmit={handleSubmit} id="submission-form">
      <label>
        Name:
        <br></br>
        <input type="text" placeholder='Enter your name here' value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <br></br>
        <input type="number" placeholder='Enter your age here' value={age} onChange={e => setAge(e.target.value)} />
      </label>
      <br />
      <button id="button" type="submit">Submit</button>
    </form>
    <form onSubmit={fetchUser}>
        <label htmlFor="serialNo">SerialNo:</label>
        <br></br>
        <input type="number" placeholder='Enter serial number' value={userNumber} onChange={e => setUserNumber(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    <div id="user"></div>
    </div>
  );
}

export default App;