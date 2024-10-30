import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    flex: 1;
`

export const Title = styled.h2`
    width: 388px;
    height: 308px;
    gap: 0px;
    opacity: 0px;

    font-family: Open Sans;
    font-size: 32px;
    font-weight: 700;
    line-height: 43.58px;
    text-align: left;

    color: #FFFFFF;

`
export const Wrapper = styled.div`
    width: 330px;
    height: 450px;
    margin-top: 153px;
    gap: 0px;
    opacity: 0px
`

export const TitleLogin = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 8px;
    line-height: 43.58px;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 25px;
`
export const TermText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    margin-top: 25px;
    margin-bottom: 8px;
`

export const LoginText = styled.p`
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-align: left;

    span {
        color: #23DD7A;
    }
`


