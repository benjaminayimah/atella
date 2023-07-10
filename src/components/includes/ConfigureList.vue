<template>
    <div class="house-list br-16 flx-grow-1 bg-white">
        <div :data-type="!cover ? 'no-cover' : ''" class="bg-img br-16 mb-16" :style="{ backgroundImage: 'url('+item.image+')'}"></div>
        <div>
            <h4>{{ item.name }}</h4>
            <div v-if="item.sub_title " class="mb-8 fs-09">{{ item.sub_title }}</div>
            <span v-if="item.price" class="list-pill br-32">{{ item.price }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConfigureList',
    props: ['item', 'cover']
}
</script>

<style lang="scss" scoped>
.house-list{
    padding: 8px;
    border: 1px solid #F0F0F0;
    transition: 100ms border;
    &:hover {
        border-color: #000;
    }
}
.list-pill{
    padding: 6px 18px;
    background: #F6F6F6;
    display: inline-flex;
}
.bg-img {
    background: rgba(198, 189, 179, 0.19);
    height: 120px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.bg-img:not([data-type=no-cover]) {
    background-size: cover;
}
</style>