import styled from "styled-components";

const Feature = (props) => {
  
  return (
    <Container>
       <h1>Coming Soon...</h1>
       <p>Thanks For Visiting!</p>
    </Container>
  );
};

const Container = styled.main`

overflow-x: hidden !important;
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction : column;
  text-align: center;
  justify-content: center;
  align-items: center;

  
  }
`;

export default Feature;
