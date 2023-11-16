import type {Configuration} from 'webpack';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {BuildOptions} from './types/config';
import {buildDevServer} from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {

    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined
    }
}
