<template>
  <div class="hello">
    <swiper :options="swiperOption" ref="mosSwiper">
      <!--渲染内容-->
      <swiper-slide v-bind:key=banner.key v-for="banner in banners">
        <div>{{banner.tilte}}</div>
        <img class="banner-img" :src="banner.uri">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'home-swiper',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        observeParent: true
      },
      banners: [
        {tilte: '1号', uri: 'static/images/banner1.jpg', key: '1'},
        {tilte: '2号', uri: 'static/images/banner2.jpg', key: '2'},
        {tilte: '3号', uri: 'static/images/banner3.jpg', key: '3'}
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mosSwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(0, 3000, false)
  }
}
</script>
<style lang="sass-loader">
  .banner-img {
    max-width: 100%;
    overflow: hidden;
  }
</style>
