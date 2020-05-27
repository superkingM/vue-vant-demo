<template>
  <div id="app">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
  <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
 <router-view></router-view>

 <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" @click="one">首页</van-tabbar-item>
  <van-tabbar-item icon="search" dot @click="two">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o" badge="5" @click="three">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o" badge="20" @click="calendar">标签</van-tabbar-item>
</van-tabbar>

  </div>
</template>

<script>
export default {
  name:'App',
  data() {
    return {
      active: 0,
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
    };
  },
  methods:{
    two(){
      this.$router.push({path:'/swipe'})
    },
    one(){
      this.$router.push({path:'/'})
    },
    three(){
      this.$router.push({path:'/coupon'})
    },
    calendar(){
      this.$router.push({path:'/calendar'})
    }
  }
};
</script>
