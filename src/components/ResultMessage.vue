<script>


// import store
import { store } from '../store';

export default {
    name: "ResultMessage",
    data() {
        return {
            store,
        }   
    },
    computed: {
        resultNumber(){
            return store.AppContent.length;
        }
    }
};

</script>

<template>
    
    <span>Trovate {{ resultNumber }} carte</span>

</template>

<style lang="scss" scoped>
</style>