import { createContext } from 'react';
import { View, Text } from 'react-native'

export interface ColorScheme{
    bgPrimary : string;
    bgSecondary : string;
    sucess: string;
    danger: string;
    warning: string; 
    text: string;  
    gradients: {
        background : [string, string]
    };
statusTheme : "light" | "dark";
}
const lightColors: ColorScheme = {
    bgPrimary :' #fff',
    bgSecondary : '#d8b990',
    sucess: '#558554',
    danger: '#cf2424',
    warning: '#bbb0b0',
    text:  '#000000',
    gradients: {
        background : ['#ebc191', '#b99e75'],
},
statusTheme : "light" as const,
}
const darkColors: ColorScheme = {
    bgPrimary :' #3b243f',
    bgSecondary : '#3d1010',
    sucess: '#558554',
    danger: '#cf2424',
    warning: '#574d3a',
    text:  '#000000',
    gradients: {
        background : ['#3e3553', '#193128'],
},
statusTheme : "dark" as const,
}

//null check - verificar o tipo do contexto
//void - nada
interface ThemeContextType{
    isDarkMode : boolean;
    toggleDarkMode : () => void;
    colors: ColorScheme;
}

const ThemeContext = createContext<undefined | ThemeContextType>(undefined)
                                                                           

const useTheme = () => {
    
}