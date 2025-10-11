<script setup lang="ts">
import AnimatedIcon from "/images/svgs/astrisk-icon.svg";
import MainImage from "/images/background/privacy-policy.png";
</script>

<template>
  <div class="common-banner position-relative">
    <v-img :src="MainImage" cover height="650" class="w-100"></v-img>
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
              <span class="opacity-70">Explore our approach to</span>
              <span class="text-primary opacity-100"> Design Integrity </span>
              <span class="opacity-70">and how we safeguard your trust.</span>
            </p>
          </div>
        </div>
        <!-- Bottom row: title + badge -->
        <div
          class="d-flex flex-md-row flex-column ga-5 align-md-end align-start mt-md-6 mt-3"
        >
          <h1 class="text-white text-h1 font-weight-bold mb-0">
            Privacy & Client Policy
          </h1>
          <SharedBigBadge />
        </div>
      </div>
    </div>
  </div>

  <div class="bg-darkgray leagal">
    <div class="container-lg py-lg-16 py-8">
      <p class="text-subtitle-1">
        At <strong>Outline Designs</strong>, we value the relationships we build with our clients, partners,
        and community. This Privacy & Client Policy explains how we handle your personal information
        as part of our architectural and design services. It also outlines our promise to uphold
        transparency, confidentiality, and respect in all our interactions.
      </p>

      <p class="text-subtitle-1">
        By engaging with our team—whether through consultations, project collaborations, or
        digital communication—you consent to our responsible use and protection of your shared data
        in accordance with this policy.
      </p>

      <p class="text-subtitle-1">
        Occasionally, our website may feature links to external resources, partners, or
        platforms. Please note that each external site operates under its own privacy practices,
        which we encourage you to review.
      </p>

      <p class="text-subtitle-1">
        As we evolve, we may update this policy to reflect new standards, technologies, or
        practices. Any updates will be clearly noted on this page. We recommend reviewing this
        statement periodically to stay informed about how we manage your information.
      </p>

      <div class="my-6">
        <h4 class="text-h4 text-dark">Information We Collect</h4>
        <p class="mt-6 text-subtitle-1">
          During project discussions or when you reach out to us, we may collect details such as
          your name, email address, contact number, company name, and any project-related information
          you share with us. This helps us tailor our services and maintain clear communication.
        </p>

        <p class="text-subtitle-1">
          We do not collect or store sensitive financial information directly. Payments for
          services are securely processed through our trusted third-party providers, whose
          privacy policies can be accessed via their official platforms.
        </p>
      </div>

      <div class="my-6">
        <h4 class="text-h4 text-dark">How We Use Your Information</h4>
        <p class="mt-6 text-subtitle-1">
          We use your information solely to deliver architectural and design services effectively,
          enhance your experience, and communicate updates relevant to your project or inquiry.
        </p>

        <p class="mt-6 text-subtitle-1">
          Your data is never shared, sold, or disclosed without your consent, except where
          legally required. For payment or third-party integrations, please review our partner’s
          privacy policy here:
          <a
            class="hover-primary-link text-decoration-none text-black font-weight-bold"
            target="_blank"
            href="https://outlinedesigns.co.ke/"
          >
            https://outlinedesigns.co.ke/
          </a>.
        </p>
      </div>
    </div>
  </div>
</template>
