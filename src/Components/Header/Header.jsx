import Card from "../Card/Card.jsx"
import './Header.scss'

export default function Header() {

  const arr = [
    {
      resource: 'Безлимитный 300',
      cost: 'руб 300/мес',
      limit: 'до 10 Мбит/сек',
      content: 'Объём включённого трафика не ограничен',
      color: 'blue column',
    },
    {
      resource: 'Безлимитный 450',
      cost: 'руб 450/мес',
      limit: 'до 50 Мбит/сек',
      content: 'Объём включённого трафика не ограничен',
      color: 'green column',
    },
    {
      resource: 'Безлимитный 550',
      cost: 'руб 550/мес',
      limit: 'до 100 Мбит/сек',
      content: 'Объём включённого трафика не ограничен',
      color: 'red column',
    },
    {
      resource: 'Безлимитный 1000',
      cost: 'руб 1000/мес',
      limit: 'до 200 Мбит/сек',
      content: 'Объём включённого трафика не ограничен',
      color: 'black column',
    },
  ]

    return <div className="container">
      <Card user={arr[0]}/>
      <Card user={arr[1]}/>
      <Card user={arr[2]}/>
      <Card user={arr[3]}/>
    </div>

}
  
 