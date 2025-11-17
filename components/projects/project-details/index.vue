<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useProjectsGridStore } from "@/store/project";
import AnimatedIcon from "/images/svgs/astrisk-icon.svg";
import { motion } from "framer-motion";

const formattedDescription = computed(() => {
  if (!post.value?.description) return "";

  // Replace newline characters with <br> tags
  return post.value.description.replace(/\n/g, "<br>");
});
const title = useRoute();
const getTitle = title.path.split("/").pop();

onMounted(() => {
  store.fetchPost(`${getTitle}`);
  store.fetchPosts();
});
const store = useProjectsGridStore();

const post = computed(() => {
  return store.selectedProjects;
});
</script>

<template>
  <div class="common-banner position-relative">
    <v-img :src="post.project_image" cover height="650" class="w-100"></v-img>
    <div class="banner-overlay"></div>
    <div class="container-lg">
      <div class="common-banner-content">
        <div class="mw-460">
          <!-- Top row: icon + paragraph -->
          <div class="d-flex ga-6">
            <img
              :src="AnimatedIcon"
              alt="icon"
              height="44"
              width="44"
              class="icon-rotate"
            />
            <p class="text-white text-subtitle-1 mb-0">
              <span class="opacity-70">A</span>
              <span class="text-primary opacity-100">
                showcase of creativity</span
              >
              <span class="opacity-70"
                >, strategy, and results explore the projects that define
                us.</span
              >
            </p>
          </div>
        </div>
        <!-- Bottom row: title + badge -->
        <div
          class="d-flex flex-md-row flex-column ga-5 align-md-end align-start mt-md-6 mt-3"
        >
          <h1 class="text-white text-h1 font-weight-bold mb-0">
            {{ post.project_title }}
          </h1>
          <SharedBigBadge />
        </div>
      </div>
    </div>
  </div>

  <!-- Project Details -->
  <div class="bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-btn class="interactive-button-small" to="/projects" size="lg" flat>
        <v-avatar size="30" class="icon bg-white">
          <Icon icon="material-symbols-light:arrow-back-rounded" height="20" />
        </v-avatar>
        <span class="label">Back</span>
      </v-btn>

      <div class="d-flex flex-md-row flex-column ga-10 mt-10">
        <div class="pr-md-10 pr-4 border-e">
          <p class="text-subtitle-2 text-dark opacity-70">Scope of work</p>
          <div class="d-flex ga-2 mt-2">
            <span class="text-subtitle-1 font-weight-medium"
              >{{ post.tag1 }},</span
            >
            <span class="text-subtitle-1 font-weight-medium">{{
              post.tag2
            }}</span>
          </div>
        </div>
        <div class="pr-md-10 pr-4 border-e">
          <p class="text-subtitle-2 text-dark opacity-70">Industry</p>
          <div class="d-flex ga-2 mt-2">
            <span class="text-subtitle-1 font-weight-medium">{{
              post.industry
            }}</span>
          </div>
        </div>
        <div class="pr-md-10 pr-4 border-e">
          <p class="text-subtitle-2 text-dark opacity-70">Raised</p>
          <div class="d-flex ga-2 mt-2">
            <span class="text-subtitle-1 font-weight-medium">{{
              post.raised
            }}</span>
          </div>
        </div>
        <div class="">
          <p class="text-subtitle-2 text-dark opacity-70">Website</p>
          <div class="d-flex ga-2 mt-2">
            <span class="text-subtitle-1 font-weight-medium"
              >Outline Designs</span
            >
          </div>
        </div>
      </div>
      <SharedSectionSpacer />
      <v-row>
        <!-- LEFT SIDE IMAGE -->
        <v-col cols="12" lg="4">
          <h2 class="text-60 text-dark">Description</h2>
        </v-col>
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-lg-10 ga-8">
            <div class="project-description" v-html="post.description"></div>
          </div>
        </v-col>

        <!-- Additional Project Details -->
        <v-col cols="12" class="mt-lg-16 mt-8">
          <div class="project-details-grid">
            <!-- Project Images Gallery -->
            <motion.div
              v-if="post.project_images && post.project_images.length > 0"
              class="images-section mb-16"
              initial={{ opacity: 0, y: 50 }}
              while-in-view={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.h2
                class="text-40 text-dark font-weight-bold mb-8"
                initial={{ opacity: 0, x: -30 }}
                while-in-view={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Project Gallery
              </motion.h2>
              <div class="images-grid">
                <motion.div
                  v-for="(image, index) in post.project_images"
                  :key="index"
                  class="image-card"
                  :initial="{ opacity: 0, y: 30, scale: 0.95 }"
                  :while-in-view="{ opacity: 1, y: 0, scale: 1 }"
                  :viewport="{ once: true }"
                  :transition="{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }"
                  :while-hover="{
                    y: -8
                  }"
                  :while-tap="{ scale: 0.98 }"
                >
                  <div class="image-card-inner">
                    <v-img
                      :src="image"
                      alt="project image"
                      class="project-gallery-image"
                      cover
                      height="300"
                    />
                    <motion.div
                      class="image-overlay"
                      while-in-view={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <motion.div
                        class="image-number"
                        while-hover={{
                          scale: 1.1,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {{ index + 1 }}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <!-- Project Specifications -->
            <motion.div
              v-if="post.additional_details"
              class="specs-section mb-16"
              initial={{ opacity: 0, y: 50 }}
              while-in-view={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.h2
                class="text-40 text-dark font-weight-bold mb-8"
                initial={{ opacity: 0, x: -30 }}
                while-in-view={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Project Specifications
              </motion.h2>
              <div class="specs-grid">
                <!-- Client & Timeline Card -->
                <motion.div
                  class="spec-card"
                  while-hover={{ y: -4, scale: 1.02 }}
                  while-tap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  while-in-view={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div class="spec-card-header">
                    <h3 class="spec-title">Project Overview</h3>
                  </div>
                  <div class="spec-card-content">
                    <div class="spec-item">
                      <span class="spec-label">Client</span>
                      <span class="spec-value">{{ post.additional_details.client }}</span>
                    </div>
                    <div class="spec-item">
                      <span class="spec-label">Duration</span>
                      <span class="spec-value">{{ post.additional_details.duration }}</span>
                    </div>
                    <div class="spec-item">
                      <span class="spec-label">Team Size</span>
                      <span class="spec-value">{{ post.additional_details.team_size }}</span>
                    </div>
                  </div>
                </motion.div>

                <!-- Technologies Card -->
                <motion.div
                  class="spec-card"
                  while-hover={{ y: -4, scale: 1.02 }}
                  while-tap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  while-in-view={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div class="spec-card-header">
                    <h3 class="spec-title">Technologies</h3>
                  </div>
                  <div class="spec-card-content">
                    <div class="tech-tags">
                      <v-chip
                        v-for="tech in post.additional_details.technologies"
                        :key="tech"
                        variant="outlined"
                        class="tech-chip"
                        size="small"
                      >
                        {{ tech }}
                      </v-chip>
                    </div>
                  </div>
                </motion.div>

                <!-- Challenge & Solution Card -->
                <motion.div
                  class="spec-card"
                  while-hover={{ y: -4, scale: 1.02 }}
                  while-tap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  while-in-view={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div class="spec-card-header">
                    <h3 class="spec-title">Challenge</h3>
                  </div>
                  <div class="spec-card-content">
                    <p class="spec-text">{{ post.additional_details.challenge }}</p>
                  </div>
                </motion.div>

                <motion.div
                  class="spec-card"
                  while-hover={{ y: -4, scale: 1.02 }}
                  while-tap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  while-in-view={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <div class="spec-card-header">
                    <h3 class="spec-title">Solution</h3>
                  </div>
                  <div class="spec-card-content">
                    <p class="spec-text">{{ post.additional_details.solution }}</p>
                  </div>
                </motion.div>

                <!-- Results Card -->
                <motion.div
                  class="spec-card full-width"
                  initial={{ opacity: 0, y: 30 }}
                  while-in-view={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <div class="spec-card-header">
                    <h3 class="spec-title">Results</h3>
                  </div>
                  <div class="spec-card-content">
                    <ul class="results-list">
                      <li
                        v-for="result in post.additional_details.results"
                        :key="result"
                        class="result-item"
                      >
                        {{ result }}
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </v-col>
      </v-row>
    </div>

    <SharedSectionSpacer />
  </div>
</template>

<style scoped>
.project-details-grid {
  max-width: 100%;
}

/* Image Gallery Styles */
.images-section {
  margin-bottom: 4rem;
}

.images-section h2 {
  color: #1a1a1a;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.image-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.image-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.image-card-inner {
  position: relative;
  width: 100%;
  height: 300px;
}

.project-gallery-image {
  border-radius: 16px;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-card:hover .image-overlay {
  opacity: 1;
}

.image-number {
  color: white;
  font-size: 2rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Specification Cards Styles */
.specs-section h2 {
  color: #1a1a1a;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.spec-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.spec-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.spec-card.full-width {
  grid-column: 1 / -1;
}

.spec-card-header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.spec-title {
  margin: 0;
  color: #1a1a1a;
  font-size: 1.25rem;
  font-weight: 600;
}

.spec-card-content {
  padding: 1.5rem 2rem;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.spec-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.spec-label {
  color: #666;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.spec-value {
  color: #1a1a1a;
  font-size: 0.875rem;
  font-weight: 600;
}

.spec-text {
  color: #4a4a4a;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

/* Technology Tags */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-chip {
  background: #f8f9fa;
  border-color: #e9ecef;
  color: #495057;
  font-weight: 500;
}

.tech-chip:hover {
  background: #e9ecef;
}

/* Results List */
.results-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.result-item {
  color: #4a4a4a;
  font-size: 0.95rem;
  line-height: 1.6;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.result-item:before {
  content: "✓";
  color: #10b981;
  font-weight: 700;
  position: absolute;
  left: 0;
}

.result-item:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

/* Responsive Design */
@media (max-width: 768px) {
  .images-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .specs-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .spec-card-content {
    padding: 1rem 1.5rem;
  }

  .spec-card-header {
    padding: 1rem 1.5rem;
  }

  .image-number {
    font-size: 1.5rem;
    padding: 0.25rem 0.75rem;
  }
}

@media (max-width: 480px) {
  .spec-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .spec-item {
    margin-bottom: 0.75rem;
  }
}
</style>
