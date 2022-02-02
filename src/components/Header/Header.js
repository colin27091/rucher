import './Header.css';

function Header(props) {

  const menu = ['LE RUCHER', 'NOS PRODUITS', 'NOUS CONTACTER'];

  const { activeIndex, handleHeaderClick } = props;

  return (
      <header className="header">
        Logo
        <ul>
          {menu.map((item, index) => (
          <li 
            key={index}
            className={`${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleHeaderClick(index)}
          >
            {item}
          </li>
          ))}
        </ul>
      </header>
  );
}

export default Header;
