<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  text?: string
}>()
</script>

<template>
  <div class="section-title">
    <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
    <h2>{{ title }}</h2>
    <p v-if="text">{{ text }}</p>
  </div>
</template>

<style scoped>
.section-title {
  max-width: 680px;
  margin-bottom: 34px;
}

.section-title h2 {
  margin-top: 0.55rem;
  color: var(--color-text);
  font-size: clamp(2rem, 4vw, 3.15rem);
  line-height: 1.05;
}

.section-title p {
  margin-top: 1rem;
  color: var(--color-text-muted);
  font-size: 1.05rem;
  line-height: 1.75;
}

@media (max-width: 560px) {
  .section-title {
    margin-bottom: 22px;
  }

  .section-title h2 {
    font-size: clamp(1.55rem, 7.8vw, 2.05rem);
    line-height: 1.08;
  }

  .section-title p {
    margin-top: 0.75rem;
    font-size: 0.92rem;
    line-height: 1.58;
  }
}
</style>
