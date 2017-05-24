module.exports = {
    entry: './app/containers/AppContainer.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [
            __dirname, 'node_modules'
        ],
        alias: {
            /*************MainContainer**************/
            MainContainer: 'app/containers/Main/MainContainer.jsx',
            EstilosMainContainer: 'app/containers/Main/styles.css',
            /*************MainContainer**************/
            WeatherContainer: 'app/containers/WeatherContainer.jsx',
            /*************Nav**************/
            Nav: 'app/components/Nav/Nav.jsx',
            EstilosNav: 'app/components/Nav/styles.css',
            /*************Form**************/
            Form: 'app/components/Form/Form.jsx',
            FormActions: 'app/actions/form/FormActions.jsx',
            FormReducer: 'app/reducers/form/FormReducer.jsx',
            /*************Message**************/
            Message: 'app/components/Message/Message.jsx',
            EstilosMessage: 'app/components/Message/styles.css',
            /*************Loading**************/
            Loading: 'app/components/Loading/Loading.jsx',
            EstilosLoading: 'app/components/Loading/styles.css',
            /*************ModalError**************/
            ModalError:'app/components/ModalError/ModalError.jsx',
            /*************Map**************/
            GoogleMap: 'app/components/Map/Map.jsx',
            /*************Stores**************/
            configureStore: 'app/store/configureStore.jsx',
            /*************Constants**************/
            Constants: 'app/constants/constants.js'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    }
};