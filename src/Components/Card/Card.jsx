import './Card.scss'

export default function Card(props) {

    return <div className={props.user.color}>
      <h3>{props.user.resource}</h3>
      <h1>{props.user.cost}</h1>
      <h4>{props.user.limit}</h4>
      <h5>{props.user.content}</h5>
    </div>

}