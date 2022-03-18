import { createGlobalStyle } from 'styled-components';
import { nprogress } from './utils/nprogress';

export const GlobalStyle = createGlobalStyle`
    body, html{
        padding: 0;
        margin: 0;
        height: 100%;
        font-family: PelakFont;
        font-size: 16px;
        direction: rtl;
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
        font-family: PelakFont;
        font-style: normal;
        font-weight: 300;
        src: url('./../../fonts/PelakFA-light.ttf');
    }

    @font-face {
        font-family: PelakFont;
        font-style: normal;
        font-weight: 400;
        src: url('../../fonts/PelakFA-Regular.ttf');
    }

    @font-face {
        font-family: PelakFont;
        font-style: normal;
        font-weight: 500;
        src: url('./../../fonts/PelakFA-Medium.ttf');
    }

    @font-face {
        font-family: PelakFont;
        font-style: normal;
        font-weight: 700;
        src: url('../../fonts/PelakFA-Bold.ttf');
    }

    ${ nprogress }
`;