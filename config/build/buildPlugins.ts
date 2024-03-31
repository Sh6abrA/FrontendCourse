import HTMLWebpackPlugin  from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import { BuildPaths } from '../build/types/config'
export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin()
    ]
}