<script setup>
import { ref } from "vue";
import { Icon } from '@iconify/vue';

const faqItems = ref([
  {
    question: "What architectural services do you specialize in?",
    answer:
      "Our expertise spans from sustainable residential and commercial design to historic preservation and adaptive reuse. We tailor solutions that blend innovation with context-sensitive architecture.",
  },
  {
    question: "How long does an architectural project typically take from concept to completion?",
    answer:
      "Project timelines vary depending on scale and complexity. Conceptual design can take weeks to months, while planning, approvals, and construction may extend the timeline. We maintain clear communication to manage expectations and ensure quality delivery.",
  },
  {
    question: "Do you create fully custom designs or offer design templates?",
    answer:
      "Every project is bespoke. We believe architecture should reflect each client’s unique needs, site conditions, and aspirations, so we do not use standard templates but craft tailored, site-responsible designs.",
  },
  {
    question: "What factors influence the cost of an architectural project?",
    answer:
      "Costs depend on project size, materials, technology integration, site conditions, and regulatory requirements. We provide transparent budgeting early, helping clients make informed decisions balancing vision and feasibility.",
  },
  {
    question: "Is ongoing support available after project completion?",
    answer:
      "Absolutely. We offer post-occupancy evaluations, maintenance planning, and can assist with future expansions or renovations to ensure your architectural investment remains vibrant and functional.",
  },
]);
</script>

<template>
  <div class="faq bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <SharedLeftSideDarkHeading number="08" title="FAQs" />
        </v-col>
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-11">
            <SharedCommonHeading
              class="mw-670"
              title="Frequently asked questions"
              subtitle="Explore how we navigate architectural challenges and deliver designs that inspire, innovate, and endure."
            />
          </div>

          <div class="mt-lg-16 mt-8">
            <v-expansion-panels
              variant="accordion"
              elevation="0"
              class="faq-panels"
            >
              <v-expansion-panel v-for="(item, i) in faqItems" :key="i">
                <v-expansion-panel-title
                  expand-icon="mdi-plus"
                  collapse-icon="mdi-close"
                  class="faq-title px-0 "
                >
                  <span class="text-h4">{{ item.question }}</span>
                </v-expansion-panel-title>

                <v-expansion-panel-text class="faq-text text-body-1 px-0">
                  {{ item.answer }}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </div>
</template>
