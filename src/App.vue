<script setup lang="ts">
import { ref } from 'vue'
import AppFooter from './components/layout/AppFooter.vue'
import AppHeader from './components/layout/AppHeader.vue'
import AboutSection from './components/sections/AboutSection.vue'
import BookingSection from './components/sections/BookingSection.vue'
import ContactsSection from './components/sections/ContactsSection.vue'
import GallerySection from './components/sections/GallerySection.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ReviewsSection from './components/sections/ReviewsSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'

const isBookingOpen = ref(false)
const bookingServiceId = ref('')

function openBooking(serviceId = '') {
  bookingServiceId.value = serviceId
  isBookingOpen.value = true
}
</script>

<template>
  <AppHeader @book="openBooking()" />
  <main>
    <HeroSection @book="openBooking()" />
    <AboutSection />
    <ServicesSection @book="openBooking" />
    <GallerySection @book="openBooking" />
    <BookingSection
      :is-open="isBookingOpen"
      :initial-service-id="bookingServiceId"
      @close="isBookingOpen = false"
    />
    <ReviewsSection />
    <ContactsSection />
  </main>
  <AppFooter />
</template>
