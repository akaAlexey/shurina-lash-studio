<script setup lang="ts">
import { computed } from 'vue'
import serviceNaturalClassic from '../../assets/images/services/service-natural-classic.webp'
import serviceProcess from '../../assets/images/services/service-process.webp'
import serviceSoft15d from '../../assets/images/services/service-soft-15d.webp'
import serviceVolume2d from '../../assets/images/services/service-volume-2d.webp'
import serviceWetEffect from '../../assets/images/services/service-wet-effect.webp'
import { services } from '../../data/services'
import SectionTitle from '../ui/SectionTitle.vue'
import ServiceCard from '../ui/ServiceCard.vue'

defineEmits<{
  book: [serviceId: string]
}>()

const popularService = computed(() => services.find((service) => service.popular))
const regularServices = computed(() => services.filter((service) => !service.popular))

const serviceDecorImages = [
  serviceNaturalClassic,
  serviceSoft15d,
  serviceVolume2d,
  serviceWetEffect,
  serviceProcess,
]
</script>

<template>
  <section id="services" class="section section--muted services-section">
    <div class="container">
      <SectionTitle
        eyebrow="Прайс"
        title="Услуги"
        text="Прозрачная стоимость и спокойный темп работы: Алина закладывает достаточно времени на консультацию, подготовку и аккуратную проработку ресничного ряда."
      />
      <div class="services-section__decor-strip" aria-hidden="true">
        <img v-for="image in serviceDecorImages" :key="image" :src="image" alt="" />
      </div>

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
.services-section {
  overflow: hidden;
}

.services-section .container {
  position: relative;
}

.services-section__featured {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  margin-bottom: 1.25rem;
}

.services-section :deep(.section-title) {
  position: relative;
  z-index: 1;
  margin-bottom: 26px;
}

.services-section__decor-strip {
  position: absolute;
  z-index: 0;
  top: 0.35rem;
  right: clamp(0.75rem, 3vw, 2rem);
  display: grid;
  grid-template-columns: repeat(3, 72px);
  gap: 0.55rem;
  pointer-events: none;
}

.services-section__decor-strip img {
  width: 72px;
  height: 72px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 18px;
  object-fit: cover;
  opacity: 0.62;
  box-shadow:
    0 16px 34px rgba(83, 57, 61, 0.12),
    0 0 0 1px rgba(143, 90, 104, 0.08);
}

.services-section__decor-strip img:nth-child(1) {
  transform: rotate(-7deg);
}

.services-section__decor-strip img:nth-child(2) {
  transform: translateY(0.8rem) rotate(5deg);
}

.services-section__decor-strip img:nth-child(3) {
  transform: translateY(-0.35rem) rotate(8deg);
}

.services-section__decor-strip img:nth-child(4) {
  transform: translate(1.1rem, -0.25rem) rotate(-4deg);
}

.services-section__decor-strip img:nth-child(5) {
  transform: translate(0.6rem, 0.8rem) rotate(6deg);
}

.services-section__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  align-items: stretch;
}

@media (max-width: 980px) {
  .services-section__decor-strip {
    position: relative;
    top: auto;
    right: auto;
    display: flex;
    justify-content: center;
    gap: 0.55rem;
    margin: -0.45rem 0 1rem;
  }

  .services-section__decor-strip img {
    width: clamp(48px, 8vw, 64px);
    height: clamp(48px, 8vw, 64px);
    border-radius: 15px;
    opacity: 0.72;
  }

  .services-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services-section {
    padding-top: 34px;
  }

  .services-section__featured {
    margin-bottom: 0.65rem;
  }

  .services-section__decor-strip {
    gap: 0.42rem;
    justify-content: flex-start;
    margin-bottom: 0.85rem;
  }

  .services-section__decor-strip img {
    width: clamp(42px, 13vw, 54px);
    height: clamp(42px, 13vw, 54px);
    border-radius: 13px;
  }

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
