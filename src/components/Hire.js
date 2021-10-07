import styled from "styled-components";
import Form from "./Form";
const Hire = (props) => {
  
  return (
    <Container>
       <Form />
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

export default Hire;
