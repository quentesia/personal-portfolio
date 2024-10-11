import React from 'react'
import { Card, Container } from 'react-bootstrap'
import './home.css'
import akash from '../../assets/akash1.jpeg'
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa'; 


function Home() {
  const name = "Hello, my name is";
  
  return (
    <Container className="hello-container">
        <Card className='bg-transparent border-0'>
            <Card.Body>
                <h4>
                    {name.split('').map((letter, index) => (
                        <span key={index} className="fly-in" style={{ animationDelay: `${index * 0.05}s` }}>
                            {letter === ' ' ? '\u00A0' : letter} 
                        </span>
                    ))}
                </h4>
                <h1>
                    <span className="emphasize animate-emphasize">Akash Bhat.</span>
                </h1>
                <p> I am Akash Bhat, a Computer Science and Data Science professional based in Madison, WI. With a solid foundation in programming and data analysis, I have developed practical solutions through internships and personal projects. My experience includes enhancing customer feedback systems with natural language processing at Numberz.ai and mentoring peers in advanced programming concepts. I am passionate about creating innovative applications that leverage technology to solve real-world problems, and I continuously seek opportunities to expand my skills in software development and data science. </p>
                <div className="social-icons">
                    <a href="https://github.com/quentesia" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/akashbhat1" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={25} />
                    </a>
                    <a href="https://discordapp.com/users/zoro9997" target="_blank" rel="noopener noreferrer">
                        <FaDiscord size={25} />
                    </a>
                    <a href="mailto:aabhat@wisc.edu">
                        <FaEnvelope size={25} />
                    </a>
                </div>
            </Card.Body>
        </Card>
        <img src={akash} alt="Akash" className="akash-image" />
    </Container>
  )
}

export default Home