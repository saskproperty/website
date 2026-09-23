import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { CleaningServices } from '@/components/sections/CleaningServices';
import { LoyaltyOffer } from '@/components/sections/LoyaltyOffer';
import { CustomerProtection } from '@/components/sections/CustomerProtection';
import { LawnCare } from '@/components/sections/LawnCare';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Residential, Commercial } from '@/components/sections/ResidentialCommercial';
import { PaymentOptions } from '@/components/sections/PaymentOptions';
import { AboutUs } from '@/components/sections/AboutUs';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <CleaningServices />
        <LoyaltyOffer />
        <CustomerProtection />
        <LawnCare />
        <WhyChooseUs />
        <Residential />
        <Commercial />
        <PaymentOptions />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
