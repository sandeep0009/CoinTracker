import React from 'react'
import Show from '../store/Show'
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Showcoins = () => {
    const store=Show();
    const params=useParams();
    React.useEffect(()=>{
        
        store.fetchData(params.id)
      


    },[])
  return (
    <div className="container showcoins">
    <div>
    <header>
    <div>
    <h2>{store.name}({store.symbol}) </h2>
        <img src={store.image} className='imageofcoins' alt="" />

    </div>
   

    </header>
        <AreaChart
          width={600}
          height={300}
          data={store.graphdata}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>

        <div className="bottom">
        <div >
            <h2>Current price :</h2>
            <span>{store.currentprice}</span>
        </div>
        <div>
            <h2>Market cap rank :</h2> <span>{store.market}</span>
        </div>
        </div>
      
    </div>
    </div>
  )
}

export default Showcoins