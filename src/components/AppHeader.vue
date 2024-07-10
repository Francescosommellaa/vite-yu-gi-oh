<script>

export default {
    name: "AppHeader",
};

</script>

<template>

<div>
    <img src="https://th.bing.com/th/id/R.fc7e0dc9e6aa7098fad7d4c6cf12b4f9?rik=WDGP5hthzVRcXQ&riu=http%3a%2f%2fimg2.wikia.nocookie.net%2f__cb20131129140054%2fyugioh%2fimages%2f6%2f61%2fYugioh_Logo.png&ehk=rLjj1tbjHmMa1ijemgUXLtPrujJmOR0Zs8OZFj5dIag%3d&risl=&pid=ImgRaw&r=0" alt="">
    <h1>Yu-Gi-Oh Api</h1>
</div>


</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as * ;
@use '../styles/partials/variables' as * ;


div {
    @include center();
    height: 60px;

    img {
        height: 40px;
    }
}
</style>