<template>
    <div id="app">
        <header-bar v-if="!$route.meta.noNeedHeader" />
        <router-view />
    </div>
</template>
<script>
import headerBar from '@/components/headerBar/index.vue';
export default {
    components: {
        headerBar
    }
};
</script>
<style lang="scss">
#app {
}
</style>
