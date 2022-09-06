import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding> 
  <LeftSection>
    <SectionTitle main center>
     Layla Ventilari 
    </SectionTitle>
    <SectionText>
    I have a degree in Literature-English, with a strong appreciation for Linguistics. In the course completion surveys, at the end of 2021, I met Deep Learning and fell in love with the area, especially Natural Language Processing.
    This fascination resulted in the full dedication of knowledge of web development. 
    
    </SectionText>
    <Button onClick = {() => window.location ='https://google.com'}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;