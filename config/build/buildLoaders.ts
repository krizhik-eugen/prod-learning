import type {RuleSetRule} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';

export const buildLoaders = ({isDev}: BuildOptions): RuleSetRule[] => {

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const svgLoader = {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (path: string) => path.includes('.module.'),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                    }
                }
            },
            "sass-loader",
        ]
    }

    // если нет typescript, нужен babel loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader
    ]
}
