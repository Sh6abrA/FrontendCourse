import HTMLWebpackPlugin  from 'html-webpack-plugin'
import webpack, { DefinePlugin, HotModuleReplacementPlugin } from 'webpack'
import { BuildOptions } from '../build/types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'


export function buildPlugins({paths, isDev, apiUrl}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({filename: 'css/[name].[contenthash:8].css', chunkFilename: 'css/[name].[contenthash:8].css'}),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
        new ReactRefreshWebpackPlugin({overlay: false}),
    ];
    
    if(isDev) {
        plugins.push(new HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
    }
    
    return plugins
}