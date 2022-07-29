const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //Install with npm

const HtmlWebpackPlugin = require('html-webpack-plugin'); 
//Install with npm, nao precisar colocar link ref css e js ,no html

module.exports = {

    entry : './src/index.js', //Arquivo de entrada que vai gerar a Build

    output : {  //Saida, oq vai ser gerado pela build
        filename : "bundle.js",
        path : path.resolve(__dirname, "./dist") //path, node encontra onde é para nao copiar e colar
    },

    mode: 'development',

    devServer: {
        // contentBase: path.resolve(__dirname, "./dist"),
        // index: 'index.html',
        port: 9000
    },

    module : {
        rules : [
            {
                test : /\.css$/, //regex Se o arquivo terminar em css vou utilizar algo
                use : [
                    //'style-loader', 'css-loader'  //Identificar aruivos css, outro transforma em estilo
                                                  // Ordem importa! //Install with npm
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html'
        })
    ]
}