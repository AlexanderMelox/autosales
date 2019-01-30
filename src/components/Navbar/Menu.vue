<template>
  <ul :class="['menu', { open: open }]">
    <li class="menu__list-item">
      <a class="menu__link" href="#">Cars for Sale</a>
    </li>
    <li class="menu__list-item">
      <a class="menu__link" href="#">Sell My Car</a>
    </li>
    <li class="menu__list-item">
      <a class="menu__link" href="#">Find a Dealer</a>
    </li>
    <li class="menu__list-item">
      <a class="menu__link" href="#">Contact Us</a>
    </li>
    <li class="menu__list-item">
      <a class="menu__link" href="#">
        <img class="menu__icon" src="../../assets/img/icon-search-white.svg" alt="Search icon">
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["open"]
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-brand--01);
  width: 100%;
  height: 100vh;
  list-style: none;
  z-index: 1500;
  font-size: 2rem;
  font-weight: bold;
  transition: all 0.2s ease-out;
  visibility: hidden;
  opacity: 0;
}

@media only screen and (min-width: 48em) {
  .menu {
    font-size: 2.5rem;
  }
}

@media only screen and (min-width: 64em) {
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    width: auto;
    height: auto;
    list-style: none;
    z-index: 1500;
    font-size: 1.4rem;
    visibility: visible;
    opacity: 1;
  }
}

.menu.open {
  opacity: 1;
  visibility: visible;
}

.menu__list-item {
  margin: 1rem;
}

.menu__link:link,
.menu__link:visited {
  display: inline-block;
  color: var(--color-text-light--01);
  text-decoration: none;
  padding: 1rem 2rem;
  transition: all 0.2s;
  border-bottom: 2px solid transparent;
}

@media only screen and (min-width: 64em) {
  .menu__link:link,
  .menu__link:visited {
    padding: 1.3rem 1.5rem;
  }

  .menu__link:hover,
  .menu__link:active {
    color: var(--color-brand--04);
    transform: translateY(-1px);
    border-bottom: 3px solid var(--color-brand--04);
  }
}

.menu__icon {
  width: 2.4rem;
}
</style>