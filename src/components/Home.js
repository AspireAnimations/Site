import styled from 'styled-components';
import FeatureFilms from './FeatureFilms';
import ImgSlider from './ImgSlider';
import MotionGraphics from './MotionGraphics';
import ShortFilms from './ShortFilms';
import Viewers from './Viewers';
import WebApps from './WebApps';

const Home = (props) => {
  return (
  <Container>
     <ImgSlider />
     <Viewers />
     <MotionGraphics />
     <FeatureFilms />
     <ShortFilms />
     <WebApps />
  </Container>
  );
};

const Container = styled.main`
 position: relative;
 min-height: calc(100vh - 250px);
 overflow-x: hidden;
 display: block;
 top: 72px;
 padding: 0 calc(3.5vw + 5px);

 &:after {
   background: url('/images/home-background.png') center center / cover 
   no-repeat fixed;
   content: '';
   position: absolute;
   inset: 0px;
   opacity: 1;
   z-index: -1;
 }
`;

export default Home;