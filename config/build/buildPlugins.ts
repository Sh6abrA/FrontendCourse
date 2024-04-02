import HTMLWebpackPlugin  from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildPaths } from '../build/types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({filename: 'css/[name].[contenthash:8].css', chunkFilename: 'css/[name].[contenthash:8].css'}),
    ]
}