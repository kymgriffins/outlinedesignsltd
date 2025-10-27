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
    twitter: "https://twitter.com/kevinyegon",
    instagram: "https://instagram.com/kevinyegon",
    linkedin: "https://linkedin.com/in/kevinyegon"
  },
  {
    name: "Bruce",
    role: "Structural Engineer",
    image: bruceImage,
    twitter: "https://twitter.com/bruce",
    instagram: "https://instagram.com/bruce",
    linkedin: "https://linkedin.com/in/bruce"
  },
  {
    name: "Judy",
    role: "Consultant",
    image: judy,
    twitter: "https://twitter.com/judy",
    instagram: "https://instagram.com/judy",
    linkedin: "https://linkedin.com/in/judy"
  },
  {
    name: "Weldon",
    role: "CEO",
    image: weldon,
    twitter: "https://twitter.com/weldon",
    instagram: "https://instagram.com/weldon",
    linkedin: "https://linkedin.com/in/weldon"
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
            <div class="image-container">
              <img
                :src="item.image"
                :alt="item.name + ' photo'"
                class="team-member-image"
                loading="lazy"
                @error="(e) => handleImageError(e, item.name)"
              />
            </div>
            <div class="team-social d-flex ga-3 position-absolute">
              <a :href="item.twitter" target="_blank" rel="noopener noreferrer" class="social-link">
                <v-avatar size="44" class="social-icon cursor-pointer">
                  <Icon icon="garden:twitter-stroke-12" height="18" class="text-secondary" />
                </v-avatar>
              </a>
              <a :href="item.instagram" target="_blank" rel="noopener noreferrer" class="social-link">
                <v-avatar size="44" class="social-icon cursor-pointer">
                  <Icon icon="simple-icons:instagram" height="18" class="text-secondary" />
                </v-avatar>
              </a>
              <a :href="item.linkedin" target="_blank" rel="noopener noreferrer" class="social-link">
                <v-avatar size="44" class="social-icon cursor-pointer">
                  <Icon icon="entypo-social:linkedin" height="18" class="text-secondary" />
                </v-avatar>
              </a>
            </div>
            <div class="teambox"></div>
          </div>
          <div class="mt-5 team-info">
            <h4 class="text-h4 team-name">{{ item.name }}</h4>
            <p class="team-role">{{ item.role }}</p>
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
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Updated image container with white background */
.image-container {
  width: 100%;
  height: clamp(300px, 40vw, 470px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  overflow: hidden;
  padding: 16px;
}

.team-member-image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.our-team:hover .team-member-image {
  transform: scale(1.03);
  transition: transform 0.3s ease;
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

.social-link {
  text-decoration: none;
  display: inline-block;
}

.social-icon {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.teambox {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.2));
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
  color: rgb(var(--v-theme-dark));
  font-weight: 600;
}

.team-role {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: rgb(var(--v-theme-dark));
  opacity: 0.7;
  margin: 0;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .team-member-col {
    margin-bottom: 2rem;
  }

  .image-container {
    height: clamp(280px, 50vw, 400px);
    padding: 12px;
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
  .image-container {
    height: clamp(280px, 35vw, 400px);
    padding: 14px;
  }
}

/* Large desktop */
@media (min-width: 1440px) {
  .image-container {
    height: clamp(400px, 30vw, 500px);
    padding: 20px;
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

/* Fallback for very small screens */
@media (max-width: 480px) {
  .image-container {
    height: 250px;
    padding: 8px;
  }
}

/* Enhanced white background integration */
.our-team {
  transition: all 0.3s ease;
}

.our-team:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}
</style>
