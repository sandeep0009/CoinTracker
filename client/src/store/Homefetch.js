import { create } from 'zustand';
import axios from 'axios';
import debounce from '../helper/debounce';

const Homefetch = create((set) => ({
  coins: [],
  trending:[],
  query: "",
  searched:false,
  setQuery: (e) => {
    set({ query: e.target.value });
    Homefetch.getState().search();
  },
  search:debounce (async () => {
    try {
      const { query,trending } = Homefetch.getState();
      if(query.length>2){
      const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);
      const coins=res.data.coins.map(coin=>{
        return{
          name:coin.name,
          image:coin.large,
          id:coin.id
        }
      })
      set({coins ,searched:true})
    }
    else{
      set({coins:trending,searched:false})

    }
    } catch (error) {
      console.error('Error searching coins:', error);
    }
  },500),
  fetchCoins: async () => {
    try {
      const [res,btcres]=await Promise.all([
        axios.get('https://api.coingecko.com/api/v3/search/trending'),
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')

      ])
     const btcPrice=btcres.data.bitcoin.usd;
   
      const coins = res.data.coins.map((coin) => {
        return {
          name: coin.item.name,
          image: coin.item.large,
          id: coin.item.id,
          price: coin.item.price_btc,
          priceUsd:(coin.item.price_btc*btcPrice).toFixed(10),
        };
      });
      console.log(coins);
      set({ coins ,trending:coins });
    } catch (error) {
      console.error('Error fetching coins:', error);
    }
  },
}));

export default Homefetch;
