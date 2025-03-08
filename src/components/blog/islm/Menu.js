import StatusBox from './StatusBox';
import '@styles/blog/Menu.css';
import Read from './Read';

const Menu = () => {
 
  return (
    <div className="tab-menu">
      <StatusBox />
      <Read/>
    </div>
  );
};

export default Menu;