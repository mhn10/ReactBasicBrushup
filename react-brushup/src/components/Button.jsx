import styled from "styled-components";

const  Button = styled.button`
border: 1px solid ;  
font-size: 1em;
color: lightcoral;
background : #f8f8f8;
padding: 0.5rem 1.5rem;
border-radius: 50px;
position: relative;
background-position: center;
transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
font-weight: 400;
letter-spacing: 2px;
&:focus {
    outline: none;
}
&:hover {
    /* transform: scale(1.1, 1.1); */
    cursor: pointer;
    background: ${(props: any) => props.theme.bg}
        radial-gradient(circle, transparent 1%, ${(props: any) => props.theme.bg} 1%) center/15000%;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

&:active {
    background-color: ${(props: any) => props.theme.fg};
    background-size: 100%;
    transition: background 0s;
}
&:disabled {
    cursor: not-allowed;
    filter: grayscale(0.2);
}
`;

export default Button;