import { NavBar, Hero, WhyChooseUs, Plans, Testimonies ,Footer } from './components/';
import './globals.css';

export default function Home() {
  return (
    <div className='container__home'>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <WhyChooseUs />
        <Plans />
        <Testimonies />
      </main>
      <Footer />
    </div>
  );
}
