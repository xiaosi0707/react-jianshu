import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Layout from 'layout/layout/layout';
ReactDOM.render(
    <Router>
        <Route path="/" component={Layout} />
    </Router>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
