import Header from './_components/header';
import Hero from './_components/hero';

import ParticlesBackground from '@/components/particles-background';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticlesBackground />

      <div id="landing-page" className="relative z-10">
        <Header />
        <Hero />
      </div>

      {/* <div id='landing-page-bg' className='absolute z-11 w-screen h-screen'></div> */}
    </div>
  );
}
