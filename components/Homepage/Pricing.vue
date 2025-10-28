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
      <!-- Header Section -->
      <v-row class="align-start mb-12 mb-md-16">
        <v-col cols="12" lg="4" class="position-relative">
          <SharedLeftSideDarkHeading number="07" title="Services" />
        </v-col>
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-8">
            <SharedCommonHeading
              class="mw-670"
              title="Our Architectural Services"
              subtitle="Explore our thoughtful design process and expert execution, tailored to your vision and space."
            />
          </div>
        </v-col>
      </v-row>

      <!-- Pricing Cards Section -->
      <div class="pricing-cards-section">
        <v-row class="pricing-grid">
          <v-col
            v-for="(plan, index) in plans"
            :key="plan.title"
            cols="12"
            lg="4"
            md="6"
            class="pricing-col"
          >
            <v-card
              class="pricing-card pa-lg-10 pa-6 flex-grow-1 bg-accent"
              elevation="0"
              :class="{ 'popular-card': plan.mostPopular }"
            >
              <!-- Card Header -->
              <div class="card-header mb-6">
                <div class="d-flex justify-space-between align-start">
                  <div class="d-flex flex-column ga-4">
                    <div class="d-flex align-center gap-3 flex-wrap">
                      <p class="text-h6 font-weight-medium mb-0">
                        {{ plan.title }}
                      </p>
                      <v-chip
                        v-if="plan.mostPopular"
                        color="secondary"
                        text-color="white"
                        variant="flat"
                        size="small"
                        class="popular-chip"
                      >
                        <Icon icon="solar:fire-linear" class="me-1" height="16" />
                        Most Popular
                      </v-chip>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Description -->
              <p class="text-body-1 text-dark opacity-70 font-weight-regular mb-8">
                {{ plan.description }}
              </p>

              <v-divider class="my-8 opacity-25"></v-divider>

              <!-- Features List -->
              <div class="features-section mb-8">
                <p class="text-subtitle-2 font-weight-medium mb-4">What's Included:</p>
                <ul class="features-list">
                  <li
                    v-for="(feature, i) in plan.features"
                    :key="i"
                    class="feature-item"
                  >
                    <v-avatar size="36" color="primary" class="feature-icon">
                      <Icon
                        icon="tabler:check"
                        height="18"
                        class="text-secondary"
                      />
                    </v-avatar>
                    <span class="text-body-2 feature-text">
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>

              <!-- CTA Button -->
              <v-btn
                class="interactive-button w-100"
                to="/contact"
                size="large"
                flat
                :color="plan.mostPopular ? 'secondary' : 'primary'"
              >
                <span class="label">Get a Quote</span>
                <v-avatar size="42" class="icon bg-white ms-2">
                  <Icon icon="material-symbols:arrow-outward" height="18" />
                </v-avatar>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Trusted Partners Section -->
      <div class="trusted-partners-section mt-16">
        <p class="text-center text-h6 font-weight-medium mb-2">
          Trusted by 80+ partners & clients across Kenya
        </p>
        <p class="text-center text-body-2 opacity-70 mb-10">
          Collaborating with industry leaders to deliver exceptional results
        </p>

        <div class="marquee-container">
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

/* Pricing Cards Section */
.pricing-grid {
  margin: -1rem;
}

.pricing-col {
  padding: 1rem;
}

.pricing-card {
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid transparent;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.1);
}

.popular-card {
  border: 2px solid rgb(var(--v-theme-secondary));
  position: relative;
  overflow: hidden;
}

.popular-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgb(var(--v-theme-secondary));
}

.popular-chip {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

/* Features List */
.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0;
}

.feature-icon {
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.feature-item:hover .feature-icon {
  transform: scale(1.1);
}

.feature-text {
  line-height: 1.5;
  padding-top: 0.25rem;
}

/* Interactive Button */
.interactive-button {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  margin-top: auto;
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

/* Marquee Styles */
.marquee-container {
  overflow: hidden;
  position: relative;
  padding: 2rem 0;
  margin: 0 -1rem;
}

.marquee-container::before,
.marquee-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
  pointer-events: none;
}

.marquee-container::before {
  left: 0;
  background: linear-gradient(90deg, #fafafa, transparent);
}

.marquee-container::after {
  right: 0;
  background: linear-gradient(270deg, #fafafa, transparent);
}

.marquee-content {
  display: flex;
  gap: 4rem;
  animation: scroll 40s linear infinite;
  width: max-content;
}

.marquee-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
}

.logo-image {
  height: 45px;
  width: auto;
  max-width: 140px;
  object-fit: contain;
  filter: grayscale(100%) brightness(1.1) contrast(0.9);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.logo-image:hover {
  opacity: 1;
  filter: grayscale(0%) brightness(1) contrast(1);
  transform: scale(1.05);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 2rem));
  }
}

/* Pause animation on hover */
.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}

/* Responsive Design */
@media (max-width: 768px) {
  .pricing-grid {
    margin: -0.75rem;
  }

  .pricing-col {
    padding: 0.75rem;
  }

  .pricing-card {
    padding: 1.5rem !important;
  }

  .features-list {
    gap: 0.75rem;
  }

  .feature-item {
    gap: 0.5rem;
  }

  .marquee-content {
    gap: 2.5rem;
    animation-duration: 30s;
  }

  .logo-image {
    height: 35px;
    max-width: 100px;
  }

  .marquee-container::before,
  .marquee-container::after {
    width: 50px;
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .pricing-grid {
    margin: -0.875rem;
  }

  .pricing-col {
    padding: 0.875rem;
  }
}

/* Large desktop */
@media (min-width: 1440px) {
  .pricing-grid {
    margin: -1.25rem;
  }

  .pricing-col {
    padding: 1.25rem;
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

  .pricing-card:hover {
    transform: none;
  }

  .popular-chip {
    animation: none;
  }
}

/* Ensure consistent spacing throughout */
.trusted-partners-section {
  padding-top: 2rem;
}

.card-header {
  min-height: 4rem;
}

.features-section {
  flex-grow: 1;
}
</style>