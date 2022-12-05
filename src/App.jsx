import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import SignUp from './SignUp';
import Login from './Login';
import Feed from './Feed';

function App() {
  const router = createBrowserRouter([
    {
      path: '/cadastrar',
      element: <SignUp />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/feed',
      element: <Feed />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;
