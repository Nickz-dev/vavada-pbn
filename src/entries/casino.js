import React from 'react';  
import { createRoot } from 'react-dom/client';  
import Casino from '../components/Casino/Casino';  

// Получаем ссылку из data-атрибута  
const rootElement = document.getElementById('vavada');  
const link = rootElement.dataset.link || 'https://partnervavadarv.com/?promo=0a20713e-f26a-491b-853c-b92607f104dd&target=register';  

const root = createRoot(rootElement);  

root.render(  
    <React.StrictMode>  
        <Casino link={link} />  
    </React.StrictMode>  
);