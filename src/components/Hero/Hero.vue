<template>
  <header class="hero">
    <div class="row">
      <div class="hero__text-box">
        <div>
          <h1 class="h1">The Car of Your Dreams is Only a Click Away!</h1>
          <Button text="Get Started Now" link="#" class="btn--primary btn--lg"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  width: 100%;
  height: 30rem;
  padding: 0 2rem;
  background-image: url("../../assets/img/hero.jpg");
  background-repeat: no-repeat;
  background-position: 55% center;
  background-size: cover;
}

@media only screen and (min-width: 48em) {
  .hero {
    height: 40rem;
  }
}

@media only screen and (min-width: 64em) {
  .hero {
    height: 50rem;
  }
}

.hero .row {
  height: 100%;
  display: flex;
  align-items: center;
}

.hero__text-box .h1 {
  max-width: 30rem;
  margin-bottom: 2rem;
}

@media only screen and (min-width: 48em) {
  .hero__text-box .h1 {
    max-width: 46rem;
    margin-bottom: 3rem;
  }
}

@media only screen and (min-width: 64em) {
  .hero__text-box .h1 {
    max-width: 61.5rem;
    margin-bottom: 4rem;
  }
}
</style>
