<template>
  <a :href="link" :class="['btn', ...className]" customStyles="{...style}">{{ text }}</a>
</template>

<script>
export default {
  props: ["link", "className", "text", "customStyles"]
};
</script>

<style scoped>
.btn {
  text-decoration: none;
  color: var(--color-text-light--01);
  display: inline-block;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem 3rem;
  transition: all 0.2s ease-in-out;
}

@media only screen and (min-width: 48em) {
  .btn {
    font-size: 1.6rem;
    padding: 1.2rem 3rem;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  .btn:active {
    transform: translateY(-1px);
  }
}

.btn--lg {
  font-size: 1.5rem;
  padding: 1rem 3rem;
}

@media only screen and (min-width: 48em) {
  .btn--lg {
    font-size: 1.8rem;
    padding: 1.4rem 4.5rem;
  }
}

@media only screen and (min-width: 64em) {
  .btn--lg {
    font-size: 2rem;
    padding: 1.4rem 6rem;
  }
}

.btn--primary {
  background-color: var(--color-brand--03);
}

.btn--secondary {
  background-color: var(--color-brand--02);
}

.btn--tertiary {
  background-color: var(--color-brand--04);
}
</style>