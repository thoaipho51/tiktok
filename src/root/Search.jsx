import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  return <h1>Tìm kiếm: {query}</h1>;
};

export default Search