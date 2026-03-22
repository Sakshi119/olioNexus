// src/App.jsx
import Navbar      from './components/Navbar/Navbar';
import Hero        from './components/Hero/Hero';
import Trusted     from './components/Trusted/Trusted';
import Solutions   from './components/Solutions/Solutions';
import Industries  from './components/Industries/Industries';
import Process     from './components/Process/Process';
import Stats       from './components/Stats/Stats';
import Manifesto   from './components/Manifesto/Manifesto';
import CTA         from './components/CTA/CTA';
import Footer      from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Solutions />
      <Industries />
      <Process />
      <Stats />
      <Manifesto />
      <CTA />
      <Footer /> 
    </>
  );
}