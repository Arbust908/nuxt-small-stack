<template>
  <div class="app">
    <Logo class="logo" />
    <h1 class="title">
      <span class="Dark">Nuxt</span>
      <span class="light">small</span>
      <span class="regular">Stack</span>
    </h1>
    <h2 class="mode_color">Color mode: {{ $colorMode.value }}</h2>
    <select v-model="$colorMode.preference" class="mode_selector">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
    <section class="tour_grid">
      <article v-for="tour in tours" :key="`tour-${tour.id}`" class="tour_card">
        <img src="" alt="" />
        <h2>{{ tour.name }}</h2>
        <p>
          {{ tour.summary }}
        </p>
        <footer>
          {{ tour.difficulty }} - {{ tour.duration }} - ${{ tour.price }}
        </footer>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tours: [],
    }
  },
  async fetch() {
    this.tours = await this.$axios
      .get('/api/tours')
      .then((res) => res.data)
      .then((data) => data.tours || [])
  },
}
</script>
s

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>

<style lang="scss">
.app {
  font-family: 'Nunito', Arial, sans-serif;
  @apply mx-auto min-h-screen flex flex-col justify-center items-center text-center;
  .title {
    @apply font-bold block tracking-wide text-4xl;
    .dark {
      color: #2e495e;
    }
    .light {
      color: #00c48d;
    }
    .regular {
      color: #108775;
    }
  }
}
.logo {
  @apply max-w-xs w-10/12 mx-auto;
}
.tour {
  &_grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 6rem;
    @apply grid gap-4 w-10/12 mx-auto my-6;
  }
  &_card {
    @apply rounded-md shadow p-2 bg-gray-50 row-span-2 dark:bg-teal-900;
    h2 {
      @apply text-xl font-bold text-teal-600 tracking-normal;
    }
  }
}
.mode {
  &_color {
    @apply rounded px-4 py-2 border bg-white font-bold text-teal-700 w-10/12 mx-auto my-6;
  }
  &_selector {
    @apply rounded-full px-8 py-4 border bg-white text-teal-700;
  }
}
// .dark {
//   & .tour_card {
//     @apply bg-teal-900
//   }
// }
</style>
