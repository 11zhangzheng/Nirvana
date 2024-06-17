<template>
	<div class="login-page">
	  <div class="login-container">
		<h2 class="login-title">登录</h2>
		<form @submit.prevent="handleSubmit">
		  <div class="input-group">
			<label for="username">用户名</label>
			<input type="text" id="username" v-model="username" required />
		  </div>
		  <div class="input-group">
			<label for="password">密码</label>
			<input type="password" id="password" v-model="password" required />
		  </div>
		  <div class="action-group">
			<button type="submit" class="login-btn"><i class="fas fa-sign-in-alt"></i> 登录</button>
		  </div>
		  <div class="extra-actions">
			<a href="/register" class="register-link">注册</a>
			<div class="other-login-methods">
			  <span>使用其他方式登录</span>
			  <div class="social-login">
				<a href="/wechat-login" class="social-button wechat"><i class="fab fa-weixin"></i> 微信</a>
				<a href="/alipay-login" class="social-button alipay"><i class="fab fa-alipay"></i> 支付宝</a>
				<a href="/qq-login" class="social-button qq"><i class="fab fa-qq"></i> 腾讯QQ</a>
			  </div>
			</div>
		  </div>
		</form>
	  </div>
	</div>
  </template>
  
  
  <script>
  export default {
	name: 'LoginPage',
	data() {
	  return {
		username: 'nirvana', // 预设的用户名，实际使用中应去掉或通过props传入
		password: ''         // 密码
	  };
	},
	methods: {
	  handleSubmit() {
		// 在这里添加登录逻辑
		console.log('登录用户:', this.username, this.password);
		// 假设登录成功，跳转到主页
		this.$router.push('/home');
	  }
	}
  };
  </script>
  
  <style scoped>
  /* 登录页面整体布局和风格 */

  body {
    font-size: 2vw;
}

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1440px;
  background-color: #f3f4f6;
}

/* 登录容器样式 */
.login-container {
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 700px;
}

/* 标题样式 */
.login-title {
  text-align: center;
  color: #333;
  margin-bottom: 25px;
}

/* 输入组样式 */
.input-group {
  margin-bottom: 25px;
  margin-right: 20px;
}

/* 输入标签样式 */
.input-group label {
  display: block;
  color: #666;
  margin-bottom: 8px;
}

/* 输入框样式 */
.input-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* 按钮样式 */
.login-btn {
  width: 100%;
  padding: 12px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #0056b3;
}

/* 链接样式 */
.register-link {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #007BFF;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}

/* 其他登录方式的样式 */
.other-login-methods {
  text-align: center;
  margin-top: 30px;
}

.social-login {
  margin-top: 15px;
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中所有按钮 */
}

.social-button {
  display: inline-block;
  align-items: center; /* 垂直居中按钮内的内容 */
  justify-content: center; /* 水平居中按钮内的内容 */
  width: 120px;
  margin: 0 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.social-button:hover {
  background-color: #f0f0f0; 
}

.social-button.wechat {
  background-color: #09BB07;
  color: white;
}

.social-button.alipay {
  background-color: #1677FF;
  color: white;
}

.social-button.qq {
  background-color: #498AD5;
  color: white;
}


  </style>