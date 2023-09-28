
import './Openclose.css'
import Register from '../Components/Register';
function Page({active,setActive}) {

  function openItem() {
    setActive(true);
  }

  return (
    <div>
        <button onClick={openItem}>open</button>
        <br />
        <br />
        {active && <div><Register active={active} setActive={setActive}/></div>}
    </div>
  );
}
export default Page;
{/* <button onClick={closeItem}>Close</button> */}