import { createRoot } from 'react-dom/client';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
import AppRouter from '@routes/AppRouter.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import { Provider } from 'react-redux';
import './index.css';


createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
)
