<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Quotes from "/images/svgs/quotes.svg";

const testimonials = [
  {
    quote:
      "Their architectural designs transformed my vision into reality with precision and elegance. Every detail was handled expertly.",
    name: "Amos Komen",
    company: "Komen Holdings",
    img: "https://assets.basehub.com/fa068a12/QK36F1HicnSJMvil7B8xv/13.png?width=64&quality=90&format=auto",
    rating: 5,
  },
  {
    quote:
      "Creative and professional from start to finish. Their team helped us achieve a sustainable design with innovative solutions.",
    name: "Rowell Egesa",
    company: "Egesa Urban Planning",
    img: "https://assets.basehub.com/fa068a12/QK36F1HicnSJMvil7B8xv/13.png?width=64&quality=90&format=auto",
    rating: 4,
  },
  {
    quote:
      "The collaboration was seamless, and the final design greatly enhanced our facility's functionality and aesthetic appeal.",
    name: "Dr. Sarah",
    company: "HealthFirst Clinic",
    img: "https://assets.basehub.com/fa068a12/uXVXN7g1Fc2EjO8OWn0HG/09.png?width=64&quality=90&format=auto",
    rating: 5,
  },
];
</script>

<template>
  <div class="stories bg-surface">
    <SharedSectionSpacer />
    <div class="container-lg">
      <!-- Header Section -->
      <v-row class="align-start">
        <!-- Left Side - Title -->
        <v-col cols="12" md="4" class="position-relative">
          <SharedLeftSideDarkHeading number="05" title="Testimonial" />
        </v-col>

        <!-- Right Side - Description -->
        <v-col cols="12" md="8">
          <div class="d-flex flex-column ga-8">
            <SharedCommonHeading
              class="mw-670"
              title="Stories from clients"
              subtitle="Real experiences, genuine feedback—discover how our architectural expertise has shaped inspiring spaces and satisfied clients."
            />
          </div>
        </v-col>
      </v-row>

      <!-- Testimonials Grid - All Equal Size -->
      <v-row class="mt-md-16 mt-8">
        <v-col
          v-for="(testimonial, index) in testimonials"
          :key="index"
          cols="12"
          md="4"
          class="d-flex"
        >
          <v-card
            :class="[
              'testimonial-card pa-6 d-flex flex-column h-100 justify-space-between rounded-lg elevation-2',
              testimonial.name === 'Rowell Egesa' ? 'bg-secondary' :
              testimonial.name === 'Dr. Sarah' ? 'bg-accent' : 'bg-primary'
            ]"
            flat
          >
            <!-- Content Section -->
            <div class="d-flex flex-column ga-6">
              <p
                :class="{
                  'text-secondary opacity-70 font-weight-regular text-caption':
                    testimonial.name !== 'Rowell Egesa',
                  'text-white opacity-70 font-weight-regular text-caption':
                    testimonial.name === 'Rowell Egesa',
                }"
              >
                Hear from them
              </p>
              <h4
                :class="{
                  'text-h6 text-md-h5': true,
                  'text-white': testimonial.name === 'Rowell Egesa',
                  'text-dark': testimonial.name !== 'Rowell Egesa',
                }"
              >
                {{ testimonial.quote }}
              </h4>
            </div>

            <!-- Footer Section -->
            <div class="pt-8">
              <div class="d-flex ga-4 align-center justify-space-between">
                <!-- Avatar and Info -->
                <div class="d-flex ga-4 align-center">
                  <v-avatar size="56">
                    <img
                      :src="testimonial.img"
                      :alt="`${testimonial.name} profile`"
                      class="w-100 rounded-circle"
                    />
                  </v-avatar>
                  <div>
                    <h5
                      :class="{
                        'text-subtitle-1 font-weight-medium': true,
                        'text-white': testimonial.name === 'Rowell Egesa',
                        'text-dark': testimonial.name !== 'Rowell Egesa',
                      }"
                    >
                      {{ testimonial.name }}
                    </h5>
                    <p
                      :class="{
                        'text-caption opacity-70': testimonial.name !== 'Rowell Egesa',
                        'text-white opacity-70 text-caption': testimonial.name === 'Rowell Egesa',
                      }"
                    >
                      {{ testimonial.company }}
                    </p>
                  </div>
                </div>

                <!-- Rating for all testimonials -->
                <div class="d-flex ga-1 align-center ms-4">
                  <Icon
                    v-for="i in testimonial.rating"
                    :key="i"
                    icon="solar:star-bold"
                    :class="testimonial.name === 'Rowell Egesa' ? 'text-white' : 'text-secondary'"
                    height="16"
                  />
                  <Icon
                    v-for="i in (5 - testimonial.rating)"
                    :key="'empty-' + i"
                    icon="solar:star-linear"
                    :class="testimonial.name === 'Rowell Egesa' ? 'text-white' : 'text-secondary'"
                    height="16"
                  />
                  <span
                    :class="{
                      'text-caption ms-2': true,
                      'text-white': testimonial.name === 'Rowell Egesa',
                      'text-dark': testimonial.name !== 'Rowell Egesa',
                    }"
                  >
                    {{ testimonial.rating }}.0
                  </span>
                </div>
              </div>

              <!-- Quotes Icon for all testimonials -->
              <div class="mt-6">
                <img
                  :src="Quotes"
                  alt="quote icon"
                  height="32"
                  width="40"
                  :class="testimonial.name === 'Rowell Egesa' ? 'filter-white' : 'filter-dark'"
                />
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </div>
</template>

<style scoped>
.stories {
  width: 100%;
}

.mw-670 {
  max-width: 670px;
}

.testimonial-card {
  min-height: 320px;
}

.filter-white {
  filter: brightness(0) invert(1);
}

.filter-dark {
  filter: brightness(0) saturate(100%);
}

/* Responsive adjustments */
@media (max-width: 959px) {
  .container-lg {
    padding: 0 16px;
  }

  .pa-6 {
    padding: 24px !important;
  }

  .testimonial-card {
    min-height: 300px;
  }
}

@media (max-width: 599px) {
  .pa-6 {
    padding: 20px !important;
  }

  .text-h6 {
    font-size: 1.1rem !important;
    line-height: 1.4;
  }

  .testimonial-card {
    min-height: 280px;
  }
}
</style>