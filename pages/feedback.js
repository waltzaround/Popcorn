import Head from "next/head";
import Page from "../components/Page";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const CoolButton = styled.button`
  margin-top: 1rem;
  border-radius: 120px;
  width: 14rem;
  height: 3rem;
  font-size: 1.2rem;
  border: none;
  background-color: black;
  color: white;
  font-family: "Lexend Deca";
`;

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
      lineHeight: 1.5
    }
  }
}));

var outputText;
const Data = { submitValue: "" };

function getQueryStringValue(key) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        "^(?:.*[&\\?]" +
          encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
          "(?:\\=([^&]*))?)?.*$",
        "i"
      ),
      "$1"
    )
  );
}

const handleClick = (dept, branch) => {
  var enteredText = "";
  enteredText = Data.submitValue;

  let data = {
    dept: dept,
    branch: branch,
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
      if (false) {
        window.open("close", "_self");
      }
    })
    .catch(error => console.log(error)); //to catch the errors if any
};

export default function Feedback() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Page>
      <Head>
        <title>Feedback</title>
        <p> This will get analysed by</p>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Feedback</h2>
        <form className="feedback-form">
          <TextField
            id="outlined-multiline-static"
            label="Leave your feedback here."
            multiline
            fullWidth
            rows="4"
            variant="outlined"
            name="message"
            onChange={e => (Data.submitValue = e.target.value)}
          />
        </form>
        <CoolButton
          className="feedback-submit"
          name="submit-button"
          onClick={e =>
            handleClick(
              getQueryStringValue("dept"),
              getQueryStringValue("branch")
            )
          }
        >
          Submit
        </CoolButton>

        <div className="test">
          <p>Result:</p>
          <p>
            <textarea name="result" ref={d => (outputText = d)} />
          </p>
        </div>
      </main>
      <footer>Powered by Loop</footer>

      <style jsx>{`
        .feedback-form {
          margin: 0 auto;
          width: 20rem;
        }
        .feedback-text {
          width: 100%;
        }
        .feedback-submit {
        }
        .test {
          /*display: none;*/
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: left;
        }
        .title,
        .description {
          text-align: center;
        }
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        footer {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </Page>
  );
}

/*
   <Link href="close">
      <button onClick={handleClick}>Submit</button>
    </Link>
*/
