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
        text="Отзывы вымышлены и нужны только для демонстрации интерфейса портфолио-проекта."
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
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

@media (max-width: 1060px) {
  .reviews-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 620px) {
  .reviews-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
