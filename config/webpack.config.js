const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.js',
        clean: true, // очищає dist перед новим побудуванням
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    context: path.resolve(__dirname, '../src', 'assets'),
                    from: '**/*',
                    to: path.resolve(__dirname, '../dist', 'assets'),
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../templates/index.html'),
            filename: 'index.html', // Явно визначити ім'я вихідного файлу
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]',
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, '../src/components'),
        },
    },
};

module.exports = config;
