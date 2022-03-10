import css from "./Header.module.css";

export default function Header() {
  return (
    <div className={css.wrapper}>
      <header className={`container ${css.header}`}>
        <h1>Solid House</h1>

        <nav>
          <a href="#">Все объявления</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>

      </header>
    </div>
  )
}
