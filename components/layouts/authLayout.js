import { Color } from 'components/index';

const AuthLayout = (props) => {
    return(
        <div>
            { props.children }
            <style jsx>{`
                div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100vw;
                    height: 100vh;
                    background-color: ${ Color.backgroundColor };
                }
            `}</style>
        </div>
    );
}

export default AuthLayout;