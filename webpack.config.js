/* eslint-disable no-unused-vars */

/* eslint-disable linebreak-style */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: './src/app.js',

	mode: 'development',

	output: {

		filename: '[name].bundle.js',

		path: path.resolve(__dirname, 'dist')

	},

	optimization: {

		minimize: true

	},

	module: {

		rules: [

			{

				test: /\.js$/,

				exclude: /node_modules/,

				use: {

					loader: 'babel-loader',

					options: {

						presets: ['@babel/preset-env']

					}

				}

			},

			{

				test: /\.css$/,

				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],

			},

			{

				test: /\.(png|jpg|gif|ico)$/,

				use: [

					{

						loader: 'file-loader'

					},

				],

			},

		]

	},

	devServer: {

		contentBase: './dist',

		open: true,

		port: 8080

	},

	plugins: [

		new HtmlWebpackPlugin({

			title: 'Webpack Output',

		}),
	],

};







