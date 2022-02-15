import { SocialIcon } from 'react-social-icons';

const About = () => {
  return (
    <div className='about'>
        <img src="/images/ch.jpg"/>
        <SocialIcon url="https://twitter.com/ashanatayal"/>
        <SocialIcon url="https://www.linkedin.com/in/ashanatayal/"/>
        <SocialIcon url="https://www.facebook.com/ashana.tayal"/>
        <SocialIcon url="https://github.com/ashanatayal"/>
        <SocialIcon url="https://www.instagram.com/ashanatayal/"/>
        <h1>Hi! I am Ashana Tayal</h1>
        <i class="fa fa-envelope"></i> <>ashanatayal@gmail.com</>
        <p>Immigrant in Bay Area like many others. Trying to make the most out of life. 
          Like to learn, explore and code. Currenty learning React by building this portfolio.</p>
    </div>
  )
}

export default About