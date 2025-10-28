<script setup lang="ts">
import { Icon } from "@iconify/vue";
import judy from "/images/team/Judychesire.jpg";
import kevin from "/images/team/kevin.png";
import weldon from "/images/team/weldon.png";

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
      <v-row class="mb-12 mb-md-16">
        <v-col cols="12" lg="4">
          <SharedLeftSideDarkHeading number="06" title="The team" />
        </v-col>
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-8">
            <SharedCommonHeading
              class="mw-670"
              title="Meet our team"
              subtitle="Our team is committed to redefining architectural and urban design through innovation, sustainability, and collaboration."
            />
          </div>
        </v-col>
      </v-row>

      <v-row class="team-grid">
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
          <div class="mt-6 team-info">
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
.meet-team {
  padding: 0 1rem;
}

.container-lg {
  max-width: 1200px;
  margin: 0 auto;
}

/* Improved team grid spacing */
.team-grid {
  margin: -1.5rem; /* Negative margin to compensate for column padding */
}

.team-member-col {
  padding: 1.5rem; /* Industry standard gutter spacing */
  margin-bottom: 1rem;
}

.our-team {
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced image container with better spacing */
.image-container {
  width: 100%;
  height: clamp(320px, 40vw, 480px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  overflow: hidden;
  padding: 4rem; /* Increased padding for better breathing room */
}

.team-member-image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
  transition: transform 0.4s ease;
}

.our-team:hover .team-member-image {
  transform: scale(1.05);
}

.team-social {
  bottom: 2rem;
  left: 2rem;
  z-index: 3;
  opacity: 0;
  transform: translateY(1rem);
  transition: all 0.4s ease;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.social-icon:hover {
  background: white !important;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.teambox {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.15));
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.our-team:hover .teambox {
  opacity: 1;
}

/* Enhanced team info spacing */
.team-info {
  text-align: center;
  padding: 0 0.5rem;
}

.team-name {
  font-size: clamp(1.375rem, 2.5vw, 1.625rem);
  margin-bottom: 0.75rem;
  color: rgb(var(--v-theme-dark));
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.team-role {
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  color: rgb(var(--v-theme-dark));
  opacity: 0.7;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
}

.our-team:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  transform: translateY(-6px);
}

/* Mobile responsiveness with better spacing */
@media (max-width: 768px) {
  .team-grid {
    margin: -1rem;
  }

  .team-member-col {
    padding: 1rem;
    margin-bottom: 2rem; /* More space between rows on mobile */
  }

  .image-container {
    height: clamp(280px, 50vw, 400px);
    padding: 1.5rem;
  }

  .team-social {
    opacity: 1;
    transform: translateY(0);
    bottom: 1.5rem;
    left: 1.5rem;
  }

  .team-info {
    margin-top: 1rem;
  }
}

/* Tablet responsiveness */
@media (max-width: 1024px) and (min-width: 769px) {
  .team-grid {
    margin: -1.25rem;
  }

  .team-member-col {
    padding: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .image-container {
    height: clamp(300px, 35vw, 420px);
    padding: 1.75rem;
  }
}

/* Large desktop - optimal spacing */
@media (min-width: 1440px) {
  .team-grid {
    margin: -2rem;
  }

  .team-member-col {
    padding: 2rem;
    margin-bottom: 2rem;
  }

  .image-container {
    height: clamp(380px, 30vw, 520px);
    padding: 2.5rem;
  }

  .team-info {
    margin-top: 1.5rem;
  }
}

/* Extra small screens */
@media (max-width: 480px) {
  .team-grid {
    margin: -0.75rem;
  }

  .team-member-col {
    padding: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .image-container {
    height: 280px;
    padding: 1.25em;
  }

  .team-social {
    bottom: 1rem;
    left: 1rem;
  }

  .social-icon {
    width: 40px !important;
    height: 40px !important;
  }
}

/* Ensure consistent vertical rhythm */
.meet-team {
  line-height: 1.6;
}

/* Improved hover states */
.our-team {
  will-change: transform;
}

.social-icon {
  will-change: transform;
}
</style>