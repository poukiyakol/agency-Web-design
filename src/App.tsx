/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Services from './components/Services';
import TechFlex from './components/TechFlex';
import Portfolio from './components/Portfolio';
import Booking from './components/Booking';
import Process from './components/Process';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen selection:bg-neon-lime selection:text-charcoal scroll-smooth">
      <Hero />
      <Services />
      <TechFlex />
      <Portfolio />
      <Process />
      <Booking />
      <Footer />
    </main>
  );
}

