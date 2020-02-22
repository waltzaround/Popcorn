import Page from "../components/Page";
import Link from "next/link";

var submitInput;
var outputText;

const handleClick = () => {
  var enteredText = "";

  if (!submitInput) {
    alert("element not found");
  }

  enteredText = submitInput.value;
  //alert(enteredText);

  let data = {
    message: enteredText
  };

  let pd = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  fetch("http://localhost:3000/api/procres", pd)
    .then(response => response.json())
    .then(responseJson => {
      let retString = JSON.stringify(responseJson, null, 2);
      console.log("Got result: " + retString);
      outputText.value = retString;
    })
    .catch(error => console.log(error)); //to catch the errors if any
};

const Feedback = () => (
  <Page>
    <p>hello</p>
    <form>
      <textarea
        name="message"
        rows="10"
        cols="30"
        ref={input => (submitInput = input)}
      >
        The cat was playing in the garden.
      </textarea>
    </form>
    <button onClick={handleClick}>Submit</button>
    <p>Result:</p>
    <p>
      <textarea name="result" ref={d => (outputText = d)} />
    </p>
  </Page>
);

/*
   <Link href="close">
      <button onClick={handleClick}>Submit</button>
    </Link>
*/

export default Feedback;
