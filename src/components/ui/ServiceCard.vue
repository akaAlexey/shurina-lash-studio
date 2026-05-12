<script setup lang="ts">
import type { Service } from '../../data/services'

defineProps<{
  service: Service
}>()
</script>

<template>
  <article class="service-card">
    <div>
      <p class="service-card__duration">{{ service.duration }}</p>
      <h3>{{ service.title }}</h3>
      <p class="service-card__description">{{ service.description }}</p>
    </div>
    <strong>{{ service.price }}</strong>
  </article>
</template>

<style scoped>
.service-card {
  display: flex;
  min-height: 230px;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 14px 38px rgba(89, 65, 67, 0.07);
  padding: 1.45rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: rgba(207, 143, 162, 0.46);
  box-shadow: var(--shadow-soft);
}

.service-card__duration {
  color: var(--color-primary-dark);
  font-size: 0.86rem;
  font-weight: 800;
}

.service-card h3 {
  margin-top: 0.55rem;
  font-size: 1.32rem;
  line-height: 1.2;
}

.service-card__description {
  margin-top: 0.8rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.service-card strong {
  margin-top: 1.3rem;
  font-size: 1.45rem;
}
</style>
