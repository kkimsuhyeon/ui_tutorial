const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js', // entry, 웹 자원을 변환하기 위한 최초 진입점
	mode: 'development',
	output: {
		// 웹팩 나온 결과물의 파일 경로를 의미
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		compress: true,
		port: 9000,
		hot: true, // 자동 reload를 위함
	},
	devtool: 'eval-cheap-source-map', // 배포용 파일의 특정 부분이 원본 소스의 어떤 부분인지 확인할 수 있음
	plugins: [
		// 웹팩의 기본적인 동작에 추가적인 기능을 제공
		new HtmlWebpackPlugin(), // 웹팩으로 빌드한 결과물로 html 파일을 생성해주는 플러그인
		new webpack.ProgressPlugin(), // 웹팩의 빌드 진행율을 표시해줌
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							cacheCompression: false,
							envName: 'development',
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js'],
	},
};
