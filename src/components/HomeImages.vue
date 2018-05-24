<template>
  <lazy-component>
    <div v-bind:key=image.key v-for="image in images">
      <img class="image-img" v-lazy="image.uri">
    </div>
  </lazy-component>
</template>
<script>

export default {
  name: 'home-images',
  data () {
    return {
      images: [
        {tilte: 'anime-1号', uri: 'static/images/anime1.jpg', key: '11'},
        {tilte: 'anime-2号', uri: 'static/images/anime2.png', key: '12'},
        {tilte: 'anime-3号', uri: 'static/images/anime3.jpg', key: '13'},
        {tilte: 'anime-4号', uri: 'static/images/anime4.jpg', key: '14'},
        {tilte: 'anime-5号', uri: 'static/images/anime5.jpg', key: '15'},
        {tilte: 'anime-6号', uri: 'static/images/anime6.jpg', key: '16'},
        {tilte: 'anime-7号', uri: 'static/images/anime7.jpg', key: '17'},
        {tilte: 'anime-8号', uri: 'static/images/anime8.jpg', key: '18'}
      ]
    }
  }
}
</script>
<style lang="sass-loader">
  .image-img {
    max-width: 100%;
    overflow: hidden;
  }
</style>
