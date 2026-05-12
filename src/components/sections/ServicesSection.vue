<script setup lang="ts">
import { services } from '../../data/services'
import SectionTitle from '../ui/SectionTitle.vue'
import ServiceCard from '../ui/ServiceCard.vue'
</script>

<template>
  <section id="services" class="section section--muted services-section">
    <div class="container">
      <SectionTitle
        eyebrow="Прайс"
        title="Услуги"
        text="Прозрачная стоимость и спокойный темп работы: Алина закладывает достаточно времени на консультацию, подготовку и аккуратную проработку ресничного ряда."
      />
      <div class="services-section__grid">
        <ServiceCard v-for="service in services" :key="service.id" :service="service" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width: 980px) {
  .services-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
