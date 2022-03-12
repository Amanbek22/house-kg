import { useEffect, useState } from 'react'
import Card from '../components/card/Card.jsx'

export default function Homepage() {
  const [num, setNum] = useState(0);

  const [houses, setHouses] = useState([]);

  console.log(houses);

  useEffect(() => {
    console.log("useEffect");
    setHouses([
      {
        id: 1,
        title: "Продаю дом 4к",
        imgUrl: "https://www.bankrate.com/2019/01/24124808/How-to-buy-a-home.jpg",
        price: "40000$"
      },
      {
        id: 2,
        title: "Продаю кв 1к 105с",
        imgUrl: "https://www.bankrate.com/2019/01/24124808/How-to-buy-a-home.jpg",
        price: "30000$"
      },
      {
        id: 3,
        title: "Продаю собаку  имеется 4ноги ",
        imgUrl: "https://www.bankrate.com/2019/01/24124808/How-to-buy-a-home.jpg",
        price: "1000$"
      },
    ])
  }, []);

  return (
    <div className='container page'>


      <div>
        <button onClick={() => {
          setNum(num - 1)
        }}>Minus</button>
        <h1>{num}</h1>
        <button onClick={() => {
          setNum(num + 1)
        }}>Plus</button>
      </div>

      <div className='title'>Homepage</div>
      <div className="cardsWrapper">
        {
          houses.map((house) => <Card
            key={house.id}
            title={house.title}
            imgUrl={house.imgUrl}
            price={house.price}
          />)
        }
      </div>

    </div>
  )
}
