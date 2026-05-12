<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { services } from '../../data/services'
import { timeSlots } from '../../data/timeSlots'
import BookingCalendar from '../booking/BookingCalendar.vue'
import BookingForm from '../booking/BookingForm.vue'
import TimeSlotPicker from '../booking/TimeSlotPicker.vue'
import SectionTitle from '../ui/SectionTitle.vue'

interface BookingDate {
  value: string
  day: string
  weekday: string
}

const selectedDate = ref('')
const selectedTime = ref('')
const selectedService = ref('')
const name = ref('')
const phone = ref('')
const comment = ref('')
const isSuccess = ref(false)

const errors = reactive<Record<string, string>>({})

const dates = computed<BookingDate[]>(() => {
  const formatter = new Intl.DateTimeFormat('ru-RU', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date()
    date.setDate(date.getDate() + index)
    const parts = formatter.formatToParts(date)
    const weekday = parts.find((part) => part.type === 'weekday')?.value ?? ''
    const day = `${parts.find((part) => part.type === 'day')?.value ?? ''} ${
      parts.find((part) => part.type === 'month')?.value ?? ''
    }`

    return {
      value: date.toISOString().slice(0, 10),
      weekday,
      day,
    }
  })
})

function validate() {
  errors.service = selectedService.value ? '' : 'Выберите услугу'
  errors.date = selectedDate.value ? '' : 'Выберите дату'
  errors.time = selectedTime.value ? '' : 'Выберите время'
  errors.name = name.value.trim() ? '' : 'Введите имя'
  errors.phone = phone.value.trim() ? '' : 'Введите телефон'

  return Object.values(errors).every((error) => !error)
}

function submitBooking() {
  isSuccess.value = false

  if (!validate()) {
    return
  }

  isSuccess.value = true
}
</script>

<template>
  <section id="booking" class="section section--muted booking-section">
    <div class="container">
      <SectionTitle
        eyebrow="Онлайн-запись"
        title="Запись"
        text="Форма показывает типичный сценарий записи для коммерческого beauty-сайта. В этой demo-версии данные остаются только на странице."
      />

      <div class="booking-section__panel">
        <div class="booking-section__step">
          <div class="booking-section__step-title">
            <span>1</span>
            <h3>Выберите дату</h3>
          </div>
          <BookingCalendar v-model="selectedDate" :dates="dates" />
          <small v-if="errors.date">{{ errors.date }}</small>
        </div>

        <div class="booking-section__step">
          <div class="booking-section__step-title">
            <span>2</span>
            <h3>Выберите время</h3>
          </div>
          <TimeSlotPicker v-model="selectedTime" :slots="timeSlots" />
          <small v-if="errors.time">{{ errors.time }}</small>
        </div>

        <div class="booking-section__step">
          <div class="booking-section__step-title">
            <span>3</span>
            <h3>Контакты</h3>
          </div>
          <BookingForm
            v-model:selected-service="selectedService"
            v-model:name="name"
            v-model:phone="phone"
            v-model:comment="comment"
            :services="services"
            :errors="errors"
            @submit="submitBooking"
          />
        </div>

        <div v-if="isSuccess" class="booking-section__success" role="status">
          <strong>Спасибо! Заявка создана.</strong>
          <p>
            Это демо-форма: данные никуда не отправляются. В реальном проекте здесь можно
            подключить Telegram-бота, CRM или Google Sheets.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.booking-section__panel {
  display: grid;
  gap: 1.4rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--shadow-soft);
  padding: clamp(1rem, 3vw, 2rem);
}

.booking-section__step {
  display: grid;
  gap: 0.9rem;
}

.booking-section__step-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.booking-section__step-title span {
  display: inline-flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--color-primary-dark);
  color: #fff;
  font-weight: 800;
}

.booking-section__step-title h3 {
  font-size: 1.25rem;
}

.booking-section small {
  color: #a74350;
  font-weight: 700;
}

.booking-section__success {
  border-radius: var(--radius-lg);
  background: #f3fff7;
  color: #245c38;
  padding: 1.1rem 1.25rem;
}

.booking-section__success p {
  margin-top: 0.35rem;
  line-height: 1.6;
}
</style>
