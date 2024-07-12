<script>
// import store
import { store } from '../store';

export default {
    name: "AppSelect",
    
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <select class="form-select" v-model="store.selectText" @click.prevent="$emit('select')">
            <option selected>Scegli l'archetipo</option>
            <option value="Alien">Alien</option>
            <option value="Arms">Arms</option>
            <option value="Noble Knight">Noble Knight</option>
            <option value="Melodious">Melodious</option>
            <option value="HERO">HERO</option>
            <option value="Archfiend">Archfiend</option>
            <option value="Umi">Umi</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        background-color: #D48F38;
        padding: 1em 3em;
    }
</style>