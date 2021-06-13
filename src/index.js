import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createMuiTheme, CssBaseline, MuiThemeProvider, Typography} from "@material-ui/core";
import {Provider} from "react-redux";
import store from './redux/store'
import {red} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: red[500]
        }
    },
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Typography>
                    <App/>
                </Typography>
            </MuiThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
 