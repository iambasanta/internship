import { useSelector } from "react-redux";

const Coin = () => {
  const coin = useSelector((state: any) => {
    console.log(state.counter.coin);

    return state.counter.coin;
  });

  console.log(coin);

  return <div>Coins: {coin}</div>;
};

export default Coin;
