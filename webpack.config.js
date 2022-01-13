const path = require('path'); //path del proyecto principal
const HtmlWebpackPlugin = require('html-webpack-plugin'); //traemos el plugin
//de html
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //traemos el plugin

module.exports = {
    entry: './src/index.js', // punto de entrada
    output: { // lugar al que saldrán todos los archivos
        path: path.resolve(__dirname, 'dist'), //en nuestro path, crea la carpeta dist
        filename: 'bundle.js', // nombre del archivo js resultante
        publicPath: '/' // ruta de la carpeta publica
    },
    resolve: { // extensión de archivos a tomar en cuenta
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@context': path.resolve(__dirname, 'src/context/'),
        }
    },
    module: { // loaders para cada tipo de archivo
        rules: [ // reglas para usar
            {
                test: /\.(js|jsx)$/, // extensiones en las cuales actuará babel
                exclude: /node_modules/, // siempre excluir node modules 
                use: { // indicamos el loader
                    loader: 'babel-loader' // babel 
                }
            },
            {
                test: /\.html$/, // extensiones html
                use: [ // indicamos el loader  
                    {
                        loader: 'html-loader', // html
                    }
                ]
            },
            {
                test: /\.(css|scss)$/, // extensiones scss
                use: [ // indicamos el loader
                    "style-loader", // inserta el css en el html
                    "css-loader", // interpreta el css
                    "sass-loader" // interpreta el scss
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // extensiones de imagenes
                type: 'asset', // tipo de archivo
            },
        ]
    },
    plugins: [ // plugins 
        new HtmlWebpackPlugin({ // instanciamos el plugin para html 
            template: './public/index.html', // archivo raíz a transformar
            filename: './index.html' // el archivo resultante
        }),
        new MiniCssExtractPlugin({ // instanciamos el plugin para css
            filename: '[name].css', // nombre del archivo resultante
        }),
    ],
    mode: 'development', // modo de desarrollo

    devServer: { // configuración del servidor
        static: {
        directory: path.join(__dirname, 'dist') // carpeta de publicación
        // contentBase corresponde a webpack 4
        // ahora en Webpack 5 se usa allowedHosts
        // créditos al compañero Fabian Rivera Restrepo}
        },
        port: 3005, // puerto
        compress: true, // comprimir
        historyApiFallback: true, // redireccionar
    },
    
}