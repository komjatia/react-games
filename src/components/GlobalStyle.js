import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: .5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: green;
        }
    }
    body{
        font-family: 'Poppins', sans-serif;
        color: #4f4f4f;
        width: 100%;
    }
    h2{
        font-size: 2rem;
    }
    h3{
        padding: 1.5rem;
        font-size: 1.4rem;
    }
    p{
        font-size:1.2rem;
        line-height: 200%;
    }
    a{
        text-decoration: none;
        color: #4f4f4f;
    }
`;

export default GlobalStyle;
