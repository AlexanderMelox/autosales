<template>
  <div>
    <section class="showcase showcase--reversed">
      <div class="row">
        <div class="showcase__images">
          <img src="../../assets/img/Car-2.jpg" alt="Honda Sedan">
          <img src="../../assets/img/Car-7.jpg" alt="Honda SUV">
        </div>
        <div class="showcase__text padding-right">
          <h2 class="h2 margin-bottom-tiny">Honda Cars and SUVs</h2>
          <p
            class="paragraph"
          >Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.</p>
          <Button text="View All" link="#" class="btn--tertiary"/>
        </div>
      </div>
    </section>
    <section class="showcase">
      <div class="row">
        <div class="showcase__images">
          <img src="../../assets/img/Car-3.jpg" alt="Audi Sedan">
          <img src="../../assets/img/Car-4.jpg" alt="Audi SUV">
        </div>
        <div class="showcase__text padding-left">
          <h2 class="h2 margin-bottom-tiny">Audi Cars and SUVs</h2>
          <p
            class="paragraph"
          >Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.</p>
          <Button text="View All" link="#" class="btn--tertiary"/>
        </div>
      </div>
    </section>
    <section class="showcase showcase--reversed">
      <div class="row">
        <div class="showcase__images">
          <img src="../../assets/img/Car-8.jpg" alt="Chevy Sedan">
          <img src="../../assets/img/Car-1.png" alt="Chevy SUV">
        </div>
        <div class="showcase__text padding-right">
          <h2 class="h2 margin-bottom-tiny">Chevy Cars, Trucks, and SUVs</h2>
          <p
            class="paragraph"
          >Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.</p>
          <Button text="View All" link="#" class="btn--tertiary"/>
        </div>
      </div>
    </section>
    <section class="showcase">
      <div class="row">
        <div class="showcase__images">
          <img src="../../assets/img/Car-5.jpg" alt="Audi Sedan">
          <img src="../../assets/img/Car-6.jpg" alt="Audi SUV">
        </div>
        <div class="showcase__text padding-left">
          <h2 class="h2 margin-bottom-tiny">Ford Cars, Trucks, and SUVs</h2>
          <p
            class="paragraph"
          >Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.</p>
          <Button text="View All" link="#" class="btn--tertiary"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (min-width: 48em) {
  .showcase .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 2rem;
    align-items: center;
  }
}

.showcase--reversed {
  background-color: var(--color-ui--01);
}

/* Reverses the order */
@media only screen and (min-width: 48em) {
  .showcase--reversed .row .showcase__text {
    grid-column: 1;
    grid-row: 1;
    /* padding-right: 9.5rem; */
  }
  .showcase--reversed .row .showcase__images {
    grid-column: 2;
    grid-row: 1;
  }
}

@media only screen and (min-width: 64em) {
  .padding-left {
    padding-left: 9.5rem;
  }

  .padding-right {
    padding-right: 9.5rem;
  }
}

.showcase__images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;
  margin-bottom: 2rem;
}

@media only screen and (min-width: 48em) {
  .showcase__images {
    align-items: center;
    margin-bottom: 2rem;
  }
}

.showcase__images img {
  width: 100%;
}
</style>