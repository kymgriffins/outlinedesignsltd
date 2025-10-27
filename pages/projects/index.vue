<script setup>
useHead({
  title: 'Projects - Architect Weldon',
  meta: [
    { name: 'description', content: 'View our portfolio of completed projects by Architect Weldon, featuring innovative designs and sustainable architecture.' },
    { property: 'og:title', content: 'Projects - Architect Weldon' },
    { property: 'og:description', content: 'Explore our architectural projects and designs.' },
    { property: 'og:url', content: 'https://outlinedesignsltd.vercel.app/projects' },
    { name: 'twitter:title', content: 'Projects - Architect Weldon' },
    { name: 'twitter:description', content: 'See our latest architectural works.' },
  ],
});
</script>

<template>
  <ProjectsProjectBanner />
  <Projects />
</template>
