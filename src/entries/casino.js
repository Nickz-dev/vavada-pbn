import React from 'react';  
import { createRoot } from 'react-dom/client';  
import Casino from '../components/Casino/Casino';  

// Получаем ссылку из data-атрибута  
const rootElement = document.getElementById('vavada');  
const defaultLink = "https://vavada.c-wn.ru";  
const link = rootElement?.dataset?.link || defaultLink;  

const root = createRoot(rootElement);  

root.render(  
    <React.StrictMode>  
        <Casino link={link} />  
    </React.StrictMode>  
);