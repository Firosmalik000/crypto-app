import useAxios from '../hooks/useAxios';
import Coin from './Coin';
import Skeleton from './Skeleton';

const Markets = ({ search }) => {
  const { response } = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

  if (!response) {
    return <div>Loading...</div>;
  }

  const searchCoins = response.filter((coin) => {
    return search.toLowerCase() === '' ? true : coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <section className="mt-8">
      <h1 className="text-2xl mb-2">Markets</h1>
      {searchCoins.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </section>
  );
};
export default Markets;
