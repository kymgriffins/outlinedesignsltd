<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import weldon from "/images/team/weldon.png";
import judy from "/images/team/judychesire.jpg";
import kevin from "/images/team/kevin.png";
// Use the new images from Amos and Sarah as team photos

const rowellImage = "https://i.pinimg.com/1200x/ab/59/00/ab590001e58933bdbd6ab0adbe25428c.jpg";

const items = [
  {
    name: "Kevin Yegon",
    role: "Architect",
    image: kevin,
    socials: {
      twitter: "https://twitter.com/kevin_yegon",
      instagram: "https://instagram.com/kevin.yegon",
      linkedin: "https://linkedin.com/in/kevin-yegon",
    },
  },
  {
    name: "Bruce",
    role: "Structural Engineer",
    image: rowellImage,
    socials: {
      twitter: "https://twitter.com/bruce_struct",
      instagram: "https://instagram.com/bruce.struct",
      linkedin: "https://linkedin.com/in/bruce-structural",
    },
  },
  {
    name: "Judy",
    role: "Consultant",
    image: judy,
    socials: {
      twitter: "https://twitter.com/judy_consult",
      instagram: "https://instagram.com/judy.consult",
      linkedin: "https://linkedin.com/in/judy-chesire",
    },
  },
  {
    name: "Weldon",
    role: "CEO",
    image: weldon,
    socials: {
      twitter: "https://x.com/kym_weldon",
      instagram: "https://www.instagram.com/weldon_kym/",
      linkedin: "https://www.linkedin.com/in/weldon-kimutai-380610173",
    },

  },
];
</script>

<template>
  <div class="meet-team bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <SharedLeftSideDarkHeading number="06" title="The team" />
        </v-col>
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-11">
            <SharedCommonHeading
              class="mw-670"
              title="Meet our team"
              subtitle="Our team is committed to redefining architectural and urban design through innovation, sustainability, and collaboration."
            />
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-lg-16 mt-8">
        <v-col cols="12" lg="3" md="6" v-for="item in items" :key="item.name">
          <div class="our-team lh-0 position-relative">
            <img
              :src="item.image"
              :alt="item.name + ' photo'"
              class="w-100 obj-cover"
              height="470"
            />
            <div class="team-social d-flex ga-3 position-absolute">
  <v-avatar size="44" class="social-icon cursor-pointer">
    <a :href="item.socials.twitter" target="_blank" rel="noopener noreferrer">
      <Icon icon="garden:twitter-stroke-12" height="18" class="text-secondary" />
    </a>
  </v-avatar>
  <v-avatar size="44" class="social-icon cursor-pointer">
    <a :href="item.socials.instagram" target="_blank" rel="noopener noreferrer">
      <Icon icon="simple-icons:instagram" height="18" class="text-secondary" />
    </a>
  </v-avatar>
  <v-avatar size="44" class="social-icon cursor-pointer">
    <a :href="item.socials.linkedin" target="_blank" rel="noopener noreferrer">
      <Icon icon="entypo-social:linkedin" height="18" class="text-secondary" />
    </a>
  </v-avatar>
</div>

            <div class="teambox"></div>
          </div>
          <div class="mt-5">
            <h4 class="text-h4">{{ item.name }}</h4>
            <p class="text-dark opacity-70">{{ item.role }}</p>
          </div>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </div>
</template>
