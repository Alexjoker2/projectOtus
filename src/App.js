import "./styling.css";
import {Routes, Route, Link} from 'react-router-dom';
import Homepages from './Homepages'
import {About} from './AboutPages'
import {UpgradeClick} from './upgrade/UpgradeClick'
import {Grandma} from './upgrade/Grandma'
import {Grandpa} from './upgrade/Grandpa'
import {Factory} from './upgrade/Factory'


function App() {
  return (
    <>
    <div className="header">
    <Link style={{ textDecoration: 'none', color: 'red' }} to="/projectOtus">Главная</Link>
    <Link style={{ textDecoration: 'none', color: 'red' }} to="/projectOtus/About">О игре</Link>
  </div>
  <Routes>
      <Route path="/projectOtus" element ={<Homepages/>}/>
      <Route path="/projectOtus/About" element ={<About/>}/>
      <Route path="/projectOtus/upgrade/Усилитель" element ={<UpgradeClick/>}/>
      <Route path="/projectOtus/upgrade/Бабушка Люда" element ={<Grandma/>}/>
      <Route path="/projectOtus/upgrade/Дедушка Борис" element ={<Grandpa/>}/>
      <Route path="/projectOtus/upgrade/Завод Печенек" element ={<Factory/>}/>
    </Routes>
    </>
  );
}
export default App;
