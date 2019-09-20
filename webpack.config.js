const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool:'eval-source-map', // 生成Source Maps（使调试更容易）
  	entry:  __dirname + "/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/dist",//打包后的文件存放的地方
    filename: "bundle-[hash].js" //打包后输出文件的文件名
	},
	// 开启服务
	devServer: {
		contentBase: "./dist", // 本地服务器所加载页面的目录
		port: 8081, // 默认8080
		historyApiFallback: true, //不跳转
		inline: true  // 实时刷新
	},
	module: {
		rules: [  //在 webpack 配置中定义 loader 时，要定义在 module.rules
			{
				test: /(\.jsx|\.js)$/,  // 用于标识出应该被对应的 loader 进行转换的某个或某些文件
				use: { // 表示进行转换时，应该使用哪个 loader。
					loader: "babel-loader"
				},
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {},
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{
							loader: "style-loader"
					}, {
							loader: "css-loader",
							options: {
									modules: true
							}
					}, {
							loader: "postcss-loader"
					}
				]
			}
		]
	},
	plugins: [ //插件（Plugins）是用来拓展Webpack功能的，它们会在整个构建过程中生效，执行相关的任务。
			// new webpack.BannerPlugin('版权所有，翻版必究'),
			new HtmlWebpackPlugin({
				template: __dirname + "/index.html"//new 一个这个插件的实例，并传入相关的参数
			}),
			new webpack.HotModuleReplacementPlugin(), //热加载插件
			// new ExtractTextPlugin("style.css")
	]
}

// Babel  Loaders 安装  
// npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react

// css
// npm install --save-dev style-loader css-loader

// CSS预处理器postcss
// npm install --save-dev postcss-loader autoprefixer

// plugins   插件
// webpack.BannerPlugin  版权声明插件
// HtmlWebpackPlugin    这个插件的作用是依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html
// Hot Module Replacement（HMR）也是webpack里很有用的一个插件，它允许你在修改组件代码后，自动刷新实时预览修改后的效果。
// 在webpack中实现HMR也很简单，只需要做两项配置
	// 在webpack配置文件中添加HMR插件；
	// 在Webpack Dev Server中添加“hot”参数；
// UglifyJsPlugin：压缩JS代码；
// ExtractTextPlugin：分离CSS和JS文件
// clean-webpack-plugin   去除build文件中的残余文件