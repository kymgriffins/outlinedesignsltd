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


// Kenyan construction and business partners
const logos = [
  {
    name: "Bamburi Cement",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%23c41e3a' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='14' font-weight='bold' fill='white' text-anchor='middle'%3EBAMBURI%3C/text%3E%3C/svg%3E"
  },
  {
    name: "East African Portland Cement",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%230066cc' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='14' font-weight='bold' fill='white' text-anchor='middle'%3EEAPCC%3C/text%3E%3C/svg%3E"
  },
  {
    name: "National Construction Authority",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%23006838' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='14' font-weight='bold' fill='white' text-anchor='middle'%3ENCA%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Kenya Power",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%23000080' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='22' font-family='Arial' font-size='12' font-weight='bold' fill='%23ffd700' text-anchor='middle'%3EKENYA%3C/text%3E%3Ctext x='60' y='33' font-family='Arial' font-size='10' fill='%23ffd700' text-anchor='middle'%3EPOWER%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Safaricom",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%2300a550' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='13' font-weight='bold' fill='white' text-anchor='middle'%3ESAFARICOM%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Equity Bank",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Cdefs%3E%3ClinearGradient id='eq' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23c41e3a'/%3E%3Cstop offset='100%25' stop-color='%23d4000f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23eq)' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='13' font-weight='bold' fill='white' text-anchor='middle'%3EEQUITY%3C/text%3E%3C/svg%3E"
  },
  {
    name: "KCB Bank",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%23006838' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='16' font-weight='bold' fill='white' text-anchor='middle'%3EKCB%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Hass Consult",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%23ff6600' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='13' font-weight='bold' fill='white' text-anchor='middle'%3EHASS%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Crown Paints",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%23ffd700' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='13' font-weight='bold' fill='%23333' text-anchor='middle'%3ECROWN%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Basco Products",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%23808080' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='14' font-weight='bold' fill='white' text-anchor='middle'%3EBASCO%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Tononoka Steel",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%23808080' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='12' font-weight='bold' fill='white' text-anchor='middle'%3ETONONOKA%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Mabati Rolling Mills",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%23c41e3a' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='13' font-weight='bold' fill='white' text-anchor='middle'%3EMABATI%3C/text%3E%3C/svg%3E"
  },
  // Duplicate for seamless marquee effect
  {
    name: "Bamburi Cement",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%23c41e3a' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='14' font-weight='bold' fill='white' text-anchor='middle'%3EBAMBURI%3C/text%3E%3C/svg%3E"
  },
  {
    name: "East African Portland Cement",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%230066cc' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='14' font-weight='bold' fill='white' text-anchor='middle'%3EEAPCC%3C/text%3E%3C/svg%3E"
  },
  {
    name: "National Construction Authority",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%23006838' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='14' font-weight='bold' fill='white' text-anchor='middle'%3ENCA%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Kenya Power",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%23000080' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='22' font-family='Arial' font-size='12' font-weight='bold' fill='%23ffd700' text-anchor='middle'%3EKENYA%3C/text%3E%3Ctext x='60' y='33' font-family='Arial' font-size='10' fill='%23ffd700' text-anchor='middle'%3EPOWER%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Safaricom",
    logoimg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect fill='%2300a550' width='120' height='40' rx='4'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='13' font-weight='bold' fill='white' text-anchor='middle'%3ESAFARICOM%3C/text%3E%3C/svg%3E"
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

                  <!-- <div class="d-flex align-center ga-2">
                    <div class="d-flex ga-4">
                      <h3
                        class="text-h3 font-weight-bold text-dark opacity-40 text-decoration-line-through"
                        v-if="plan.strikeprice"
                      >
                        ${{ plan.strikeprice }}
                      </h3>
                      <h3 class="text-h3 font-weight-bold">${{ plan.price }}</h3>
                    </div>
                    <small class="text-dark opacity-70 text-subtitle-1">/project</small>
                  </div> -->
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
        <div class="marquee d-flex mt-10">
          <div class="marquee-content d-flex align-center ga-10 justify-center">
            <div
              class="marquee-tag"
              v-for="(item, index) in logos"
              :key="`${item.name}-${index}`"
            >
              <img
                :src="item.logoimg"
                :alt="item.name"
                style="height: 40px; width: auto; object-fit: contain;"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <SharedSectionSpacer />
  </div>
</template>