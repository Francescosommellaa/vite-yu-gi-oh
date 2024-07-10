<script>

export default {
    name: "SingleCard",
    props: ['info'],
}

</script>

<template>
    <div class="card">
        <img :src="info.card_images[2]" :alt="info.name">
        <h3>{{ info.name }}</h3>
        <span>{{ info.archetype }}</span>
    </div>
</template>

<style lang="scss" scoped>

.card {
    background-color: #D48F38;
    width: calc(100% / 5 - 20px);
    text-align: center;
    padding-bottom: 0.6em;
    color: white;

    img {
        height: 100%;
        width: 100%;
    }
}
</style>