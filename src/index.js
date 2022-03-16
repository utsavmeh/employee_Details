import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from './store';
import AppRoutes from './AppRoutes'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>,
    document.getElementById('root')
)