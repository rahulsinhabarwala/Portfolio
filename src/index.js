import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './hoc/Layouts/layout'
const App = () => {
    return (
        <Layout>
            <div className="container-fluid">

            </div>
        </Layout>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));

