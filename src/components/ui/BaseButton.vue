<script setup lang="ts">
interface Props {
  href?: string
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
}

withDefaults(defineProps<Props>(), {
  href: undefined,
  variant: 'primary',
  type: 'button',
})
</script>

<template>
  <a v-if="href" class="base-button" :class="`base-button--${variant}`" :href="href">
    <slot />
  </a>
  <button v-else class="base-button" :class="`base-button--${variant}`" :type="type">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 700;
  line-height: 1;
  max-width: 100%;
  min-width: 0;
  padding: 0.95rem 1.35rem;
  text-align: center;
  white-space: normal;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease,
    filter 0.2s ease;
}

.base-button:hover {
  transform: translateY(-2px);
}

.base-button--primary {
  color: #fff;
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  box-shadow:
    0 14px 28px rgba(143, 90, 104, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
}

.base-button--primary:hover {
  filter: saturate(1.06) brightness(1.02);
  box-shadow: 0 18px 34px rgba(143, 90, 104, 0.34);
}

.base-button--secondary {
  color: var(--color-primary-dark);
  background: rgba(255, 255, 255, 0.82);
  box-shadow:
    inset 0 0 0 1px var(--color-border),
    0 8px 20px rgba(83, 57, 61, 0.06);
}

.base-button--secondary:hover {
  background: #fff7f2;
}

@media (max-width: 520px) {
  .base-button {
    width: 100%;
  }
}
</style>
