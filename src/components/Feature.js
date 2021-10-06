import styled from "styled-components";

const Feature = (props) => {
  
  return (
    <Container>
       <h1>Coming Soon...</h1>
       <p>Hold On Tight!</p>
    </Container>
  );
};

const Container = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction : column;
  text-align: center;
  justify-content: center;
  align-items: center;

  
  }
`;

export default Feature;
