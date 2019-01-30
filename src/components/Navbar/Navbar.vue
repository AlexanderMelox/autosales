<template>
  <nav class="nav">
    <div class="nav__brand">
      <Logo/>
    </div>
    <MenuIcon :open="open" :toggleNav="toggleNav"/>
    <Menu :open="open" :toggleNav="toggleNav"/>
  </nav>
</template>

<script>
import Logo from "../shared/Logo.vue";
import MenuIcon from "./MenuIcon.vue";
import Menu from "./Menu.vue";

export default {
  data: function() {
    return {
      open: false
    };
  },
  methods: {
    toggleNav() {
      if (this.open) {
        this.open = false;
        document.body.style.overflowY = "visible";
      } else {
        this.open = true;
        document.body.style.overflowY = "hidden";
      }
    }
  },
  components: {
    Logo,
    MenuIcon,
    Menu
  }
};
</script>

<style scoped>
/* Nav styles */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  background-color: var(--color-brand--01);
  z-index: 2000;
  overflow: hidden;
}

@media only screen and (min-width: 64em) {
  .nav {
    padding: 0 4rem;
  }
}

/* Logo styles */
.nav__brand {
  margin-right: auto;
  z-index: 2000;
}
</style>