<template>
  <div>
    <button :class="['nav__button', { open: open }]" @click="toggleNav()">
      <span :class="['nav__icon']"></span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["open", "toggleNav"]
};
</script>

<style scoped>
/* Nav menu styles */
.nav__button {
  display: flex;
  justify-content: center;
  height: 5rem;
  width: 5rem;
  border: none;
  position: relative;
  z-index: 2000;
  background-color: transparent;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
}

.nav__button:focus {
  outline: none;
}

@media only screen and (min-width: 64em) {
  .nav__button {
    display: none;
  }
}

.nav__icon,
.nav__icon::before,
.nav__icon::after {
  width: 3rem;
  height: 3px;
  background-color: var(--color-text-light--01);
  display: inline-block;
}

.nav__icon {
  position: relative;
}

.nav__icon::before,
.nav__icon::after {
  content: "";
  position: absolute;
  left: 0;
  transition: all 0.2s;
}

.nav__icon::before {
  top: -0.8rem;
}

.nav__icon::after {
  bottom: -0.8rem;
}

/* Open states */
.nav__button.open .nav__icon {
  background-color: transparent;
}

.nav__button.open .nav__icon::before {
  transform: rotate(135deg);
  top: 0;
}

.nav__button.open .nav__icon::after {
  transform: rotate(-135deg);
  top: 0;
}
</style>