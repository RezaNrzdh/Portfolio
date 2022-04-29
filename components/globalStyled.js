import { createGlobalStyle } from 'styled-components';
import { nprogress } from './utils/nprogress';

export const GlobalStyle = createGlobalStyle`
    body, html{
        padding: 0;
        margin: 0;
        height: 100%;
        font-family: UbuntuFont;
        font-size: 16px;
    }

    a, button {
        cursor: pointer;
        outline: none;
        text-decoration: none;
    }

    h1, h2, h3, h4{
        margin: 0;
    }

    @font-face {
        font-family: UbuntuFont;
        font-style: normal;
        font-weight: 300;
        src: url('./../../fonts/Ubuntu-Light.ttf');
    }

    @font-face {
        font-family: UbuntuFont;
        font-style: normal;
        font-weight: 400;
        src: url('../../fonts/Ubuntu-Regular.ttf');
    }

    @font-face {
        font-family: UbuntuFont;
        font-style: normal;
        font-weight: 500;
        src: url('./../../fonts/Ubuntu-Medium.ttf');
    }

    @font-face {
        font-family: UbuntuFont;
        font-style: normal;
        font-weight: 700;
        src: url('../../fonts/Ubuntu-Bold.ttf');
    }

    ${ nprogress }
`;