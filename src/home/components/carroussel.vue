<script setup>
import { ref, computed } from "vue";

const slides = ref([
  {
    image: "https://www.facile-anglais.com/images/img/tulip.jpg",
    text: "Découvrez nos offres",
    link: "/offres",
  },
  {
    image: "https://www.facile-anglais.com/images/img/tulip.jpg",
    text: "Nos services exclusifs",
    link: "/services",
  },
  {
    image: "https://www.facile-anglais.com/images/img/tulip.jpg",
    text: "Contactez-nous",
    link: "/contact",
  },
]);

const options = ref({
  type: "loop",
  perPage: 1,
  autoplay: true,
  interval: 3000,
  arrows: true,
  pagination: true,
});

const urk = computed(() => {
  return require("../../assets/illustrations/photos/automne.avif");
});
</script>

<template>
  <h1>Carroussel</h1>
  <!-- <img
    src="https://www.facile-anglais.com/images/img/tulip.jpg"
    alt="Slide Image"
    class="slide-image"
  /> -->
  <Splide :options="options" class="carousel">
    <SplideSlide v-for="(slide, index) in slides" :key="index">
      <p>{{ slide.image }}</p>
      <div class="slide-content">
        <img :src="slide.image" alt="Slide Image" class="slide-image" />
        {{ slide.imageComponent }}
        <a :href="slide.link" class="slide-text">{{ slide.text }}</a>
      </div>
    </SplideSlide>
  </Splide>
</template>

<style scoped>
.carousel {
  width: 800px;
  margin: auto;
}

.slide-content {
  position: relative;
  text-align: center;
}

.slide-image {
  width: 100%;
  border-radius: 10px;
}

.slide-text {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2em;
}

.slide-text:hover {
  background: rgba(0, 0, 0, 0.8);
}
</style>
