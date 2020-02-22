
const Page = ({children}) => (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap" rel="stylesheet"></link>
    <style jsx global>{`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: Lexend Deca, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    * {
      box-sizing: border-box;
    }
  `}</style>
  
  {children}    
  </div>
)

export default Page