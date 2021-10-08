import styled from "styled-components";

const Motion = (props) => {
  
  return (
    <Container>
       <h1>Coming Soon...</h1>
       <p>Thanks For Visiting!</p>
    </Container>
  );
};

const Container = styled.main`
  min-width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction : column;
  text-align: center;
  justify-content: center;
  align-items: center;

  
  }
`;

export default Motion;
