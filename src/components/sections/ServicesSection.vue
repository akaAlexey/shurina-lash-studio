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
      <div class="services-section__decor-cloud" aria-hidden="true">
        <span
          v-for="(image, index) in serviceDecorImages"
          :key="image"
          class="services-section__decor-item"
          :class="`services-section__decor-item--${index + 1}`"
        >
          <img :src="image" alt="" />
        </span>
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

.services-section__decor-cloud {
  position: absolute;
  z-index: 0;
  inset: 0;
  pointer-events: none;
}

.services-section__decor-item {
  position: absolute;
  display: block;
  width: clamp(84px, 7.8vw, 116px);
  aspect-ratio: 1;
  border: 2px solid rgba(255, 255, 255, 0.82);
  border-radius: 22px;
  background: rgba(255, 248, 244, 0.5);
  box-shadow:
    0 18px 36px rgba(83, 57, 61, 0.16),
    0 0 0 1px rgba(143, 90, 104, 0.12);
  opacity: 0.84;
  overflow: hidden;
}

.services-section__decor-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.services-section__decor-item--1 {
  top: 0.25rem;
  right: 17.5rem;
  transform: rotate(-8deg);
}

.services-section__decor-item--2 {
  top: 4.7rem;
  right: 8.8rem;
  transform: rotate(6deg);
}

.services-section__decor-item--3 {
  top: 1.25rem;
  right: 0.75rem;
  transform: rotate(10deg);
}

.services-section__decor-item--4 {
  top: 12.3rem;
  left: clamp(0.5rem, 3vw, 2.2rem);
  width: clamp(76px, 7vw, 104px);
  transform: rotate(-5deg);
}

.services-section__decor-item--5 {
  top: 18.5rem;
  right: clamp(0.5rem, 3vw, 2rem);
  width: clamp(78px, 7.2vw, 108px);
  transform: rotate(7deg);
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
  .services-section__decor-cloud {
    position: relative;
    min-height: 104px;
    margin: -0.2rem 0 0.7rem;
  }

  .services-section__decor-item {
    position: absolute;
    top: auto;
    right: auto;
    left: auto;
    width: clamp(66px, 10vw, 88px);
    border-radius: 18px;
    opacity: 0.82;
  }

  .services-section__decor-item--1 {
    top: 0.6rem;
    left: 7%;
    transform: rotate(-8deg);
  }

  .services-section__decor-item--2 {
    top: 2.1rem;
    left: 24%;
    transform: rotate(5deg);
  }

  .services-section__decor-item--3 {
    top: 0;
    left: 43%;
    transform: rotate(7deg);
  }

  .services-section__decor-item--4 {
    top: 1.8rem;
    right: 22%;
    transform: rotate(-5deg);
  }

  .services-section__decor-item--5 {
    top: 0.75rem;
    right: 6%;
    transform: rotate(8deg);
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

  .services-section__decor-cloud {
    min-height: 92px;
    margin: -0.1rem 0 0.65rem;
  }

  .services-section__decor-item {
    width: clamp(52px, 15vw, 64px);
    border-radius: 15px;
    opacity: 0.86;
    box-shadow:
      0 12px 24px rgba(83, 57, 61, 0.14),
      0 0 0 1px rgba(143, 90, 104, 0.1);
  }

  .services-section__decor-item--1 {
    top: 0.55rem;
    left: 0;
  }

  .services-section__decor-item--2 {
    top: 2rem;
    left: 20%;
  }

  .services-section__decor-item--3 {
    top: 0.15rem;
    left: 42%;
  }

  .services-section__decor-item--4 {
    top: 1.9rem;
    right: 18%;
  }

  .services-section__decor-item--5 {
    top: 0.7rem;
    right: 0;
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
