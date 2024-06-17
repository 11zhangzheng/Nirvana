<template>
  <div id="app">
    <header>
      <input @click="search" type="text" placeholder="这是一个搜索框"/>
      <button>搜索</button>
    </header>

    <main>
      <section class="daily-plan">
        <h1>Let's get fit 🔥</h1>
        <div class="plan-items">
          <div class="plan-item">
            <img src="./images11/Activities.png" alt="Strength" />
            <p>932 kcal</p>
            <p>Strength</p>
          </div>
          <div class="plan-item">
            <img src="./images11/Activities2.png" alt="Walking" />
            <p>2,314 steps</p>
            <p>Walking</p>
          </div>
          <div class="plan-item">
            <img src="./images11/Activities3.png" alt="Cycling" />
            <p>15.23 km</p>
            <p>Cycling</p>
          </div>
        </div>
      </section>
      <section class="course-selection">
        <h2>课程选择</h2>
        <nav>
          <button :class="{ active: selectedCourse === '力量' }" @click="selectCourse('力量')">力量</button>
          <button :class="{ active: selectedCourse === '有氧运动' }" @click="selectCourse('有氧运动')">有氧运动</button>
          <button :class="{ active: selectedCourse === '瑜伽' }" @click="selectCourse('瑜伽')">瑜伽</button>
          <button :class="{ active: selectedCourse === '冥想' }" @click="selectCourse('冥想')">冥想</button>
        </nav>
        <div class="course-image">
          <img v-if="selectedCourse === '力量'" src="./images11/muscle.png" alt="力量" />
          <img v-if="selectedCourse === '有氧运动'" src="./images11/Rectangle.png" alt="有氧运动" />
          <img v-if="selectedCourse === '瑜伽'" src="./images22/Banner 2.png" alt="瑜伽" />
          <img v-if="selectedCourse === '冥想'" src="./images11/Banner 1.png" alt="冥想" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCourse: '冥想'
    };
  },
  methods: {
    search() {
      this.$router.push('/search');
    },
    selectCourse(course) {
      this.selectedCourse = course;
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

/* 应用整体框架样式 */
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

/* 主内容区域样式 */
main {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 日常计划样式 */
.daily-plan {
  width: 100%;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.daily-plan h1 {
  font-size: 50px;
}

.plan-items {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.plan-item {
  text-align: center;
  margin: 0 10px;
}

.plan-item img {
  width: 240px; /* 根据需要调整图片大小 */
  height: auto;
}

.plan-item p {
  font-weight: bold;
}

/* 课程选择样式 */
.course-selection {
  width: 100%;
  margin-top: 30px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
}

.course-selection h2 {
  margin-bottom: 15px;
  font-size: 30px;
  text-align: left;
}

.course-selection nav {
  margin-bottom: 20px;
}

.course-selection nav button {
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  background-color: #ccc;
  color: #333;
  cursor: pointer;
}

.course-selection nav button.active {
  background-color: #42b983;
  color: white;
}

.course-image {
  margin-top: 20px;
}

.course-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

/* 响应式设计 */
@media (max-width: 810px) {
  header input, header button {
    width: calc(50% - 10px); /* 调整为半宽，留出间隔 */
  }

  .plan-items, .course-selection nav {
    flex-direction: column;
    align-items: center;
  }

  .plan-item, .course-selection nav button {
    margin: 10px 0;
  }
}
</style>
