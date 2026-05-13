<script setup lang="ts">
import type { Review } from '../../data/reviews'

defineProps<{
  review: Review
}>()
</script>

<template>
  <article class="review-card">
    <div class="review-card__stars" :aria-label="`Оценка ${review.rating} из 5`">
      <span v-for="star in 5" :key="star" :class="{ muted: star > review.rating }">★</span>
    </div>
    <p class="review-card__quote">“{{ review.text }}”</p>
    <div class="review-card__author">
      <strong>{{ review.name }}</strong>
      <span>{{ review.age }} лет</span>
    </div>
  </article>
</template>

<style scoped>
.review-card {
  min-height: 100%;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: 0 12px 34px rgba(89, 65, 67, 0.06);
  padding: 1.45rem;
}

.review-card__stars {
  display: flex;
  gap: 0.16rem;
  color: #d8a64f;
  font-size: 1.05rem;
  line-height: 1;
  margin-bottom: 0.9rem;
}

.review-card__stars .muted {
  color: var(--color-border);
}

.review-card__quote {
  color: var(--color-text);
  line-height: 1.7;
}

.review-card__author {
  display: flex;
  align-items: baseline;
  gap: 0.55rem;
  margin-top: 1.25rem;
}

.review-card strong {
  font-size: 1.08rem;
}

.review-card span {
  color: var(--color-text-muted);
  font-size: 0.92rem;
}
</style>
