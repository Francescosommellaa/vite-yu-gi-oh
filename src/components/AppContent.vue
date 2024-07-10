<script>
import SingleCard from './SingleCard.vue'

export default {
    name: "AppContent",
    conponents: {
        SingleCard,
    },

    data() {

    }
}

</script>

<template>

    <div class="container">
        <div class="container-card">
            <div class="counter">
                <span>Trovate N carte</span>
            </div>
            <div class="card-container">
                <SingleCard />
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

.container {
    background-color: #D48F38;
    height: calc(100vh - 60px);
    width: 100vw;
    padding: 1em 3em 0 3em;
    overflow: auto;

    .container-card {
        background-color: #fff;
        height: 100%;
        width: 100%;
        padding: 2em;

        .counter {
            background-color: #000;
            color: white;
            padding: 0.8em;
        }

        .card-container {
            display: flex;
            justify-content: space-between;
            align-items: start;
            flex-wrap: wrap;
            gap: 20px;
        }
    }
}

</style>