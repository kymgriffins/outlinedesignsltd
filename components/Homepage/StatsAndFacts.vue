<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";
import BgImageWhite from "/images/background/bg-astrisk-icon-white.png";
import BgImage from "/images/background/bg-astrisk-icon.png";

interface CounterItem {
  value: number;
  suffix: string;
  caption: string;
}

const items = ref<CounterItem[]>([
  {
    value: 15,
    suffix: "+",
    caption: "Projects progressing from concept to completion",
  },
  {
    value: 7,
    suffix: "",
    caption: "Skilled architects and engineers collaborating",
  },
  {
    value: 80,
    suffix: "+",
    caption: "Design consultations and site analyses conducted",
  },
]);

// Animated counter values initialized at 0
const animatedValues = ref<number[]>(items.value.map(() => 0));

onMounted(() => {
  items.value.forEach((item, index) => {
    animateCounter(item.value, index);
  });
});

function animateCounter(target: number, index: number) {
  const duration = 2000; // total animation time in ms
  const frameDuration = 1000 / 60; // ~60 frames per second
  const totalFrames = Math.round(duration / frameDuration);
  let frame = 0;

  const counterInterval = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    const current = Math.floor(target * progress);
    animatedValues.value[index] = current;

    if (frame === totalFrames) {
      animatedValues.value[index] = target; // final value
      clearInterval(counterInterval);
    }
  }, frameDuration);
}

function formatNumber(value: number, suffix: string) {
  if (suffix === "+") {
    return `${value}+`;
  } else if (suffix === "K") {
    return `${Math.floor(value / 1000)}K`;
  } else if (suffix === "M") {
    const millions = value / 1_000_000;
    return Number.isInteger(millions)
      ? `${millions}M`
      : `${millions.toFixed(1)}M`;
  } else {
    return `${value}`;
  }
}
</script>

<template>
  <div class="position-relative bg-surface overflow-hidden">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <SharedLeftSideDarkHeading number="01" title="Stats & facts" />
        </v-col>
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-11">
            <SharedCommonHeading
              class="mw-md-575"
              title="Expert architectural services you can trust."
              subtitle="Our team combines creativity, technical expertise, and project management skills to bring your architectural vision to life."
            />

            <div class="d-flex flex-sm-row flex-column ga-8">
              <div
                class="d-flex flex-column ga-3 flex-grow-1 border-t"
                v-for="(item, index) in items"
                :key="index"
              >
                <h3 class="text-60 text-dark pt-6">
                  {{ formatNumber(animatedValues[index], item.suffix) }}
                </h3>
                <p class="text-subtitle-2 text-dark opacity-70 font-weight-regular">
                  {{ item.caption }}
                </p>
              </div>
            </div>

            <v-btn class="interactive-button" to="/about" size="lg" flat>
              <span class="label">Who we are</span>
              <v-avatar size="45" class="icon bg-white">
                <Icon icon="material-symbols:arrow-outward" height="20" />
              </v-avatar>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>

    <img :src="BgImage" alt="icon" class="bg-icon d-md-block d-none" />
    <img :src="BgImageWhite" alt="icon" class="bg-icon d-md-block d-none" />

    <SharedSectionSpacer />
  </div>
</template>
