<template>
  <section class="find">
    <div class="row">
      <div class="find__form-group">
        <div class="find__select-box">
          <select class="find__select" v-model="selectedMake">
            <option v-for="(make, i) in makers" :key="make + i" :value="make">{{ make }}</option>
          </select>
          <i class="find__check fas fa-angle-down"></i>
        </div>
      </div>
      <div class="find__form-group">
        <div class="find__select-box">
          <select class="find__select">
            <option v-for="(model, i) in models[selectedMake]" :key="model + i">{{ model }}</option>
          </select>
          <i class="find__check fas fa-angle-down"></i>
        </div>
      </div>
      <div class="find__form-group">
        <div class="find__select-box">
          <select class="find__select">
            <option v-for="(price, i) in prices" :key="price + i">{{ price }}</option>
          </select>
          <i class="find__check fas fa-angle-down"></i>
        </div>
      </div>
      <div class="find__form-group find__form-group--btn">
        <Button
          text="Find my Dream Car"
          link="#"
          class="btn--secondary btn--find"
          :style="{ display: 'block' }"
        />
      </div>
    </div>
  </section>
</template>

<script>
const makers = ["Make", "Audi", "BMW", "Honda", "Toyota"];

export default {
  data: function() {
    return {
      makers,
      selectedMake: makers[0],
      models: {
        Make: ["Model"],
        Audi: ["A3", "A4", "RS5"],
        BMW: ["M3", "M4", "i8", "X5"],
        Honda: ["Civic", "Accord", "Civic Type R", "Pilot"],
        Toyota: ["Camry", "Corolla", "Highlander"]
      },
      prices: [
        "Price",
        "$0 - $5,000",
        "$5,000 - $10,000",
        "$10,000 - $15,000",
        "$15,000 - $20,000",
        "$20,000 - $25,000",
        "$25,000 - $30,000",
        "$30,000 - $35,000",
        "$35,000 - $40,000",
        "$40,000 - $50,000",
        "$50,000+"
      ]
    };
  }
};
</script>

<style>
@media only screen and (min-width: 48em) {
  .find .row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 4.5rem 4.5rem;
    grid-template-areas:
      "select select select"
      "button button button";
    grid-gap: 2rem;
  }
}

@media only screen and (min-width: 64em) {
  .find .row {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 4.5rem;
    grid-template-areas: "select select select button";
  }
}

.find__form-group {
  position: relative;
  display: block;
  margin: 0 auto;
}

@media only screen and (min-width: 48em) {
  .find__form-group {
    margin: 0;
  }
}

.find__form-group:not(:last-child) {
  margin-bottom: 2rem;
}

.find__select {
  width: 100%;
  background: transparent;
  border: 2px solid var(--color-ui--02);
  border-radius: 0 !important;
  color: var(--color-text-dark--03);
  font: inherit;
  display: block;
  font-weight: bold;
  font-size: 1.6rem;
  padding: 1.2rem 2.1rem;
  -webkit-appearance: button;
}

@media only screen and (min-width: 48em) {
  .find__select {
    padding: 1rem 0 1rem 2rem;
  }
}

.find__select-box {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.find__check {
  position: absolute;
  font-size: 2rem;
  color: var(--color-ui--02);
  top: 1.9rem;
  right: 2.2rem;
}

@media only screen and (min-width: 48em) {
  .find__check {
    top: 1.6rem;
  }
}

.find__select:focus {
  outline: none;
}

.find__form-group--btn {
  grid-area: button;
}
</style>
