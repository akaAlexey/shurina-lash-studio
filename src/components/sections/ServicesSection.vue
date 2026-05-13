<script setup lang="ts">
import { computed } from 'vue'
import { services } from '../../data/services'
import SectionTitle from '../ui/SectionTitle.vue'
import ServiceCard from '../ui/ServiceCard.vue'

defineEmits<{
  book: [serviceId: string]
}>()

const popularService = computed(() => services.find((service) => service.popular))
const regularServices = computed(() => services.filter((service) => !service.popular))
</script>

<template>
  <section id="services" class="section section--muted services-section">
    <div class="container">
      <SectionTitle
        eyebrow="Прайс"
        title="Услуги"
        text="Прозрачная стоимость и спокойный темп работы: Алина закладывает достаточно времени на консультацию, подготовку и аккуратную проработку ресничного ряда."
      />

      <div v-if="popularService" class="services-section__featured">
        <ServiceCard :service="popularService" featured @book="$emit('book', $event)" />
      </div>

      <div class="services-section__grid">
        <ServiceCard
          v-for="service in regularServices"
          :key="service.id"
          :service="service"
          @book="$emit('book', $event)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section__featured {
  display: grid;
  justify-items: center;
  margin-bottom: 1.25rem;
}

.services-section :deep(.section-title) {
  margin-bottom: 26px;
}

.services-section__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  align-items: stretch;
}

@media (max-width: 640px) {
  .services-section {
    padding-top: 34px;
  }

  .services-section__featured {
    margin-bottom: 0.65rem;
  }
}

@media (max-width: 980px) {
  .services-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }
}

@media (max-width: 360px) {
  .services-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
