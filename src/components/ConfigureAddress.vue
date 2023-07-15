<template>
    <div>
        Address
    </div>
</template>

<script>
export default {
    name: 'ConfigureAddress',
    methods: {
        setPage() {
            const data = { page: 2, title: 'Where is your backyard going', sub_title: 'Share your street address to verify availability and refine your installation estimate.'}
            this.$store.commit('setConfigTab', data)
        }
    },
    mounted() {
        this.setPage()
    }
}
</script>

<style lang="scss" scoped>

</style>