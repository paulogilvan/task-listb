import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Noto Sans", sans-serif;      
    }
`;

export const Container = styled.div`
    background-color: #5A5A5A;
    width: 100vw;
    height: 100vh;
    display: flex;    
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    color: #fff;
    padding-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    
`;

export const ContainerSection = styled.div`
    width: 100%;
    max-width: 700px;    
    background-color: gray;
    padding: 10px;
    border: 2px solid orange;
    border-radius: 10px;
    height: 110px;   
    display: flex;
    align-items: center;

    input[type=text] {        
        flex: 1;
        padding: 10px;
        border: 1px solid #000;
        border-radius: 5px;
        outline: none;
        width: 100%;
        font-size: 20px;
        color: gray;
    }

    .btn {
        background-color: transparent;        
        padding: 5px;
        border: none;
        font-size: 20px;
        color: #FFF;
        cursor: pointer;
        
        &:hover {
            opacity: .8;
        }

        &:active {
            opacity: .5;
        }
    }
`;

export const ItemCount = styled.p`
    padding-top: 10px;
    font-size: 20px;
    color: orange;
    opacity: .5;
`;

export const Main = styled.ul`
    width: 100%;
    max-width: 700px;
    padding-left: 15px;
    list-style: none;
    margin-top: 20px;
    color: #FFF;
    font-size: 25px;    

    li {
        display: flex;
        align-items: center;
        margin-top: 10px;

        input[type=checkbox] {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }

        button {
            position: absolute;
            right: 590px;
            text-align: center;
            background-color: transparent;
            border: none;
            font-size: 20px;
            color: orange;
            cursor: pointer;

            &:hover {
                opacity: .8;
            }

            @media(max-width: 768px) {
                position: absolute;
                right: 45px;
            }
        }
    }

    @media(max-width: 450px) {
        font-size: 20px;
    }    
    
`;