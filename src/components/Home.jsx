import React from "react";
import styled from 'styled-components'
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
const Home = () => {
    return(
       <Containner>
           <Section>
               <h5>
                   <a href='#'>Hiring in a Hurry?</a>
               </h5>
               <p>Find talented pros in record time with Upwork and keep business moving</p>
           </Section>
           <Layout>
           <Leftside/>
           <Main/>
           <Rightside/>
           </Layout>
       </Containner>
    )
}

const Containner = styled.div `
 padding: 52px 0 52px 0;
  width: 100%;
`
const Section = styled.div `
  display: flex;
  text-align: center;
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-decoration: underline;
  justify-content: center;
  font-style: italic;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media(max-width: 760px){
    flex-direction: column;
    padding: 15px 5px;
  }@media(max-width: 1024px){
    flex-direction: column;
  padding: 15px 5px;
  }

`
const Layout = styled.div `
  display: grid;
  grid-template-areas: "Leftside Main Rightside";
  grid-template-columns: minmax(0,5fr) minmax(0, 12fr) minmax(300px, 7fr);
  row-gap: 25px;
  column-gap: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`

export default Home