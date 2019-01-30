<template>
  <div id="app">
    <Navbar/>
    <Hero/>
    <main>
      <Find/>
      <Showcase/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Hero from "./components/Hero/Hero.vue";
import Find from "./components/Find/Find.vue";
import Showcase from "./components/Showcase/Showcase.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  components: {
    Navbar,
    Hero,
    Find,
    Showcase,
    Footer
  }
};
</script>

<style>
</style>
