<template>
    <div class="search-history">
      <header>
        <input type="text" v-model="searchQuery" placeholder="输入搜索内容" @keyup.enter="search" />
        <button @click="search">Go</button>
      </header>
      <main>
        <h2>搜索历史</h2>
        <ul>
          <li v-for="history in searchHistories" :key="history">
            {{ history }}
          </li>
        </ul>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchHistory',
    data() {
      return {
        searchQuery: '',
        searchHistories: [
          '二手玫瑰',
          '李纹',
          '告五人',
          '一了百了',
          '恐怖音乐BGM',
          '奥特曼',
          '林子祥分分钟需要你',
          '写作',
          '咖啡图静',
          '周杰伦'
          // 这里可以添加更多的搜索历史项
        ]
      };
    },
    methods: {
      search() {
        if (this.searchQuery.trim() !== '') {
          // 将新的搜索项添加到历史记录中，并去重
          this.searchHistories.unshift(this.searchQuery);
          this.searchQuery = ''; // 清空搜索框
          // 这里可以添加代码来处理实际的搜索逻辑
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .search-history {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
  
  header {
    display: flex;
    justify-content: center;
    padding: 20px;
    background: #f5f5f5;
  }
  
  header input {
    flex-grow: 1; /* 让输入框占据剩余空间 */
    padding: 15px; /* 增加内边距 */
    margin-right: 20px; /* 增加与按钮之间的间距 */
    border-radius: 8px; /* 增加边框圆角 */
    border: 1px solid #ccc; /* 边框颜色 */
    font-size: 16px; /* 增加字体大小 */
    width: auto;  /*根据内容自适应宽度*/
  }
  
  header button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  main {
    padding: 20px;
  }
  
  main h2 {
    margin-bottom: 15px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    padding: 8px;
    margin-bottom: 5px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>