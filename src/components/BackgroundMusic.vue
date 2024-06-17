<template>
  <div id="app">
    <header>
      <input type="text" placeholder="输入搜索内容" v-model="searchText"/>
      <button @click="search">搜索</button>
    </header>

    <main>
      <section class="music-section">
        <h1>背景音乐 🎶</h1>

        <h2 class="section-title">热门</h2>
        <div class="music-items">
          <div class="music-item" v-for="(item, index) in hotItems" :key="index">
            <img :src="require(`@/assets/musicImages/${item.img}`)" :alt="item.title" />
            <button @click="playMusic(item.audioUrl)">播放</button>
          </div>
        </div>

        <h2 class="section-title">推荐</h2>
        <div class="music-items">
          <div class="music-item" v-for="(item, index) in recommendItems" :key="index">
            <img :src="require(`@/assets/musicImages/${item.img}`)" :alt="item.title" />
            <button @click="playMusic(item.audioUrl)">播放</button>
          </div>
        </div>

        <h2 class="section-title">收藏</h2>
        <div class="music-items">
          <div class="music-item" v-for="(item, index) in collectionItems" :key="index">
            <img :src="require(`@/assets/musicImages/${item.img}`)" :alt="item.title" />
            <button @click="playMusic(item.audioUrl)">播放</button>
          </div>
        </div>
      </section>
    </main>

    <audio ref="audioPlayer"></audio>
  </div>
</template>



<script>
import axios from "axios"
export default {
  data() {
    return {
      searchText:"",
      hotItems: [
        { img: '画板 1.png', title: '爆燃', audio: 'audio1.mp3' },
        { img: '画板 2.png', title: '舒缓', audio: 'audio2.mp3' },
      ],
      recommendItems: [
        { img: '画板 3.png', title: 'The Mass', audio: 'audio3.mp3' },
        { img: '画板 4.png', title: 'Call of Name', audio: 'audio4.mp3' },
      ],
      collectionItems: [
        { img: '画板 5.png', title: '收藏1', audio: 'audio5.mp3' },
        { img: '画板 6.png', title: '收藏2', audio: 'audio6.mp3' },
      ],
    };
  },
  methods: {
    search(){
      if(this.searchText.substring(0,1)=='#'){
        //触发标签查询
        axios({
          methods:'GET',
          url:this.$httpUrl+"/song/selectByTags",
          params:{
            tag:this.searchText.substring(1)
          }
          }).then(res=>{
          console.log(res.data.data,"here")
          })
      }else{
        //触发模糊查询
        axios({
          methods:'GET',
          url:this.$httpUrl+"/song/selectByFuzzy",
          params:{
            word:this.searchText
          }
          }).then(res=>{
            alert(res.data.data)
          })
      }
    },
    playMusic(audioUrl) {
      const audioPlayer = this.$refs.audioPlayer;
      audioPlayer.src = audioUrl;
      audioPlayer.play();
    }
  }
};
</script>


<style scoped>
/* 整体布局调整，适应给定的框架 */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* 防止水平滚动 */
}

#app {
  width: 810px; /* 与框架宽度一致 */
  height: 1440px; /* 与框架高度一致 */
  margin: auto;
  position: relative;
  border-radius: 15px;
  border: 7px solid black;
  overflow: hidden;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
}

/* 头部样式调整 */
header {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5; /* 背景色与框架保持一致 */
  border-bottom: 1px solid #ddd; /* 添加边框以区分区域 */
}

header input {
  flex-grow: 1; /* 让输入框占据剩余空间 */
  padding: 15px; /* 增加内边距 */
  margin-right: 20px; /* 增加与按钮之间的间距 */
  border-radius: 8px; /* 增加边框圆角 */
  border: 1px solid #ccc; /* 边框颜色 */
  font-size: 16px; /* 增加字体大小 */
  width: auto; /* 根据内容自适应宽度 */
}

header button {
  padding: 15px 40px; /* 增加按钮的内边距和宽度 */
  border-radius: 8px; /* 增加边框圆角 */
  border: none; /* 移除边框 */
  background-color: #42b983; /* 按钮背景色 */
  color: white; /* 字体颜色 */
  font-size: 16px; /* 增加字体大小 */
  cursor: pointer; /* 鼠标悬停时显示手形图标 */
}

/* 鼠标悬停按钮时的效果 */
header button:hover {
  background-color: #36976a; /* 悬停时改变按钮背景色 */
}

/* 主要内容样式调整 */
main {
  padding: 60px 30px; /* 增加上下间距 */
  flex-grow: 1; /* 让主内容区域占据剩余空间 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
}

.music-section {
  flex-grow: 1; /* 让音乐区域占据剩余空间 */
  width: 100%; /* 占满容器宽度 */
}

.music-section h1 {
  font-size: 40px;
}

.section-title {
  font-size: 28px; /* 增加标题字体大小 */
  margin-bottom: 30px; /* 增加标题与内容之间的间距 */
  color: #333; /* 字体颜色 */
  text-align: center; /* 标题居中 */
}

.music-items {
  display: flex;
  justify-content: center; /* 居中显示 */
  flex-wrap: wrap; /* 允许项目换行 */
  gap: 60px; /* 增加项目之间的间距 */
}

.music-item {
  width: 300px; /* 增加项目宽度 */
  height: 300px; /* 增加项目高度 */
  border-radius: 10px; /* 增加边框圆角 */
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 增加阴影效果 */
  display: flex;
  flex-direction: column; /* 调整为垂直布局 */
  justify-content: center;
  align-items: center;
  background-color: #fff; /* 背景色 */
}

.music-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; /* 保持图片比例填充容器 */
}

.music-item button {
  margin-top: 10px; /* 增加按钮与图片之间的间距 */
  padding: 10px 20px; /* 按钮内边距 */
  border: none; /* 移除按钮边框 */
  border-radius: 5px; /* 按钮圆角 */
  background-color: #42b983; /* 按钮背景色 */
  color: white; /* 按钮字体颜色 */
  cursor: pointer; /* 鼠标悬停时显示手形图标 */
}

.music-item button:hover {
  background-color: #36976a; /* 鼠标悬停时的按钮背景色 */
}
</style>
