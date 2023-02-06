import { QueryClientProvider, QueryClient } from 'react-query';
import Post from './components/Post';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Post />
    </QueryClientProvider>
  );
}

export default App;
