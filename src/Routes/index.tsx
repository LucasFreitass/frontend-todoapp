import {BrowserRouter, Routes as ReactDomRoutes, Route} from 'react-router-dom'
import { Home } from 'Pages';

export const Routes = () => {
    return (
        <BrowserRouter>
            <ReactDomRoutes>
                <Route path="/" element={<Home></Home>}/>
            </ReactDomRoutes>
        </BrowserRouter>

    );
;}