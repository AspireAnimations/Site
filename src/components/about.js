import React from 'react'
import styled from 'styled-components'
import '../about.css'
import '../about.js'
const About = () => {
  return (
    <Container>
    <div className="about">
    <div className="upper">
     
        <div className="image">
          <div className="camp">
            <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/78235/tent-clipart-md.png" alt="Image" id="tent" />
            <img src="https://thumbs.gfycat.com/LinedGoldenKentrosaurus-max-1mb.gif" alt="Image" id="fire" />
         
        </div>
      </div>
      <div className="info">
        <h1>ABOUT ASPIRE!</h1>
        <p>
         With almost 5 Years of Experience, We at Aspire Animations consider it for life's mission to make your Brand stand out from the others by providing High Quality Web Solutions.
        </p>
      </div>
    </div>
    <div className="lower">
      <div className="info" id="lower-info">
        <h1>Why Choose Us?</h1>
        <p>
          Start Ups and New Brands suffer a lot when it comes to the trusted Firms providing 3D/2D Animated Videos, Social Media Handling, SEO, Online Promotions and even Website & Apps Development. We have a huge client base who speaks on our behalf and thus providing you with confidence and reliability.
        </p>
      </div>
      <div className="slider" id="lower-img">
        <img src="https://i.pinimg.com/736x/6d/7d/b3/6d7db3a1037c8ac5b41b0ebfec293ca4.jpg" alt="Image" id="slider" />
      </div>
    </div>
  </div>
  </Container>
  
  )
}

const Container = styled.main`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 calc(3.5vw + 5px);
  margin-bottom: -1.2rem;

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;

    @media()
  }
`;

const Data = styled.div`
   display: flex;
   max-height: 60%;
`;


export default About;
