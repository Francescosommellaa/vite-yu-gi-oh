<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppSearch from './components/AppSearch.vue';
import axios from 'axios';

// import store
import { store } from './store';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSearch,
    AppContent,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCard(){
      axios.get(store.apiURL)
      .then(res => {
        console.log(res.data.data);
        store.AppContent = res.data.data;
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  created() {
    this.getCard();
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <AppSearch />
    <AppContent />
  </main>
</template>

<style lang="scss">
  @use './styles/partials/mixins' as *;
  @use './styles/partials/variables' as *;
  @use './styles/general.scss' as *;
</style>

