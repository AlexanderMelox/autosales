<template>
  <footer class="footer">
    <Logo/>
    <ul class="footer__nav">
      <li class="footer__nav-item">
        <a class="footer__nav-links" href="#">Copyright &copy; 2016 AutoSales.com</a>
      </li>
      <li class="footer__nav-item">
        <a class="footer__nav-links" href="#">All rights reserved</a>
      </li>
      <li class="footer__nav-item">
        <a class="footer__nav-links" href="#">Privacy Policy</a>
      </li>
    </ul>
  </footer>
</template>

<script>
import Logo from "../shared/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  background-color: var(--color-brand--01);
  height: 15rem;
}

@media only screen and (min-width: 48em) {
  .footer {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
}

@media only screen and (min-width: 64em) {
  .footer {
    padding: 0 4rem;
  }
}

.footer__nav {
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 1rem;
}

@media only screen and (min-width: 48em) {
  .footer__nav {
    flex-direction: row;
    justify-content: center;
    width: auto;
    margin-top: 0;
  }
}

.footer__nav-item {
  margin: 0rem;
}

@media only screen and (min-width: 48em) {
  .footer__nav-item:not(:last-child) {
    border-right: 1px solid var(--color-text-dark--02);
  }
}

.footer__nav-links:link,
.footer__nav-links:visited {
  color: var(--color-text-dark--02);
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  display: inline-block;
  transition: all 0.2s;
}

@media only screen and (min-width: 48em) {
  .footer__nav-links:link,
  .footer__nav-links:visited {
    padding: 0 1rem;
    font-size: 1.4rem;
  }

  .footer__nav-links:hover,
  .footer__nav-links:active {
    transform: translateY(-1px);
    color: var(--color-brand--03);
  }
}
</style>