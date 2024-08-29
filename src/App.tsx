import { useQuery } from '@tanstack/react-query';
import { Spinner } from '@chakra-ui/react';
import { getTopRatedMovies } from './services/getTopRatedMovies';
import { Layout } from './screens/Layout';

const App = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['top-rated-movies'],
    queryFn: getTopRatedMovies,
  });

  console.log(data);

  return (
    <Layout isLoading={isLoading}>
      <h1>App</h1>
    </Layout>
  );
};

export default App;
