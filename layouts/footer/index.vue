<script setup lang="ts">
import { Icon } from "@iconify/vue";
const currentYear = new Date().getFullYear();

const FooterLinks = ref([
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Blog", url: "/blog" },
  { title: "Work", url: "/projects" },
  { title: "Terms", url: "/terms-conditions" },
  { title: "Privacy Policy", url: "/privacy-policy" },
  // { title: "Error 404", url: "/error" },
]);

const SocialLinks = ref([
  { title: "Facebook", url: "https://www.facebook.com/weldon.kimutai.96/" },
  { title: "Instagram", url: "https://www.instagram.com/weldon_kym/" },
  { title: "Twitter", url: "https://x.com/kym_weldon" },
  { title: "LinkedIn", url: "https://www.linkedin.com/in/weldon-kimutai-380610173" },
]);
</script>

<template>
  <div class="bg-secondary">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="5">
          <div class="d-flex flex-column ga-10">
            <h2 class="text-h2 pe-lg-16">Build something together?</h2>
            <div class="d-flex flex-column ga-2">
              <NuxtLink
                href="mailto:outlinedesignsltd@gmail.com"
                class="d-flex ga-3 align-center text-white text-decoration-none hover-primary-link"
              >
                <Icon icon="material-symbols:arrow-outward" height="24" class="text-primary" />
                outlinedesignsltd@gmail.com
              </NuxtLink>

              <NuxtLink
                href="https://maps.app.goo.gl/hpDp81fqzGt5y4bC8"
                target="_blank"
                class="d-flex ga-3 align-center text-white text-decoration-none hover-primary-link"
              >
                <Icon icon="uil:map-marker" height="24" class="text-primary" />
                South Bend, Indiana, USA
              </NuxtLink>
            </div>
          </div>
        </v-col>

        <v-col cols="12" lg="2" md="4">
          <ul class="list-style-none d-flex flex-column ga-2">
            <li v-for="(item, i) in FooterLinks" :key="i">
              <NuxtLink
                :to="item.url"
                class="text-subtitle-1 text-white text-decoration-none hover-primary-link"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" lg="2" md="4">
          <ul class="list-style-none d-flex flex-column ga-2">
            <li v-for="(item, i) in SocialLinks" :key="i">
              <NuxtLink
                :to="item.url"
                target="_blank"
                class="text-subtitle-1 text-white text-decoration-none hover-primary-link"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" lg="3" md="4">
          <p class="text-subtitle-1 text-white text-lg-right text-left">
            © Outline {{ currentYear }}
          </p>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
    <ScrollToTop />
  </div>
</template>
