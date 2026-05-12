<script setup lang="ts">
import type { Review } from '../../data/reviews'

defineProps<{
  review: Review
}>()
</script>

<template>
  <article class="review-card">
    <p class="review-card__quote">“{{ review.text }}”</p>
    <div>
      <strong>{{ review.name }}</strong>
      <span>{{ review.age }} лет</span>
    </div>
  </article>
</template>

<style scoped>
.review-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: 0 12px 34px rgba(89, 65, 67, 0.06);
  padding: 1.45rem;
}

.review-card__quote {
  color: var(--color-text);
  line-height: 1.7;
}

.review-card div {
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
