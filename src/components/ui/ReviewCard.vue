<script setup lang="ts">
import type { Review } from '../../data/reviews'

defineProps<{
  review: Review
}>()
</script>

<template>
  <article class="review-card">
    <div class="review-card__meta">
      <strong>{{ review.name }}</strong>
      <time>{{ review.date }}</time>
    </div>
    <div class="review-card__rating" :aria-label="`Оценка ${review.rating} из 5`">
      <div class="review-card__stars" aria-hidden="true">
        <span v-for="star in 5" :key="star" :class="{ muted: star > review.rating }">★</span>
      </div>
      <span class="review-card__score">{{ review.rating }}</span>
    </div>
    <p class="review-card__quote">“{{ review.text }}”</p>
  </article>
</template>

<style scoped>
.review-card {
  min-height: 100%;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.66), rgba(255, 248, 244, 0.94)),
    var(--color-surface);
  box-shadow: 0 12px 30px rgba(89, 65, 67, 0.055);
  padding: 1.2rem;
}

.review-card__meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.65rem;
  margin-bottom: 0.55rem;
}

.review-card strong {
  color: var(--color-text);
  font-size: 1.02rem;
  line-height: 1.15;
}

.review-card time {
  flex: 0 0 auto;
  color: var(--color-text-muted);
  font-size: 0.78rem;
  line-height: 1.15;
  text-align: right;
}

.review-card__rating {
  display: flex;
  align-items: center;
  gap: 0.42rem;
  margin-bottom: 0.72rem;
}

.review-card__stars {
  display: flex;
  gap: 0.16rem;
  color: #f1b931;
  font-size: 1rem;
  line-height: 1;
  text-shadow: 0 1px 8px rgba(241, 185, 49, 0.22);
}

.review-card__stars .muted {
  color: var(--color-border);
}

.review-card__score {
  color: #a47b22;
  font-size: 0.82rem;
  font-weight: 800;
  line-height: 1;
}

.review-card__quote {
  color: var(--color-text);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.02rem;
  line-height: 1.52;
}

@media (max-width: 620px) {
  .review-card {
    border-radius: 18px;
    padding: 0.76rem;
  }

  .review-card__meta {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.35rem;
    margin-bottom: 0.42rem;
  }

  .review-card__stars {
    gap: 0.08rem;
    font-size: 0.78rem;
  }

  .review-card__rating {
    gap: 0.32rem;
    margin-bottom: 0.5rem;
  }

  .review-card__quote {
    font-size: 0.78rem;
    line-height: 1.36;
  }

  .review-card__score {
    font-size: 0.72rem;
  }

  .review-card strong {
    font-size: 0.82rem;
  }

  .review-card time {
    font-size: 0.54rem;
    white-space: nowrap;
  }
}

@media (max-width: 370px) {
  .review-card {
    padding: 0.62rem;
  }

  .review-card__meta {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.25rem;
  }

  .review-card time {
    text-align: right;
    font-size: 0.48rem;
  }

  .review-card__stars {
    font-size: 0.68rem;
  }

  .review-card__quote {
    font-size: 0.7rem;
    line-height: 1.32;
  }

  .review-card strong {
    font-size: 0.74rem;
  }
}
</style>
