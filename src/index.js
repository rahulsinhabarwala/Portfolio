import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HeroText from './components/Banner/HeroText/heroText';
import Routes from './routes';

const App = () => {
    return (
        <BrowserRouter>
            {/* <Routes/> */}
            <HeroText></HeroText>
        </BrowserRouter>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));
