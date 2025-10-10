<script setup lang="ts">
import logo1 from "/images/pricing/partners-1.svg";
import logo2 from "/images/pricing/partners-2.svg";
import logo3 from "/images/pricing/partners-3.svg";
import logo4 from "/images/pricing/partners-4.svg";
import logo5 from "/images/pricing/partners-5.svg";

const plans = [
  {
    title: "Launch",
    price: 699,
    description:
      "Ideal for startups and small businesses taking their first steps online.",
    features: [
      "Competitive research & insights",
      "Wireframing and prototyping",
      "Basic tracking setup (Google Analytics, etc.)",
      "Standard contact form integration",
    ],
    mostPopular: false,
  },
  {
    title: "Scale",
    strikeprice: 2199,
    price: 1699,
    description:
      "Perfect for growing brands needing more customization and flexibility.",
    features: [
      "Everything in the Launch Plan",
      "Custom design for up to 10 pages",
      "Seamless social media integration",
      "SEO enhancements for key pages",
    ],
    mostPopular: true,
  },
  {
    title: "Elevate",
    price: 3499,
    description:
      "Best suited for established businesses wanting a fully tailored experience.",
    features: [
      "Everything in the Scale Plan",
      "E-commerce functionality (if needed)",
      "Branded email template design",
      "Priority support for six months after launch",
    ],
    mostPopular: false,
  },
];

const logos = [
  {
    logoimg: logo1,
  },
  {
    logoimg: logo2,
  },
  {
    logoimg: logo3,
  },
  {
    logoimg: logo4,
  },
  {
    logoimg: logo5,
  },
  {
    logoimg: logo1,
  },
  {
    logoimg: logo2,
  },
  {
    logoimg: logo3,
  },
  {
    logoimg: logo4,
  },
  {
    logoimg: logo5,
  },
  {
    logoimg: logo1,
  },
  {
    logoimg: logo4,
  },
  {
    logoimg: logo5,
  },
  {
    logoimg: logo1,
  },
  {
    logoimg: logo2,
  },
  {
    logoimg: logo3,
  },
  {
    logoimg: logo4,
  },
];
</script>
<template>

  <div class="mt-md-16 mt-10">
        <p class="text-center text-subtitle-1">
          More than 320 trusted partners & clients
        </p>
        <div class="marquee d-flex mt-10">
          <div class="marquee-content d-flex align-center ga-10 justify-center">
            <div class="marquee-tag" v-for="item in logos" :key="item.logoimg">
              <img :src="item.logoimg" />
            </div>
          </div>
        </div>
      </div>
</template>
