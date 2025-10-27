<script setup>
useHead({
  title: 'Home - Architect Weldon Portfolio',
  meta: [
    { name: 'description', content: 'Welcome to Architect Weldon\'s portfolio. Explore innovative architectural designs, projects, and services tailored for modern and sustainable building solutions.' },
    { property: 'og:title', content: 'Home - Architect Weldon Portfolio' },
    { property: 'og:description', content: 'Discover Architect Weldon\'s expertise in modern architecture and sustainable designs.' },
    { property: 'og:url', content: 'https://outlinedesignsltd.vercel.app/' },
    { name: 'twitter:title', content: 'Home - Architect Weldon Portfolio' },
    { name: 'twitter:description', content: 'Explore innovative architectural projects and services.' },
  ],
});
</script>

<template>
  <HomepageBannerSection />
  <HomepageStatsAndFacts />
  <HomepagePortfolio />
  <HomepageWhatweDo />
  <HomepageWhyChoose />
  <HomepageStoriesFromClient />
  <HomepageMeetOurTeam/>
  <!-- <HomepagePricing/> -->
  <HomepageFAQ/>
  <HomepageRecentNews/>
  <HomepageGetinTouch/>
</template>
