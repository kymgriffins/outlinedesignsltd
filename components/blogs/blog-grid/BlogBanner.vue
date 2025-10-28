<script setup lang="ts">
import ManImage from "/images/background/blog_banner.png";
import weldon from "/images/background/weldon.png";
import blogarch from "/images/background/blogarch.png";

import AnimatedIcon from "/images/svgs/astrisk-icon.svg";
</script>

<template>
  <div class="common-banner position-relative">
    <!-- Use multiple background approaches for different screen sizes -->
    <div
      class="banner-background w-100"
      :style="{ backgroundImage: `url(${blogarch})` }"
    ></div>
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
              <span class="opacity-70">Join Weldon Kimutai, a Kenyan architect, as he blends </span>
              <span class="text-primary opacity-100">
                African heritage with global design</span
              >
              <span class="opacity-70"
                > through iconic landmarks—connect with his journey!</span
              >
            </p>
          </div>
        </div>
        <!-- Bottom row: title + badge -->
        <div class="d-flex flex-md-row flex-column ga-5 align-md-end align-start mt-md-6 mt-3">
          <h1 class="text-white text-h1 font-weight-bold mb-0">Blog</h1>
          <SharedBigBadge />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.common-banner {
  overflow: hidden;
  height: 650px;
}

.banner-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;
}

/* Ensure the overlay works properly */
.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.common-banner-content {
  position: relative;
  z-index: 2;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Mobile - works well, keep as is */
@media (max-width: 768px) {
  .common-banner,
  .common-banner-content {
    height: 500px;
  }
}

/* Tablet */
@media (max-width: 1024px) and (min-width: 769px) {
  .common-banner,
  .common-banner-content {
    height: 600px;
  }

  .banner-background {
    background-size: cover;
    background-position: center 25%;
  }
}

/* Large desktop - fix the pathetic look */
@media (min-width: 1025px) {
  .common-banner,
  .common-banner-content {
    height: 750px; /* Taller for large screens */
  }

  .banner-background {
    background-size: cover;
    background-position: center 30%; /* Adjust for large screens */
  }

  /* Alternative: Use contain for very large screens if cover looks bad */
  /* .banner-background {
    background-size: contain;
    background-position: center center;
    background-color: #f5f5f5; // Add background color for empty spaces
  } */
}

/* Extra large screens - prevent excessive stretching */
@media (min-width: 1440px) {
  .common-banner,
  .common-banner-content {
    height: 800px;
    max-height: 100vh; /* Don't exceed viewport height */
  }

  .banner-background {
    background-size: cover;
    background-position: center 35%;
  }

  /* Container max-width for very large screens */
  .container-lg {
    max-width: 1400px;
  }
}

/* Ultra-wide screens */
@media (min-width: 1920px) {
  .banner-background {
    background-size: cover;
    background-position: center 40%;
  }
}

/* If the image still looks bad on large screens, try these alternatives: */

/* Option A: Use a higher resolution image for large screens */
/* @media (min-width: 1025px) {
  .banner-background {
    background-image: url('/images/background/weldon-large.jpg'); // Higher res version
  }
} */

/* Option B: Add a gradient to hide poor image quality on edges */
/* @media (min-width: 1025px) {
  .banner-background::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(0,0,0,0.1) 0%,
      transparent 20%,
      transparent 80%,
      rgba(0,0,0,0.1) 100%
    );
  }
} */

/* Option C: Switch to a different image for large screens entirely */
/* @media (min-width: 1025px) {
  .banner-background {
    background-image: url('/images/background/architectural-banner-large.jpg');
  }
} */
</style>