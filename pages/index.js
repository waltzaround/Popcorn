import Head from "next/head";
import Page from "../components/Page";
import Link from "next/link";
import styled from 'styled-components'
const ContainerMain = styled.div`
margin: 0 auto;
width: 20rem;

footer {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}

button {
  border-radius:120px;
  width: 14rem;
  height: 3rem;
  font-size: 1.2rem;
  border: none;
  background-color: black;
  color: white;
  font-family: 'Lexend Deca'
}

`

const CompanyLogo = styled.img`
margin-top: 2rem;
width: 4rem;
height: 4rem;
object-fit: contain;
`



const Home = () => (
  <Page>
    <Head>
      <title>Loop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ContainerMain>
      <CompanyLogo src='/img/vero.jpeg'/>
     
      
     
      <h2>Leave your feedback about Vero Ltd here.<br/> All feedback is anonymous.</h2>


      <Link href="feedback">
      <button >
          Get started
        </button>
      </Link>
      <footer>Powered by Loop</footer>

    </ContainerMain>


    
  </Page>
);

export default Home;
