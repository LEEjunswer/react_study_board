/*다크모드 빛모드 프로바이더*/
 import {createContext,useContext,useState,useEffect,useMemo} from 'react';

  const ThemeContext =createContext({theme : "light" , toggle : ()=>{} });
  export const useTheme = () => useContext(ThemeContext);

  const getInitial = () =>{
        const saved = localStorage.getItem("theme");
             if(saved){
                 return saved;
             }
     return window.matchMedia("(prfers-color-scheme : dark)").matches ? "dark" : "light";

  }
    export default function ThemeProvider({ children }){
       const [theme,setTheme] = useState(getInitial);
        useEffect(() => {
            const root = document.getElementById("root");
            if(theme === "dark"){
                root.classList.add("dark");
            }else{
                root.classList.remove("dark")
            }
            localStorage.setItem("theme",theme);
        }, [theme]);


        const value = useMemo(
            () => ({ theme, toggle: () => setTheme(t => (t === "dark" ? "light" : "dark")) }),
            [theme]
        );

        return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
    }