import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>,
    },
    {
      path: "/",
      element: <WatchPage/>,
    },
  ]
}])

function App() {
  return(
    <Provider store={store}>
    <div>
      {/* <h1 className="text-3xl font-bold">React</h1> */}
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
