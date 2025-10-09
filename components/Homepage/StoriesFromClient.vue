<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Quotes from "/images/svgs/quotes.svg";

// Updated testimonial avatar image URLs as requested
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
      "The collaboration was seamless, and the final design greatly enhanced our facility’s functionality and aesthetic appeal.",
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
      <v-row>
        <!-- LEFT SIDE IMAGE -->
        <v-col cols="12" lg="4" class="position-relative">
          <SharedLeftSideDarkHeading number="05" title="Testimonial" />
        </v-col>

        <!-- RIGHT SIDE TEXT LIST -->
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-11">
            <SharedCommonHeading
              class="mw-670"
              title="Stories from clients"
              subtitle="Real experiences, genuine feedback—discover how our architectural expertise has shaped inspiring spaces and satisfied clients."
            />
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-md-16 mt-8">
        <v-col
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :cols="testimonial.name === 'Rowell Egesa' ? 6 : 3"
          class="d-flex"
        >
          <div
            :class="[
              testimonial.name === 'Rowell Egesa'
                ? 'here-from bg-secondary'
                : testimonial.name === 'Dr. Sarah'
                ? 'bg-accent'
                : 'bg-primary',
              'pa-7 d-flex flex-column h-100 justify-space-between',
            ]"
          >
            <div class="d-flex flex-column ga-6">
              <p
                :class="{
                  'text-secondary opacity-70 font-weight-regular':
                    testimonial.name !== 'Rowell Egesa',
                  'text-white opacity-70 font-weight-regular':
                    testimonial.name === 'Rowell Egesa',
                }"
              >
                Hear from them
              </p>
              <h4
                :class="{
                  'text-h4': true,
                  'text-white': testimonial.name === 'Rowell Egesa',
                  'text-dark': testimonial.name !== 'Rowell Egesa',
                }"
              >
                {{ testimonial.quote }}
              </h4>
            </div>

            <div class="pt-12">
              <div
                :class="{
                  'd-flex ga-4 align-center': true,
                  'justify-space-between': testimonial.name === 'Rowell Egesa',
                }"
              >
                <v-avatar size="60">
                  <img :src="testimonial.img" alt="profile" class="w-100" />
                </v-avatar>
                <div>
                  <h5
                    :class="{
                      'text-subtitle-1': true,
                      'text-white': testimonial.name === 'Rowell Egesa',
                      'text-dark': testimonial.name !== 'Rowell Egesa',
                    }"
                  >
                    {{ testimonial.name }}
                  </h5>
                  <p
                    :class="{
                      'text-subtitle-2 opacity-70':
                        testimonial.name !== 'Rowell Egesa',
                      'text-white opacity-70':
                        testimonial.name === 'Rowell Egesa',
                    }"
                  >
                    {{ testimonial.company }}
                  </p>
                </div>

                <!-- Show Rating only for Rowell Egesa as example -->
                <template v-if="testimonial.name === 'Rowell Egesa'">
                  <div class="d-flex ga-2 ms-4 align-center">
                    <Icon
                      v-for="i in 4"
                      :key="i"
                      icon="solar:star-bold"
                      class="text-white"
                      height="18"
                    />
                    <Icon
                      icon="solar:star-linear"
                      class="text-white"
                      height="18"
                    />
                    <span class="text-subtitle-2 text-white ms-2">4.0</span>
                  </div>
                </template>
              </div>
              <template v-if="testimonial.name === 'Rowell Egesa'">
                <div class="mt-6">
                  <img :src="Quotes" alt="quote icon" height="35" width="45" />
                </div>
              </template>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </div>
</template>
