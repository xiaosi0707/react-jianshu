import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Layout from 'layout/frame/frame';
require('../semantic/dist/semantic.css');
require('../semantic/dist/semantic.js');
ReactDOM.render(
    <Router>
        <Route path="/" component={Layout} />
    </Router>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
