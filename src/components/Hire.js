import styled from "styled-components";
import '../style.css'
const Hire = (props) => {
  
  return (
    <Container>
        <section id="contact">
	<div class="sectionheader">	<h1>CONTACT</h1></div>
	<article>
	<p>Feel free to mention your Desires, Requirements and Problems regarding your project and we will get back to you with the solution in no time.</p>
		
			<label for="checkcontact" class="contactbutton"><div class="mail"></div></label><input id="checkcontact" type="checkbox"/>
	
			<form name="contact"   
      
      action="" method="post" class="contactform" data-netlify="true">
				<p class="input_wrapper"><input type="text" name="contact_nom"  id ="contact_nom"/><label for="contact_nom">NAME</label></p>
				<p class="input_wrapper"><input type="text" name="contact_email"  id ="contact_email"/><label for="contact_email">EMAIL</label></p>
				<p class="input_wrapper"><input type="text" name="contact_sujet" id ="contact_sujet"/><label for="contact_sujet">SUBJECT</label></p>
				<p class="textarea_wrapper"><textarea name="contact_message" id="contact_message"></textarea></p>
				<p class="submit_wrapper"><input type="submit" value="Send"/></p>			
			</form>
	</article>
</section>
    </Container>
  );
};

const Container = styled.main`
  min-width: 90vw;
  position: relative;
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction : column;
  text-align: center;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  margin-bottom : -2rem;


  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -10;
  }

  @media(min-width: 1000px) {
    margin-top: 5rem;
  }

  
  }
`;

export default Hire;
