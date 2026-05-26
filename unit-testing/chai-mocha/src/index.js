//*problem 1
//* input: "hamada" ===> output: HAMADA. expect
//* input: 12 ===> output: "".   expect

const capitalizeText = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("parameter should be string");
  }
  return input.toUpperCase();
};

//? test that the function takes a string  it will return a string
//? test that the function takes a string and return it after capitalize it
//? test if the function takes number it will throw type error says parameter should be string
//? make sure that this function accept one param only
//& ////////////////////////////////////////////////////////

//* problem 2
//* input number 3 ==> output should be [0,1,2]

const createArray = (number) => {
  const myArray = Array.from(Array(number).keys());
  return myArray;
};

//? test that the return value of type array
//? test if we pass 3 it will return array of length 3 and test it's include 1
//? try to delay the testing process 5 seconds
//? try to use different styles (expect , should , assert)
//? after finishing your test process try to  run it on a browser//bonus
//? make pending test case

//^ createArray(3)>>>>>[0,1,2]
//^ createArray(5)>>>[0,1,2,3,4]
//& ////////////////////////////////////////////////////////

//* problem 3
let obj = { id: 1 };
let obj1 = { x: obj };
let obj2 = { x: obj };
//? check whether obj1 is equal to obj2 using expect , should and assert

//& ////////////////////////////////////////////////////////

//* problem 4
function CheckPositivity(x) {
  if (x > 0) {
    return true;
  } else {
    return false;
  }
}

//? check the expected value using expect , should and assert if x = 4 , x = -1 and x=0
//& ////////////////////////////////////////////////////////

//* problem 5
function Multiply(x) {
  return x * 2;
}
//? using assert
//? 1- make sure that x > 0
//? 2- make sure that the returned number will be above zero

//& ////////////////////////////////////////////////////////////

//* problem 6
let obj3 = { a: { b: [{ x: 1 }] } };
//? using assert check 'a.b[0]' will include {x: 1}

//& ////////////////////////////////////////////////////////

//& ////////////////////////////////////////////////////////
//* problem 7 [Bonus]
function validateNumber(value) {
  if (value === "" || value === null || value === undefined)
    return "Number required";
  const n = Number(value);
  if (!Number.isFinite(n)) return "Must be a number";
  if (!Number.isInteger(n)) return "Must be an integer";
  if (n < 0) return "Must be >= 0";
  return null;
}

function validateText(text) {
  if (!text) return "Text required";
  if (!/^[A-Za-z]+$/.test(text)) return "Only letters allowed";
  if (text.length < 2) return "Too short";
  return null;
}

if (typeof window !== "undefined") {
  const form = document.getElementById("testForm");
  const errorsEl = document.getElementById("errorMessages");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = document.getElementById("numberInput").value;
    const txt = document.getElementById("textInput").value;

    console.log(num, txt, txt.length)
    const errNum = validateNumber(num);
    const errTxt = validateText(txt);

    const errs = [errNum, errTxt].filter(Boolean);
    errorsEl.textContent = errs.length ? errs.join("; ") : "OK";

    if (errs.length === 0) {
      alert(`Submitted: Name=${txt}, age=${num}`);
    }
  });
};

//? make a form with two inputs [number and string] in your html and validate the values of those inputs
//* problem 8 [Bonus]
//? Try to render the unit testing results in the browser.

// export { capitalizeText, createArray, CheckPositivity, Multiply, obj, obj1, obj2, obj3, validateNumber, validateText };
