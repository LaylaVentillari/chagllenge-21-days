import BackgroundImage from '../components/BackgrooundAnimation/BackgroundImage';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundImage';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
       <BackgroundImage/>
      </Section> 
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;
