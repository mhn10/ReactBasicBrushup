
import styled from "styled-components";

const InputTextField = styled.div`
/* margin: 1rem 0; */
display: flex;
flex-direction: column;
padding: 1rem 0;
.input {
    border: 1px solid hsl(0, 0%, 80%);
    border-radius: 50px;
    width: 100%;
    background: #fff;
    padding: 7px 1.5rem;
    box-sizing: border-box;
    max-height: 36px;
    margin: 1px 0;

    input {
        transition: background-color 5000s ease-in-out 0s;
    }

    &:hover {
        border-color: gray;
    }

    &:focus-within {
        border-color: #5acba8;
    }

    & > input {
        width: calc(100% - 1.5rem);
        border: none;
        height: 100%;
        margin: 0;
        font-size: inherit;
        font-weight: 200;
        color: #afafb1;
        &:focus {
            outline: none;
        }
    }
}
`;




export default InputTextField;