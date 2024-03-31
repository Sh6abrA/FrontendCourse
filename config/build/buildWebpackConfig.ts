import { BuildOptions } from "./types/config"
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolves} from "./buildResolves";
import webpack from "webpack";
import path from "path";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolves(),
    }
}