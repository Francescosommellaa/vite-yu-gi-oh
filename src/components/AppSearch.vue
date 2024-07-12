<script>
export default {
    name: "AppSearch",
    
    data() {
    }
}
</script>

<template>
    <div class="container">
        <select class="form-select form-select-lg mb-3" aria-label="Large select example">
            <option selected>Scegli l'archetipo</option>
            <option value="1">Alien</option>
            <option value="2">Arms</option>
            <option value="4">Noble Knight</option>
            <option value="5">Melodious</option>
            <option value="6">HERO</option>
            <option value="7">Archfiend</option>
            <option value="8">Umi</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        background-color: #D48F38;
        padding: 1em 3em;
    }
</style>