<template>
  <div style="position: relative">
    <mu-icon-button class='icon-back' icon='arrow_back' slot="left" @click='goBack()' />
    <div class="image-wrap" :style="'background-image: url('+movie.cover+')'">
    </div>
    <div class="title-border">
      <div class="title-info">
        <div class="title-image">
          <img :src='movie.cover' />
        </div>
        <div class="title-text">
          <p>{{movie.av_name}}</p>
        </div>
      </div>
    </div>
    <div class="info">
      <p class="info-content"><span class="info-title">AV女优名</span><span class="info-text">{{movie.av_name}}</span></p>
      <p class="info-content"><span class="info-title">源氏名</span><span class="info-text">{{movie.name}}</span></p>
      <p class="info-content"><span class="info-title">身高</span><span class="info-text">{{movie.height}}cm</span></p>
      <p class="info-content"><span class="info-title">胸围</span><span class="info-text">{{movie.size_b}}</span></p>
      <p class="info-content"><span class="info-title">腰围</span><span class="info-text">{{movie.size_w}}</span></p>
      <p class="info-content"><span class="info-title">臀围</span><span class="info-text">{{movie.size_h}}</span></p>
      <p class="info-content"><span class="info-title">在籍店舗名</span><span class="info-text"><a :href ="movie.shop_url" target="_blank">{{movie.shop_name}}</a></span></p>
      <p class="info-content"><span class="info-title">种类</span><span class="info-text">{{movie.genre}}</span></p>
      <p class="info-content"><span class="info-title">区域</span><span class="info-text">{{movie.area}}</span></p>
      <p class="info-content"><span class="info-title">电话</span><span class="info-text"><a :href=" 'tel:' + movie.tel" >{{movie.tel}}</a></span></p>
      <p class="info-content"><span class="info-title">女优新闻</span><span class="info-text"><a :href ="'https://cse.google.com/cse?cx=005344802183955803914%3Ascary4-gbfe&q='+movie.av_name+'&searchsubmit=true' " target="_blank">{{movie.av_name}}</a></span></p>
      <p class="info-content"><span class="info-title">女优参考片源</span><span class="info-text"><a :href ="'https://avgle.com/search/videos?search_query='+movie.av_name+'&search_type=videos' " target="_blank">{{movie.av_name}}</a></span></p>
      <p class="info-content"><span class="info-title">女优DMM</span><span class="info-text"><a :href ="'https://www.dmm.co.jp/search/=/searchstr='+movie.av_name+'/analyze=V1EBAVcHUAE_/n1=FgRCTw9VBA4GAVhfWkIHWw__/n2=Aw1fVhQKX1ZRAlhMUlo5QQgBU1lR/sort=ranking/' " target="_blank">{{movie.av_name}}</a></span></p>
    </div>
  </div>
</template>

<script>
  import Star from 'components/Star';
  import router from './../../router';
  import { fetchMovieSubject } from './../../store/movies/api';

  export default {
    name: 'averSubject',
    components: {
      Star,
    },
    data() {
      return {
        movie: {},
      };
    },
    watch: {
      $route(to) {
        this.setPage(to.params.id);
      },
    },
    mounted() {
      this.setPage(this.$route.params.id);
    },
    methods: {
      goBack() {
        router.go(-1);
      },
      setPage(id) {
        fetchMovieSubject(id).then((res) => {
          console.log(res);
          this.movie = res;
        });
      },
    },
  };

</script>
<style lang="css" scoped>
.image-wrap{
  width: 100%;
  padding-top: 80%;
  background: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  overflow: hidden;
}
.icon-back{
  position: absolute;
  top: 0;
  color: #fff;
  text-shadow: 0px 0px 3px #ddd;
}
.title-border{
  padding: 20px;
  box-shadow: 0 0px 15px 5px #ccc;
}
.title-info{
  position: relative;
}
.title-image{
  width: 30%;
  position: absolute;
  bottom: 0;
}
.title-image>img{
  width: 100%;
  display: block;
}
.title-text{
  position: relative;
  font-size: 16px;
  font-weight: 600;
  padding: 4px 0 4px 30%;
}
.title-text>p{
  padding-left: 15px;
  margin: 0;
}
.star{
  display: flex;
  justify-content: center;
  background: #eee;
  font-size: 42px;
  color: #ff6f00;
  padding: 8px 0;
}
.star-icon{
  margin: 20px 0;
  color: #ff6f00;
}
.info{
  margin: 30px;
}
.info-content>span{
  display: block;
}
.info-text{
  color: #888;
}
.summary{
  padding: 30px 20px;
  background: #eee;
}
.author{
  margin: 25px;
}
.author-type{
  padding: 0px 5px;
  margin: 0;
}
.author-elem{
  padding:5px;
}
.author-wrap{
  position: relative;
  display: block;
  overflow: hidden;
}
.author-image{
  float: left;
  width: 50%;
  border-radius: 2px  0 0 2px;
  overflow: hidden;
}
.author-padding{
  width: 100%;
  padding-top: 141%;
  background-size: cover;
  -moz-background-size: cover;
}
.author-name{ 
  float: left;
  width: 50%;
  padding: 10px 6px;
}

    
</style>
