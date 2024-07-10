<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent,
  }
}
</script>

<template>
  <AppHeader/>
  <AppContent/>
</template>

<style lang="scss">
  @use './styles/partials/mixins' as *;
  @use './styles/partials/variables' as *;
  @use './styles/general.scss' as *;
</style>

