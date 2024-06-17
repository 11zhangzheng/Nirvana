<template>
    <div id="app">
      <div class="personal-center">
        <div class="header">
          <h1>个人中心</h1>
        </div>
        <div class="info">
          <p>身高: 180cm</p>
          <p>体重: 75kg</p>
          <p>年龄: 23岁</p>
        </div>
        <div class="navigation">
          <ul>
            <li>更新资料</li>
            <li>数据</li>
            <li>进度</li>
            <li>通知</li>
            <li>设置</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        // 你可以在这里添加更多的状态数据
      };
    }
  };
  </script>
  
  <style scoped>
  #app {
    margin: auto;
    border-radius: 15px;
    border: 7px solid black;
    height: 1440px;
    width: 810px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .personal-center {
    width: 100%;
    text-align: center;
  }
  
  .header h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  .info p {
    margin: 5px 0;
    font-size: 1.2em;
  }
  
  .navigation ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 30px;
  }
  
  .navigation li {
    font-size: 1.1em;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    transition: background-color 0.3s;
  }
  
  .navigation li:hover {
    background-color: #f0f0f0;
  }