import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I am a freelance web designer and developer in UK and Nigeria. I have had the opportunity to work on a number of incredible projects that I am pleased to share. Not only do I enjoy showcasing my work, but also sharing details about the creative process behind each project. Feel free to browse through my portfolio, and get in touch if you have a project in mind that you’d like to explore together.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;