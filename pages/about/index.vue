<script setup>
useHead({
  title: 'About - Architect Weldon',
  meta: [
    { name: 'description', content: 'Learn more about Architect Weldon, our team, and our commitment to innovative and sustainable architectural designs.' },
    { property: 'og:title', content: 'About - Architect Weldon' },
    { property: 'og:description', content: 'Discover the story behind Architect Weldon and our passion for architecture.' },
    { property: 'og:url', content: 'https://outlinedesignsltd.vercel.app/about' },
    { name: 'twitter:title', content: 'About - Architect Weldon' },
    { name: 'twitter:description', content: 'Get to know our team and expertise.' },
  ],
});
</script>

<template>
    <AboutPageBanner/>
    <AboutPageCounterCards/>
    <AboutPageFeatureBanner/>
    <HomepageMeetOurTeam/>
    <HomepagePricing/>

</template>
