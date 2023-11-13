import type {Configuration} from 'webpack';
import path from 'path';
import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import {BuildMode, BuildPaths} from './config/build/types/config';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
};

const mode: BuildMode = 'development';
const isDev = mode === 'development';

const config: Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev
});

export default config
