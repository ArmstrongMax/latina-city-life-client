import {createGlobalStyle} from 'styled-components'
import backgroundImage from './assets/background-image.jpeg'

export const GlobalStyle = createGlobalStyle`
html {
        background-image: url(${backgroundImage});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
}
body {  
        position: absolute;     
        backdrop-filter: blur(8px);
        width: 100%;
        height: 100%;
        color: white;
	}
	
#root {
position: absolute;
width: 100%;
height: 100%;
padding: 40px;

@media screen and (max-width: 800px) {
    padding: 10px;
  }
}	
	a {
		text-decoration: none;
		color: white;
	}
	* {
		box-sizing: border-box;
	}
`