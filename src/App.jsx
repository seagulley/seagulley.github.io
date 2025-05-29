import React from 'react';
import './App.css';
import ParallaxSection from './components/ParallaxSection';
import IntroSection from './components/IntroSection';
import ExperienceSection from './components/ExperienceSection';
import PersonalSection from './components/PersonalSection';
import karaokeImage from './assets/karaoke.jpg';
import floramaImage from './assets/florama.png'

function App() {
  return (
    <div className="app">
      <ParallaxSection imagePath={floramaImage} offset={13}>
        <IntroSection />
        <ExperienceSection />
        <PersonalSection />
      </ParallaxSection>

      
     
      {/* </ParallaxContainer>

      <ParallaxContainer
        backgroundImage="src/assets/florama.jpg"
        parallaxSpeed={-20}
      >
        <h2>Section 2</h2>
        <p>This is some content for the second section.</p>
      </ParallaxContainer> */}

      {/* Add more ParallaxContainer components as needed */}
    </div>
  );
}

export default App;
