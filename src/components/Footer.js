import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <div>
      <Foot>
           <h2><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />Aspire Animations</h2>
           
      </Foot>
    </div>
  )
};

const Foot = styled.div`
overflow: hidden;
margin-top: 1rem;
padding: 1rem;
background-color: #c23616;
bottom: 0;
left: 0;
right: 0;
max-width: 100vw;
justify-items: center;
text-align: center;
align-items: center;
flex-grow: 1;
`;


export default Footer
