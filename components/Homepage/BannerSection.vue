<script setup lang="ts">
import AnimatedIcon from "/images/svgs/astrisk-icon.svg";
</script>

<template>
  <v-container fluid class="hero-container pa-0">
    <!-- Video Background -->
    <video autoplay muted loop playsinline class="video-bg">
      <source src="/video/banner-video1.mp4" type="video/mp4" />
    </video>

    <!-- Dark overlay -->
    <div class="overlay"></div>

    <!-- Content bottom-left -->
    <div class="container-lg">
      <div class="hero-content">
        <div class="mw-460">
          <!-- Top row: icon + paragraph -->
          <div class="d-flex flex-sm-row flex-column ga-4 ga-sm-6 align-sm-center align-start">
            <img
              :src="AnimatedIcon"
              alt="icon"
              class="icon-rotate"
            />
            <p class="text-white text-subtitle-1 mb-0">
              <span class="opacity-70">We create</span>
              <span class="text-primary opacity-100">
               sustainable architecture
              </span>
              <span class="opacity-90"
                >that weave cultural narratives with modern innovation for vibrant civilizations.</span
              >
            </p>
          </div>
        </div>

        <!-- Bottom row: title + badge -->
        <div class="d-flex flex-md-row flex-column ga-4 ga-md-5 align-md-end align-start mt-md-6 mt-8">
          <h1 class="text-white text-h1 font-weight-bold mb-0">Build Together</h1>
          <SharedBigBadge />
        </div>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.hero-container {
  position: relative;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 4rem;
}

.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 2;
}

.container-lg {
  position: relative;
  z-index: 3;
  width: 100%;
}

.hero-content {
  padding: 0 1rem;
}

.mw-460 {
  max-width: 460px;
}

.icon-rotate {
  height: 40px;
  width: 40px;
  flex-shrink: 0;
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Mobile First Styles */
.text-h1 {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  line-height: 1.1;
  word-wrap: break-word;
}

.text-subtitle-1 {
  font-size: clamp(0.875rem, 3vw, 1.125rem);
  line-height: 1.5;
}

/* Tablet Styles */
@media (min-width: 768px) {
  .hero-container {
    padding-bottom: 6rem;
  }

  .hero-content {
    padding: 0 2rem;
  }

  .icon-rotate {
    height: 50px;
    width: 50px;
  }
}

/* Desktop Styles */
@media (min-width: 1024px) {
  .hero-container {
    padding-bottom: 8rem;
  }

  .hero-content {
    padding: 0;
  }
}

/* Large Desktop Styles */
@media (min-width: 1440px) {
  .hero-container {
    padding-bottom: 10rem;
  }
}

/* Small Mobile Optimization */
@media (max-width: 480px) {
  .hero-container {
    min-height: 90vh;
    padding-bottom: 2rem;
  }

  .hero-content {
    padding: 0 0.75rem;
  }

  .text-h1 {
    font-size: clamp(2rem, 10vw, 3rem);
  }

  .icon-rotate {
    height: 35px;
    width: 35px;
  }
}

/* Landscape Mobile Optimization */
@media (max-height: 600px) and (orientation: landscape) {
  .hero-container {
    min-height: 120vh;
    padding-bottom: 2rem;
  }

  .hero-content {
    padding-top: 2rem;
  }
}

/* High-resolution screens */
@media (min-width: 1920px) {
  .hero-container {
    padding-bottom: 12rem;
  }
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .icon-rotate {
    animation: none;
  }

  .video-bg {
    animation: none;
  }
}

/* Ensure text readability on all devices */
.text-white {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Fix for very small screens */
@media (max-width: 360px) {
  .hero-content {
    padding: 0 0.5rem;
  }

  .text-h1 {
    font-size: clamp(1.75rem, 12vw, 2.5rem);
  }

  .d-flex.flex-sm-row {
    gap: 0.75rem !important;
  }
}

/* Print styles */
@media print {
  .video-bg {
    display: none;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>