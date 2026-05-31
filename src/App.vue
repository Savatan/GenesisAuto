<script setup>
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ListingsSection from './components/ListingsSection.vue'
import WhyUsSection from './components/WhyUsSection.vue'
import HowWeWork from './components/HowWeWork.vue'
import FaqSection from './components/FaqSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import LeadForm from './components/LeadForm.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <main>
    <HeroSection />
    <ListingsSection />
    <WhyUsSection />
    <HowWeWork />
    <FaqSection />
    <ContactsSection />
    <LeadForm />
  </main>
  <TheFooter />
</template>
