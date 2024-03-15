import {QueryClient, QueryClientProvider, useQueryClient} from "react-query";
import "./App.css";
import "./global-styles.css"
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <CommentsPage />
            </div>
        </QueryClientProvider>
    );
}

export default App;
