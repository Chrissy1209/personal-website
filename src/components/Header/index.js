import sx from "./Header.module.sass";

const Header = () => {
  return (
    <div>
      <header className={sx.container}>
        <p>
          Hi, I'm
          <br />
          <b>CHRISSY HSU</b>
        </p>
      </header>
    </div>
  );
}

export default Header;
