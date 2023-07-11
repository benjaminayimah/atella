<template>
    <div class="total-wrapper">
        <div class="total-card br-16 flx jc-sb gap-24">
            <div class="flx column">
                <div class="flx gap-8">
                    <div class="fs-105rem">$192,000</div>
                    <span class="gray">or</span>
                    <div class="gray-2">$1,290/Mon</div>
                </div>
                <div class="gray">Estimated cost</div>
            </div>
            <div class="centered">
                <button class="button-primary br-32 confirm-btn">Confirm availability</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TotalCard'
}
</script>

<style lang="scss" scoped>
.total-wrapper{
    container-type: inline-size;
}
@container(inline-size <= 460px) {
    .total-card {
        flex-direction: column
    }
    .centered {
        place-items: stretch
    }
}
</style>