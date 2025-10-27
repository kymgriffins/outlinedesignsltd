<script setup lang="ts">
import { Icon } from "@iconify/vue";

const plans = [
  {
    title: "Concept Development",
    price: 699,
    description:
      "Initial vision and design concepts tailored to your architectural needs.",
    features: [
      "Site analysis & feasibility study",
      "Zoning and code research",
      "Preliminary sketches and mood boards",
      "3D conceptual renderings and massing models",
      "Spatial planning and programming",
      "Client collaboration sessions and feedback rounds",
      "Preliminary cost estimation",
      "Basic environmental impact considerations",
    ],
    mostPopular: false,
  },
  {
    title: "Design Development",
    strikeprice: 2199,
    price: 1699,
    description:
      "Comprehensive design detailing to bring your project to life.",
    features: [
      "Everything in Concept Development",
      "Detailed floor plans, sections & elevations",
      "Material and finish selections",
      "Structural and MEP coordination",
      "Interior design concepts and furniture layouts",
      "Lighting and sustainability considerations",
      "Cost budgeting and value engineering",
      "Client presentations and design revisions",
    ],
    mostPopular: false,
  },
  {
    title: "Construction",
    price: 3499,
    description:
      "Complete and precise documentation for seamless construction execution.",
    features: [
      "Everything in Design Development",
      "Comprehensive construction drawings and details",
      "Permit application support and documentation",
      "Construction administration and site visits",
      "Coordination with contractors and consultants",
      "Shop drawing reviews",
      "Final inspections and punch list management",
      "Post-occupancy evaluation support",
    ],
    mostPopular: true,
  },
];

// Real Kenyan company logos
const logos = [
  {
    name: "Bamburi Cement",
    logoimg: "https://upload.wikimedia.org/wikipedia/en/7/7e/Bamburi_Cement_Logo.png"
  },
  {
    name: "East African Portland Cement",
    logoimg: "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/East_African_Portland_Cement_Company_Logo.jpg/250px-East_African_Portland_Cement_Company_Logo.jpg"
  },


  {
    name: "Safaricom",
    logoimg: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Safaricom_logo.svg/250px-Safaricom_logo.svg.png"
  },
  {
    name: "Equity Bank",
    logoimg: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Equity_Bank_Logo.png/250px-Equity_Bank_Logo.png"
  },
  {
    name: "KCB Bank",
    logoimg: "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/KCB_Bank_Kenya_Limited_logo.png/250px-KCB_Bank_Kenya_Limited_logo.png"
  },

  {
    name: "Crown Paints",
    logoimg: "https://upload.wikimedia.org/wikipedia/commons/4/42/Crownpaintslogo.png"
  },



];
</script>

<template>
  <div class="pricing bg-surface">
    <SharedSectionSpacer />
    <div class="container-lg overflow-hidden">
      <v-row>
        <!-- LEFT SIDE IMAGE -->
        <v-col cols="12" lg="4" class="position-relative">
          <SharedLeftSideDarkHeading number="07" title="Services" />
        </v-col>

        <!-- RIGHT SIDE TEXT LIST -->
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-11">
            <SharedCommonHeading
              class="mw-670"
              title="Our Architectural Services"
              subtitle="Explore our thoughtful design process and expert execution, tailored to your vision and space."
            />
          </div>
        </v-col>
      </v-row>

      <div class="pricing mt-md-16 mt-10">
        <v-row>
          <v-col
            v-for="(plan, index) in plans"
            :key="plan.title"
            cols="12"
            lg="4"
            md="6"
            class="d-flex"
          >
            <v-card class="pa-lg-12 pa-6 flex-grow-1 bg-accent" elevation="0">
              <div class="d-flex justify-space-between align-center mb-4">
                <div class="d-flex flex-column ga-5">
                  <div class="d-flex ga-3">
                    <p class="text-subtitle-1 font-weight-medium">
                      {{ plan.title }}
                    </p>
                    <v-chip
                      v-if="plan.mostPopular"
                      color="secondary"
                      text-color="white"
                      variant="flat"
                    >
                      <Icon icon="solar:fire-linear" class="me-2" height="18" />
                      Most Popular
                    </v-chip>
                  </div>
                </div>
              </div>

              <p
                class="text-subtitle-2 text-dark opacity-70 font-weight-regular mb-6"
              >
                {{ plan.description }}
              </p>
              <v-divider class="my-10 opacity-10"></v-divider>
              <div class="mb-6">
                <p class="text-subtitle-2 mb-2">What's Included:</p>
                <ul class="d-flex flex-column ga-4 mt-4">
                  <li
                    v-for="(feature, i) in plan.features"
                    :key="i"
                    class="px-0 d-flex ga-3 align-center"
                  >
                    <v-avatar size="32" color="primary">
                      <Icon
                        icon="tabler:check"
                        height="18"
                        class="text-secondary"
                      />
                    </v-avatar>
                    <v-list-item-title class="text-body-2">
                      {{ feature }}
                    </v-list-item-title>
                  </li>
                </ul>
              </div>

              <v-btn
                class="interactive-button w-100 mt-4"
                to="/contact"
                size="lg"
                flat
              >
                <span class="label">Get a Quote</span>
                <v-avatar size="45" class="icon bg-white">
                  <Icon icon="material-symbols:arrow-outward" height="20" />
                </v-avatar>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div class="mt-md-16 mt-10">
        <p class="text-center text-subtitle-1">
          Trusted by 80+ partners & clients across Kenya
        </p>
        <div class="marquee-container mt-10">
          <div class="marquee-content">
            <div
              v-for="(item, index) in [...logos, ...logos]"
              :key="`${item.name}-${index}`"
              class="marquee-item"
            >
              <img
                :src="item.logoimg"
                :alt="item.name"
                class="logo-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <SharedSectionSpacer />
  </div>
</template>

<style scoped>
.pricing {
  background: #fafafa;
}

/* Marquee Styles */
.marquee-container {
  overflow: hidden;
  position: relative;
  padding: 2rem 0;
}

.marquee-content {
  display: flex;
  gap: 3rem;
  animation: scroll 30s linear infinite;
  width: max-content;
}

.marquee-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  height: 40px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  filter: grayscale(100%) brightness(1.1) contrast(0.9);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.logo-image:hover {
  opacity: 0.9;
  filter: grayscale(50%) brightness(1.05) contrast(1);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 1.5rem));
  }
}

/* Pause animation on hover */
.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .marquee-content {
    gap: 2rem;
    animation-duration: 25s;
  }

  .logo-image {
    height: 35px;
    max-width: 100px;
  }
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .marquee-content {
    animation: none;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 2rem;
  }
}

/* Interactive button styles */
.interactive-button {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.interactive-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.interactive-button .icon {
  transition: transform 0.3s ease;
}

.interactive-button:hover .icon {
  transform: translate(3px, -3px);
}
</style>