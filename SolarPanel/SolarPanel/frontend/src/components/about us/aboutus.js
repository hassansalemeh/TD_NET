import React from 'react';
import './aboutus.css'
import { TeamData, usjData } from "./data";
import TeamCard from "./team-card";
import Aboutimage from '../../images/about-us.png'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  

const AboutUs = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="about-us-container">
      <div className='head'>
        <img src={Aboutimage} alt="About us image" />
        <div>
          <h2>About US</h2>
          <p>
            Welcome to Solar Wave, where the power of community and sustainability converge! 
            Where the power of community and sustainability converge! We believe in harnessing the potential of renewable energy sources, creating a platform that allows individuals to share surplus electricity generated by their solar panels with others in the community.
          </p>
        </div>
      </div> 
      
      <div className='accordion'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor: '#FFC857', color: 'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FFFF' }}/>}
          aria-controls="panel1bh-content"
          id="panel1"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>
            Our Vision
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          At Solar Wave, we envision a world where every individual plays a role in shaping a more sustainable future. 
          By connecting local producers and consumers of clean energy, we strive to create a community-driven marketplace that reduces our collective carbon footprint and fosters a sense of shared responsibility for the environment.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ backgroundColor: '#FFC857', color: 'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FFFF' }} />}
          aria-controls="panel2bh-content"
          id="panel2"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>How It Works</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="seller-container">
            <h4>For Sellers</h4>
            <p>
              If you're a solar panel owner with excess electricity, Solar Wave provides you with the opportunity to turn your surplus energy into a valuable resource. Simply create a profile, list the amount of electricity available, and set your selling preferences. Your fellow community members can then discover and purchase your clean energy, contributing to a more sustainable and interconnected neighborhood.
            </p>
          </div>

          <div className="buyer-container">
            <h4>For Buyers</h4>
            <p>
              Looking for a reliable and eco-friendly energy source? Solar Wave makes it easy for you to find local sellers in your city. Explore the available listings, compare options, and connect with sellers who can provide you with the clean energy you need. Take a step towards reducing your environmental impact and supporting the transition to renewable energy.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ backgroundColor: '#FFC857', color: 'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FFFF' }} />}
          aria-controls="panel3bh-content"
          id="panel3"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>
            Why Choose Solar Wave
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>
                <b>Localized Sustainability:</b> We prioritize community connections, allowing you to support local renewable energy producers and reduce transmission losses associated with long-distance energy transport.
              </li>
              <li>
                <b>Transparent Transactions:</b> Our platform ensures transparent and secure transactions between buyers and sellers, making the process of buying and selling clean energy straightforward and trustworthy.
              </li>
              <li>
                <b>Environmental Impact:</b> By participating in Solar Wave, you contribute to a greener planet by promoting the use of renewable energy and reducing reliance on traditional power sources.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>

      <p style={{ textAlign: 'center' }}>
        Join Solar Wave today and be part of a sustainable energy revolution. Together, we can create a future powered by clean, community-driven energy solutions.
      </p>

      <div>
        <div className="separator"></div>
        <div className="team-intro-container">
            <h1 className="team-title">Our Team</h1>
            <div className="team-members">
                {TeamData.map((member) => (
                    <TeamCard key={member.id} member={member} />
                ))}
            </div>
            
            <div className="usj-container">
            <img src={usjData.photo} alt="USJ Logo" />
            <p className="dr-description">This project was done by Saint Joseph University Engineering Students as a final Web project under the supervision of
                <span className="highlight"> Dr. Anthony Tannoury </span>.
            </p>
            </div>
        </div>
        </div>
    </div>
  );
};

export default AboutUs;