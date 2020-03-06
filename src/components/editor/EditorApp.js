import React from 'react'
import { Route } from "react-router-dom";


import EditorNav from './layout/EditorNav';
import EditorFooter from './layout/EditorFooter';
import Dashboard from './pages/Dashboard';
import EditorServices from './pages/EditorServices';


import DbProvider from './context/DbProvider';




const EditorApp = () => {
   
        return (  
            <>
            <DbProvider>
            <EditorNav />
            <main className="container py-4">
            <Route exact path="/editor/" component={Dashboard}/>
            <Route path="/editor/services" component={EditorServices}/>
            </main>
            <EditorFooter />
            </DbProvider>
            </>
        );
    }

 
export default EditorApp;