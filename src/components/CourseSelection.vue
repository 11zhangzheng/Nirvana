<template>
    <div class="course-selection">
      <ul class="categories">
        <li>力量</li>
        <li>有氧运动</li>
        <li class="active">瑜伽</li>
        <li>冥想</li>
      </ul>
      <div class="courses">
        <div class="course">
          <img src="src/components/images11/Banner 1.png" alt="Just Breathe">
          <p>Just breathe</p>
        </div>
        <div class="course">
          <img src="src/components/images22/Banner 2.png" alt="Free">
          <p>Free</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CourseSelection'
  }
  </script>
  
  <style scoped>
  .course-selection {
    text-align: center;
    margin-top: 20px;
  }
  .categories {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
  }
  .categories li {
    cursor: pointer;
    padding: 10px;
  }
  .categories .active {
    font-weight: bold;
    border-bottom: 2px solid #000;
  }
  .courses {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  .course {
    text-align: center;
  }
  .course img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  </style>
  