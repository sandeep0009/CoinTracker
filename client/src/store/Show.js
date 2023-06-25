import axios from "axios";
import {create} from "zustand";
const Show=create((set)=>({
    graphdata:[],
    

    fetchData:async(id)=>{
        const[graphres,datares]=await Promise.all([
         axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=130`),

            axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`)
        ])
    
     const graphdata=graphres.data.prices.map((price)=>{
        const[timestamp,p]=price;
        const date=new Date(timestamp).toLocaleDateString('en-us');
        return{
            Date: date,
            Price:p,
          
        };
    });
    console.log(datares)
      
       const name=datares.data.name;
       const symbol=datares.data.symbol;
       const image=datares.data.image.large;
       const market=datares.data.market_cap_rank;
       const currentprice=datares.data.market_data.current_price.usd;
       set((state) => ({ ...state, graphdata, name,symbol ,image,market,currentprice}));
       console.log(datares)

    },
   

}))
export default Show;