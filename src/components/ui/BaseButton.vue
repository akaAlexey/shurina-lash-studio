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
  padding: 0.95rem 1.35rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.base-button:hover {
  transform: translateY(-2px);
}

.base-button--primary {
  color: #fff;
  background: var(--color-primary-dark);
  box-shadow: 0 12px 24px rgba(159, 95, 114, 0.24);
}

.base-button--primary:hover {
  background: #8f5263;
  box-shadow: 0 18px 34px rgba(159, 95, 114, 0.28);
}

.base-button--secondary {
  color: var(--color-primary-dark);
  background: var(--color-surface);
  box-shadow: inset 0 0 0 1px var(--color-border);
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
