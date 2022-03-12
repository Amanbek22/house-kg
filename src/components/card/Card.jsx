import css from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.imgWrapper}>
        <img src={props.imgUrl} alt="#" />
      </div>
      <br />
      <h2>{props.price}</h2>
      <h3>{props.title}</h3>
      <br />
      <button>
        Подробнее
      </button>
      <br />
      <br />
    </div>
  )
}
