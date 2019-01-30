<template>
  <a href="#" class="logo">
    <img class="logo__image" src="../../assets/img/logo-autosales.svg" alt="AutoSales Logo">
    <span class="logo__text">AutoSales.com</span>
  </a>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
}

.logo__image {
  width: 3rem;
  margin-right: 0.8rem;
}

@media only screen and (min-width: 48em) {
  .logo__image {
    width: 4.3rem;
    margin-right: 0.83rem;
  }
}

.logo__text {
  font-size: 1.5rem;
  color: var(--color-text-light--01);
  font-weight: bold;
  letter-spacing: normal;
}

@media only screen and (min-width: 48em) {
  .logo__text {
    font-size: 2.4rem;
  }
}
</style>