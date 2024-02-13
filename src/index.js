import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
const rootElement = createRoot(document.getElementById('root'));
rootElement.render(<App />); 
