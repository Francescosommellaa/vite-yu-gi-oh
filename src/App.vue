<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppSelect from './components/AppSelect.vue';
import axios from 'axios';

// import store
import { store } from './store';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSelect,
    AppContent,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCard(){
      let endPoint = store.apiURL;

      if(store.selectText !== ""){
        endPoint += '?${apiNameParam}=${selectText}'
      }

      axios.get(endPoint)
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
    <AppSelect @select="getCard"/>
    <AppContent />
  </main>
</template>

<style lang="scss">
  @use './styles/partials/mixins' as *;
  @use './styles/partials/variables' as *;
  @use './styles/general.scss' as *;
</style>

