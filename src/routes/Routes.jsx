import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main"
import Home from "../pages/Home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <div>404</div>,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ]
    }
])

export default router