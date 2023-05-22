import React from "react";
import styled from 'styled-components'
import Sharepost from "./Sharepost";
const Main = () => {
    return(
      <Container>
          <Sharbox>

          </Sharbox>
          <Content>

          </Content>
          <Sharepost />
      </Container>
    )
}
const Container = styled.div``;
const Sharbox = styled.div``;
const Content = styled.div``;

export default Main