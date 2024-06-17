<template>
    <header class="header">
      <input class="search-bar" type="text" placeholder="输入想搜索内容">
      <h1>Let's get fit 🔥</h1>
      <div class="icons">
        <i class="notification-icon">🔔</i>
        <i class="settings-icon">⚙️</i>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f8f8f8;
  }
  .search-bar {
    flex: 1;
    margin-right: 20px;
    padding: 5px;
  }
  .icons i {
    margin-left: 10px;
    cursor: pointer;
  }
  </style>
  