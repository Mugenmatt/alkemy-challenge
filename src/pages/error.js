import { useEffect, useRef} from 'react';
import {NavLink} from 'react-router-dom';
import { Background, ErrorContainer, Lottie, ErrorTitle, ErrorMsg, GoBackBtn } from '../assets/styledComponents/styledError';
import lottie from 'lottie-web';

export const Error = () => {
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'gif',
            loop: true,
            autoplay: true,
            animationData: require('../assets/loaders/batmanLoader'),
            name: "Batman",
            settings: {
                style: {
                    width: '50px',
                    height: '50px'
                }
            }
        })
    }, [])

    return (<>
        <Background></Background>
        <ErrorContainer>
            <Lottie ref={container} />
            <ErrorTitle>Error 404</ErrorTitle>
            <ErrorMsg>Sorry, this page doesn't exist</ErrorMsg>
            <NavLink to="/" style={{textDecoration: 'none'}}> 
                <GoBackBtn type='button' value='Go Back' /> 
            </NavLink>
        </ErrorContainer>
        </>
    )    
}