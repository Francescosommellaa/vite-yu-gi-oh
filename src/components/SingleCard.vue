<script>

export default {
    name: "SingleCard",
}

</script>

<template>
    <div class="card">
        <img src="" alt="carta yugioh">
        <h3>nome carta</h3>
        <span>tipo</span>
    </div>
</template>

<style lang="scss" scoped>

.card {
    background-color: #D48F38;
    width: calc(100% / 5 - 20px);
    text-align: center;
    padding-bottom: 0.6em;

    img {
        height: 100%;
        width: 100%;
    }
}
</style>