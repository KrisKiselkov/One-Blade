import logo from './logo.svg';
import './App.css';
import { Nav } from './content/Nav';
import { RouterProvider, Route } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home } from './content/Landing/Home';
import { Landing } from './content/Landing/Landing';



function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={ <Landing /> }/>
    </Route>
      ));
  

  return (
    <>
      
      <RouterProvider router={router}></RouterProvider>
    
    </>
  ); 
}

export default App;
