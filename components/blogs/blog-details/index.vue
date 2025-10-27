<script setup lang="ts">
import { useblogGridStore } from "@/store/blogs";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import AnimatedIcon from "/images/svgs/astrisk-icon.svg";

const title = useRoute();
const getTitle = title.path.split("/").pop();
const store = useblogGridStore();

onMounted(() => {
  store.fetchPost(`${getTitle}`);
  store.fetchPosts();
});

const post = computed(() => {
  return store.selectedblog;
});
</script>

<template>
  <div class="common-banner position-relative">
    <!-- Improved banner image with aspect ratio for mobile -->
    <v-img
      :src="post.blog_image"
      cover
      class="w-100 banner-image"
      :height="$vuetify.display.mobile ? '400' : '650'"
    ></v-img>
    <div class="banner-overlay"></div>
    <div class="container-lg">
      <div class="common-banner-content">
        <div class="mw-575">
          <!-- Improved mobile layout for icon + paragraph -->
          <div class="d-flex flex-sm-row flex-column ga-4 ga-sm-6 align-sm-start align-center">
            <img
              :src="AnimatedIcon"
              alt="icon"
              height="44"
              width="44"
              class="icon-rotate mb-sm-0 mb-3"
            />
            <p class="text-white text-subtitle-1 mb-0 opacity-70 text-sm-start text-center">
              In a world where standing still means falling behind, we knew it
              was time for a bold transformation..
            </p>
          </div>
        </div>
        <!-- Improved mobile layout for title + badge -->
        <div
          class="d-flex flex-md-row flex-column ga-4 ga-md-5 align-md-end align-start mt-md-6 mt-4"
        >
          <h1 class="text-white font-weight-bold mb-0 title-responsive">
            {{ post.blog_title }}
          </h1>
          <SharedBigBadge class="mt-md-0 mt-3" />
        </div>
      </div>
    </div>
  </div>

  <!-- Blog Details -->
  <div class="bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row class="d-flex align-start">
        <!-- LEFT SIDE CONTENT - Improved mobile stacking -->
        <v-col cols="12" lg="4" class="mb-lg-0 mb-4">
          <h2 class="text-responsive text-dark">Scroll to read</h2>
        </v-col>
        <v-col cols="12" lg="8">
          <p class="text-dark text-subtitle-1 opacity-70">
            Outline Designs continues to evolve. Our refreshed identity reflects the same principles we bring to every project — clarity, proportion, and progress. It's a statement of who we are and how we continue to build, both in form and in philosophy.
          </p>
        </v-col>

        <!-- MAIN IMAGE - Improved mobile height -->
        <v-col cols="12" class="mt-lg-16 mt-6">
          <div class="lh-0">
            <v-img
              :src="post.blog_inner_image"
              alt="project inner image"
              class="w-100 blog-inner-image"
              :height="$vuetify.display.mobile ? '300' : '600'"
            ></v-img>
          </div>
        </v-col>

        <!-- CONTENT AREA - Improved mobile spacing -->
        <v-col cols="12" lg="2" class="d-lg-block d-none"></v-col>
        <v-col cols="12" lg="8">
          <div
            class="project-description mt-lg-16 mt-6 content-responsive"
            v-html="post.blog_description"
          ></div>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </div>
</template>

<style scoped>
/* Mobile-first responsive styles */
.common-banner {
  overflow: hidden;
}

.banner-image {
  min-height: 400px;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.common-banner-content {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  padding: 0 16px;
}

/* Responsive typography */
.title-responsive {
  font-size: clamp(2rem, 5vw, 3.75rem); /* 32px - 60px */
  line-height: 1.2;
}

.text-responsive {
  font-size: clamp(2rem, 4vw, 3.75rem); /* 32px - 60px */
  line-height: 1.2;
}

/* Content responsive styles */
.content-responsive {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.6;
}

/* Mobile-specific adjustments */
@media (max-width: 768px) {
  .common-banner-content {
    padding: 0 24px;
  }

  .mw-575 {
    max-width: 100% !important;
  }

  .blog-inner-image {
    border-radius: 8px;
  }
}

/* Tablet adjustments */
@media (max-width: 1024px) and (min-width: 769px) {
  .common-banner-content {
    padding: 0 32px;
  }
}

/* Gallery grid styles for the blog content */
:deep(.gallery-grid) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

:deep(.gallery-img) {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

/* Improve typography in blog content */
:deep(.project-description p) {
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: inherit;
}

:deep(.project-description strong) {
  font-weight: 600;
}

:deep(.project-description em) {
  font-style: italic;
}

/* Ensure images in content are responsive */
:deep(.project-description img) {
  max-width: 100%;
  height: auto;
}

/* Icon animation */
.icon-rotate {
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>