<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import weldon from "/images/team/weldon.png";
import judy from "/images/team/Judychesire.jpg";
import kevin from "/images/team/kevin.png";
import team1 from "/images/team/team-img-1.png";
import team2 from "/images/team/team-img-2.png";
import team3 from "/images/team/team-img-3.png";
import team4 from "/images/team/team-img-4.png";

const bruceImage = "https://i.pinimg.com/1200x/ab/59/00/ab590001e58933bdbd6ab0adbe25428c.jpg";

const items = [
  {
    name: "Kevin Yegon",
    role: "Architect",
    image: kevin,
    focalPoint: "center 25%"
  },
  {
    name: "Bruce",
    role: "Structural Engineer",
    image: bruceImage,
    focalPoint: "center 30%"
  },
  {
    name: "Judy",
    role: "Consultant",
    image: judy,
    focalPoint: "center 20%"
  },
  {
    name: "Weldon",
    role: "CEO",
    image: weldon,
    focalPoint: "center 25%"
  },
];

// Function to handle image loading errors
const handleImageError = (event: Event, itemName: string) => {
  console.warn(`Failed to load image for ${itemName}`);
  const target = event.target as HTMLImageElement;
  target.style.backgroundColor = '#f5f5f5';
};
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
        <v-col
          cols="12"
          sm="6"
          lg="3"
          v-for="item in items"
          :key="item.name"
          class="team-member-col"
        >
          <div class="our-team lh-0 position-relative">
            <img
              :src="item.image"
              :alt="item.name + ' photo'"
              :style="{
                objectPosition: item.focalPoint || 'center center'
              }"
              class="w-100 team-member-image"
              loading="lazy"
              @error="(e) => handleImageError(e, item.name)"
            />
            <div class="team-social d-flex ga-3 position-absolute">
              <v-avatar size="44" class="social-icon cursor-pointer">
                <Icon icon="garden:twitter-stroke-12" height="18" class="text-secondary" />
              </v-avatar>
              <v-avatar size="44" class="social-icon cursor-pointer">
                <Icon icon="simple-icons:instagram" height="18" class="text-secondary" />
              </v-avatar>
              <v-avatar size="44" class="social-icon cursor-pointer">
                <Icon icon="entypo-social:linkedin" height="18" class="text-secondary" />
              </v-avatar>
            </div>
            <div class="teambox"></div>
          </div>
          <div class="mt-5 team-info">
            <h4 class="text-h4 team-name">{{ item.name }}</h4>
            <p class="text-dark opacity-70 team-role">{{ item.role }}</p>
          </div>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </div>
</template>

<style scoped>
.our-team {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.team-member-image {
  height: clamp(300px, 40vw, 470px);
  object-fit: cover;
  width: 100%;
  display: block;
  transition: transform 0.3s ease;
}

.our-team:hover .team-member-image {
  transform: scale(1.05);
}

.team-social {
  bottom: 20px;
  left: 20px;
  z-index: 3;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.our-team:hover .team-social {
  opacity: 1;
  transform: translateY(0);
}

.social-icon {
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: white !important;
  transform: translateY(-2px);
}

.teambox {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.3));
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.our-team:hover .teambox {
  opacity: 1;
}

.team-info {
  text-align: center;
}

.team-name {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
}

.team-role {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .team-member-col {
    margin-bottom: 2rem;
  }

  .team-social {
    opacity: 1;
    transform: translateY(0);
  }

  .teambox {
    opacity: 1;
  }
}

/* Tablet responsiveness */
@media (max-width: 1024px) and (min-width: 769px) {
  .team-member-image {
    height: clamp(280px, 35vw, 400px);
  }
}

/* Ensure proper spacing on all devices */
.meet-team {
  padding: 0 1rem;
}

.container-lg {
  max-width: 1200px;
  margin: 0 auto;
}
</style>