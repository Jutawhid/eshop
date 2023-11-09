import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import RootLayout, { loader as rootLoader } from './layouts/RootLayout';
import Home from './pages/Home'


// old
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)


  const router = createBrowserRouter(
		createRoutesFromElements(
			<Route id="root" loader={rootLoader}>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Route>
		)
	);

  return (
    <>
      <RouterProvider
				router={router}
			/>
    </>
  )
}

export default App
