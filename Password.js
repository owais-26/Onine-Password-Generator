import React from "react";
import { useState, useEffect } from "react";
const Password = () => {
  const [password, setPassword] = useState("Generate Password!");
  const [passwordLength, setPasswordLength] = useState(null);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [errors, setErrors] = useState({});

  const generatePassword = () => {
    setErrors({});
    if (!uppercase && !lowercase && !numbers && !symbols) {
      return setErrors("At least one character type must be selected");
    } else if (passwordLength === "0") {
      return setErrors("Password length cannot be 0");
    } else if (passwordLength === "") {
      return setErrors("Invalid password length");
    } else if (passwordLength > 80) {
      return setErrors("Password length cannot exceed 80 characters");
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let choice = random(0, 3);
      if (lowercase && choice === 0) {
        password += randomLower();
      } else if (uppercase && choice === 1) {
        password += randomUpper();
      } else if (symbols && choice === 2) {
        password += randomSymbol();
      } else if (numbers && choice === 3) {
        password += random(0, 9);
      } else {
        i--;
      }
    }
    setPassword(password);
  };

  const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  const randomLower = () => {
    return String.fromCharCode(random(97, 122));
  };

  const randomUpper = () => {
    return String.fromCharCode(random(65, 90));
  };

  const randomSymbol = () => {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
    return symbols[random(0, symbols.length - 1)];
  };

  useEffect(() => {
    generatePassword();
  }, []);
  const clearCase = () => {
    // console.log(text);

    setPassword("");
  };
  const copy = () => {
    // Get the text field
    let copyText = document.getElementById("myInput");

    // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    document.getSelection().removeAllRanges();
    alert("Password Copied to Clipboard Successfully!");

    // Alert the copied text
  };

  return (
    <>
      <h2 className="mt-3 text-center w-50 m-auto mb-3  ">
        Instantly generate a secure, random password with the LetsPass online
        tool
      </h2>
      <div class="input-group w-75 m-auto p-3 ">
        <input
        disabled
          type="text"
          className="form-control p-2 bg-white  text-center  "
          placeholder="Generated Password Here!"
          value={password}
          aria-label="Recipient's username"
          aria-described
          id="myInput"
          by="button-addon2"
        />
      </div>
      <div className="mb-3">
        <button
          className="btn btn-success mx-2  "
          type="button"
          id="button-addon2"
          onClick={copy}
          disabled={password.length===0}
        >
          Copy Password!
        </button>

        <button
          className="btn btn-success mx-2 "
          type="button"
          id="button-addon2"
          onClick={clearCase}
          disabled={password.length===0}
        >
          Clear Password!
        </button>
      </div>

      <div className="w-75 p-3 mb-5 rounded border border-dark m-auto border-2  shadow-lg bg-light">
        <h2 className=" ms-3 mb-4 text-start">
          {" "}
          <strong>Customize your Password!</strong>{" "}
        </h2>
        <div className="m-auto">
          <h5 className="text-center">Password Length</h5>
          <input
            className="mx-2 text-center mb-3 "
            placeholder="Password Length"
            min="4"
            defaultValue={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            type="number"
            name=""
            id=""
          />
        </div>
        <div className="option text-success">
          <h5 className="px-1">Include Uppercase Letters</h5>
          <input
            type="checkbox"
            name="uppercase"
            defaultChecked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
        </div>
        <div className="option text-success">
          <h5 className="px-1">Include Lowercase Letters</h5>
          <input
            type="checkbox"
            name="lowercase"
            defaultChecked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          />
        </div>

        <div className="option text-success">
          <h5 className="px-4">Include Numbers</h5>
          <input
            type="checkbox"
            name="numbers"
            defaultChecked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          />
        </div>

        <div className="option text-success">
          <h5 className="px-4"> Include Symbols</h5>
          <input
            type="checkbox"
            name="symbols"
            className="p-5"
            defaultChecked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
          />
        {errors.length && <ol className="error mb-3 text-center text-danger">{errors}</ol>}
        </div>

        
     

        <button
          type="button"
          value="Generate"
          onClick={generatePassword}
          class="btn text-dark btn-outline-success"
        >
          Generate!
        </button>
      </div>
    </>
  );
};

export default Password;
