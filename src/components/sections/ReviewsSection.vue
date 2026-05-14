<script setup lang="ts">
import { reviews } from '../../data/reviews'
import ReviewCard from '../ui/ReviewCard.vue'
import SectionTitle from '../ui/SectionTitle.vue'
</script>

<template>
  <section id="reviews" class="section reviews-section">
    <div class="container">
      <SectionTitle
        eyebrow="Отзывы"
        title="Что говорят клиентки"
        text="Клиентки чаще всего отмечают спокойную атмосферу, аккуратную посадку ресниц и бережный подбор эффекта."
      />
      <div class="reviews-section__grid">
        <ReviewCard v-for="review in reviews" :key="review.id" :review="review" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews-section__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 1060px) {
  .reviews-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .reviews-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }
}

</style>
