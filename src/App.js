


import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import './App.css';
const App = observer(() => {


    return (
        <BrowserRouter>
            <AppRouter /> 
        </BrowserRouter>
        
    );
    
});

export default App;