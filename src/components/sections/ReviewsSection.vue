<script setup lang="ts">
import loungeClient from '../../assets/images/studio/lounge-client.png'
import { reviews } from '../../data/reviews'
import ReviewCard from '../ui/ReviewCard.vue'
import SectionTitle from '../ui/SectionTitle.vue'
</script>

<template>
  <section id="reviews" class="section reviews-section">
    <div class="container">
      <div class="reviews-section__intro">
        <SectionTitle
          eyebrow="Отзывы"
          title="Что говорят клиентки"
          text="Клиентки чаще всего отмечают спокойную атмосферу, аккуратную посадку ресниц и бережный подбор эффекта."
        />
        <figure class="reviews-section__visual">
          <img :src="loungeClient" alt="Уютная зона ожидания в студии" />
          <figcaption>Тёплый свет и спокойная пауза перед процедурой</figcaption>
        </figure>
      </div>
      <div class="reviews-section__grid">
        <ReviewCard v-for="review in reviews" :key="review.id" :review="review" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews-section__intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 360px);
  gap: clamp(1.25rem, 4vw, 2.2rem);
  align-items: end;
  margin-bottom: 1.5rem;
}

.reviews-section__intro :deep(.section-title) {
  margin-bottom: 0;
}

.reviews-section__visual {
  position: relative;
  overflow: hidden;
  min-width: 0;
  border: 1px solid rgba(234, 219, 211, 0.8);
  border-radius: var(--radius-lg);
  box-shadow: 0 18px 44px rgba(83, 57, 61, 0.12);
  aspect-ratio: 16 / 11;
  margin: 0;
}

.reviews-section__visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 58%;
  transform: scale(1.01);
}

.reviews-section__visual figcaption {
  position: absolute;
  left: 0.8rem;
  right: 0.8rem;
  bottom: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 999px;
  background: rgba(255, 248, 244, 0.78);
  backdrop-filter: blur(12px);
  color: var(--color-primary-dark);
  font-size: 0.78rem;
  font-weight: 800;
  padding: 0.55rem 0.7rem;
  text-align: center;
}

.reviews-section__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

@supports (animation-timeline: view()) {
  .reviews-section__visual img {
    animation: reviewsImageBreath both ease-out;
    animation-timeline: view();
    animation-range: entry 0% cover 64%;
  }
}

@keyframes reviewsImageBreath {
  from {
    transform: scale(0.985);
  }

  to {
    transform: scale(1.035);
  }
}

@media (max-width: 1060px) {
  .reviews-section__intro {
    grid-template-columns: minmax(0, 1fr) minmax(220px, 300px);
  }

  .reviews-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .reviews-section__intro {
    grid-template-columns: 1fr;
    gap: 0.9rem;
    margin-bottom: 1rem;
  }

  .reviews-section__visual {
    aspect-ratio: 16 / 8.5;
    border-radius: 20px;
  }

  .reviews-section__visual figcaption {
    left: 0.55rem;
    right: 0.55rem;
    bottom: 0.55rem;
    font-size: 0.68rem;
    padding: 0.42rem 0.55rem;
  }

  .reviews-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }
}

</style>
