module.exports = {
  productionSourceMap: false, 
   // publicPath:"./",
   publicPath:"/",
  devServer:{
    open:true,
    overlay:{
        warnings:false,
        errors:true
    },
     proxy:{
      '/api':{
        target:'http://127.0.0.1:9513/',
	// 	target:'http://47.105.81.53:9513',
        ws: true,
  //     transpileDependencies: [/node_modules[/\\\\](element-ui|vuex|)[/\\\\]/],
        changeOrigin: true ,
        // pathRewrite: { '^/api': '' }
      }
      }
    },
    lintOnSave:false
  }
  