<script setup lang="ts">
import AppFooter from './components/layout/AppFooter.vue'
import AppHeader from './components/layout/AppHeader.vue'
import AboutSection from './components/sections/AboutSection.vue'
import BookingSection from './components/sections/BookingSection.vue'
import ContactsSection from './components/sections/ContactsSection.vue'
import GallerySection from './components/sections/GallerySection.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ReviewsSection from './components/sections/ReviewsSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <GallerySection />
    <BookingSection />
    <ReviewsSection />
    <ContactsSection />
  </main>
  <AppFooter />
</template>
