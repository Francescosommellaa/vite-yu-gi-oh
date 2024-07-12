<script>

export default {
    name: "SingleCard",
    props: ['info'],
}

</script>

<template>
    <div class="card">
        <img :src="info.card_images[0].image_url" :alt="info.name">
        <h4>{{ info.name }}</h4>
        <span>{{ info.archetype }}</span>
    </div>
</template>

<style lang="scss" scoped>

.card {
    background-color: #D48F38;
    width: calc(100% / 5 - 20px);
    text-align: center;
    padding-bottom: 0.4em;
    color: white;

    img {
        width: 100%;
    }
}
</style>