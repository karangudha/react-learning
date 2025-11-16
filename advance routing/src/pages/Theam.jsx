import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Theam = () => {
    const [theme, settheme] = useContext(ThemeDataContext);
    
    const changeTheam = () => {
        settheme(theme === 'dark' ? 'light' : 'dark');
    }
  return (
    <div>
        <button onClick={changeTheam} className='bg-green-500 font rounded cursor-pointer active:scale-95'>Theam </button>
    </div>
  )
}

export default Theam;