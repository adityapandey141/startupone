import Hero from '@/components/Hero';
import VideoTestimonials from '@/components/VideoTestimonials';
import LocalFunding from '@/components/LocalFunding';
import FundingTypes from '@/components/FundingTypes';
import GradientCTA from '@/components/GradientCTA';
import Eligibility from '@/components/Eligibility';
import FiveStepJourney from '@/components/FiveStepJourney';
import FundingSchemes from '@/components/FundingSchemes';
import StartupSeedFund from '@/components/StartupSeedFund';
import StatsStrip from '@/components/StatsStrip';
import WhatYouGet from '@/components/WhatYouGet';
import FundingLifecycle from '@/components/FundingLifecycle';
import DPIITBanner from '@/components/DPIITBanner';
import SixReasons from '@/components/SixReasons';
import ContactCTA from '@/components/ContactCTA';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <VideoTestimonials />
      <LocalFunding />
      <FundingTypes />
      <GradientCTA />
      <Eligibility />
      <FiveStepJourney />
      <FundingSchemes />
      <StartupSeedFund />
      <StatsStrip />
      <WhatYouGet />
      <FundingLifecycle />
      <DPIITBanner />
      <SixReasons />
      <ContactCTA />
      <Newsletter />
    </main>
  );
}
