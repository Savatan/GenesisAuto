<script setup>
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ListingsSection from './components/ListingsSection.vue'
import WhyUsSection from './components/WhyUsSection.vue'
import AdvantagesSection from './components/AdvantagesSection.vue'
import HowWeWork from './components/HowWeWork.vue'
import GeographySection from './components/GeographySection.vue'
import FaqSection from './components/FaqSection.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import CtaSection from './components/CtaSection.vue'
import UtilFeeSection from './components/UtilFeeSection.vue'
import TheFooter from './components/TheFooter.vue'
import LeadModal from './components/LeadModal.vue'
</script>

<template>
  <TheHeader />
  <main>
    <HeroSection />
    <ListingsSection />
    <WhyUsSection />
    <AdvantagesSection />
    <HowWeWork />
    <GeographySection />
    <FaqSection />
    <UtilFeeSection />
    <ReviewsSection />
    <ContactsSection />
    <CtaSection />
  </main>
  <TheFooter />
  <LeadModal />
</template>
