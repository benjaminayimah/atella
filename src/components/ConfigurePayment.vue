<template>
    <div>
        Payment
    </div>
</template>

<script>
export default {
    name: 'ConfigurePayment',
    methods: {
        setPage() {
            const data = { page: 3, title: 'Atella commitment fee', sub_title: 'You are to pay a fixed amount to show your commitment to getting your atella.'}
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