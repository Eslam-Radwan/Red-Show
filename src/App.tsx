import { RouterProvider } from "react-router-dom";
import { router } from './router/router'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



const queryClient = new QueryClient()


const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}
export default App;