import { RouterProvider } from "react-router-dom";
import { router } from './router/router'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RegistrationProvider } from "./context/registrationContext";
import Modal from "./pages/components/Modal";
import { ErrorProvider } from "./context/errorContext";



const queryClient = new QueryClient()


const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RegistrationProvider>
                <ErrorProvider>
                    <Modal>
                        <RouterProvider router={router} />
                    </Modal>
                </ErrorProvider>
            </RegistrationProvider>
        </QueryClientProvider>
    )
}
export default App;