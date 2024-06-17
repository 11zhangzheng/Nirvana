<template>
    <div>
      <header>
        <button @click="goBack">返回</button>
      </header>
      <main>
        <h1>{{ course.title }}</h1>
        <img :src="course.image" alt="course image" />
        <p>{{ course.description }}</p>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        course: {}
      };
    },
    created() {
      const courseId = this.$route.params.id;
      // 模拟从数据源获取课程详细信息
      const courseData = [
        { id: 1, title: 'Just breathe', type: '瑜伽', image: 'yoga1.jpg', description: '详细描述课程1' },
        { id: 2, title: 'Free your body', type: '瑜伽', image: 'yoga2.jpg', description: '详细描述课程2' },
        // 添加其他课程详细信息
      ];
      this.course = courseData.find(course => course.id == courseId);
    },
    methods: {
      goBack() {
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style>
  /* 样式保持不变 */
  </style>