<template>
    <div id="app">
      <header>
        <input @focus="alert(1);sousuo()" type="text" placeholder="这是一个搜索框" v-model="searchQuery" />
        <button @click="search">搜索</button>
      </header>
      <main>
        <section class="fitness-summary">
          <div class="card" v-for="(item, index) in fitnessData" :key="index">
            <div>{{ item.value }}</div>
            <div>{{ item.label }}</div>
          </div>
        </section>
        <section class="course-selection">
          <div class="tabs">
            <button v-for="(tab, index) in tabs" :key="index" @click="selectTab(tab)" :class="{ active: selectedTab === tab }">
              {{ tab }}
            </button>
          </div>
          <div class="courses">
            <div v-for="(course, index) in filteredCourses" :key="index" class="course-card">
              <img :src="course.image" alt="course image" />
              <div>{{ course.title }}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
import router from '../router';

  export default {
    data() {
      return {
        searchQuery: '',
        fitnessData: [
          { value: '932 kcal', label: 'Strength' },
          { value: '2,314 steps', label: 'Walking' },
          { value: '15.23 km', label: 'Cycling' }
        ],
        tabs: ['力量', '有氧运动', '瑜伽', '冥想'],
        selectedTab: '力量',
        courses: [
          { title: 'Just breathe', type: '瑜伽', image: "./images11/Banner 1.png" },
          { title: 'Free your body', type: '瑜伽', image: './images22/Banner 2.png' },
          // 添加其他课程
        ]
      };
    },
    computed: {
      filteredCourses() {
        return this.courses.filter(course => course.type === this.selectedTab);
      }
    },
    methods: {
      search() {
        console.log('搜索内容:', this.searchQuery);
      },
      selectTab(tab) {
        this.selectedTab = tab;
      },
      sousuo() {
        alert(1)
        this.$router.push('/sousuo');
      }
    }
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
  
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
  }
  
  header input {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  header button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .fitness-summary {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  }
  
  .card {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 20px;
    width: 100px;
    text-align: center;
  }
  
  .course-selection {
    margin: 20px 0;
  }
  
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .tabs button {
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .tabs button.active {
    background-color: #42b983;
    color: white;
  }
  
  .courses {
    display: flex;
    justify-content: center;
  }
  
  .course-card {
    margin: 0 10px;
    text-align: center;
  }
  
  .course-card img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }
  </style>