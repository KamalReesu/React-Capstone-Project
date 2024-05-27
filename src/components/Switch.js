import  '..//App.css';
import { useTheme } from "./ThemeContext";

const Switch = () => {
 const { theme, toggleTheme } = useTheme();
 return (
    <>
   <label className="switch">
     <input
       type="checkbox"
       checked={theme === "dark"}
       onChange={toggleTheme}
       value={'switch to dar mode'}
     />
     <span className="slider round" />
   </label>
   </>

 );
};

export default Switch;