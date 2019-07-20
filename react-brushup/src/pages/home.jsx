import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import InputTextField from "../components/Input";

import homeContext from "../context/homeContext";


const reducer = (state, action) => {
    const { type } = action;

    switch (type) {

        case "incrementState":
            return {
                ...state,
                step: state.step < 4 ? state.step + 1 : state.step
            };
        case "decrementState":
            return {
                ...state,
                step: state.step > 0 ? state.step - 1 : state.step
            };

        case "setSearchText":
            return { ...state, searchText: action.searchText};

        default:
            return state;
    }
};


export default function home() {
    return (
        <>
        <div>
            < InputTextField>
            <div className={'input'}>
				<input
				
					placeholder="Search Breed"
				/>
			</div>
            </InputTextField>
         </div>   
        <Wrapper>
        <div>
            hi
        </div>
         <div>
         hi2
     </div> <div>
            hi3
        </div> <div>
            hi4
        </div>
        <div>
            hi4
        </div>
        <div>
            hi4
        </div>
        <div>
            hi4
        </div>
        <div>
            hi4
        </div>
        <div>
            hi4
        </div>
        <div>
            hi4
        </div>
        <div>
            hi4
        </div>
        <div>
            hi4
        </div>
        <div>
            hi4
        </div>
        <div>
            hi4
        </div>
        <div>
            hi4
        </div>
        <div>
            hi4
        </div>
        </Wrapper>
        </>
    )
}



const Label = styled.div`
	color: #afafb1;
	font-weight: 200;
	padding-left: 1.5rem;
	margin-bottom: 1rem;
`;

const Wrapper = styled.div`
    box-sizing: border-box;
    padding: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
    background-color: #fff;
    color: #444;
    margin-top: 50px;
    border-radius: 18px;

    /* Grid styles */
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;

    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

    grid-gap: 1rem;
    @media only screen and (min-width: 900px) {
        grid-template-columns: repeat(4, minmax(240px, 1fr));
        grid-template-rows: repeat(3, minmax(240px, 1fr));
        padding-left: 3rem;
        padding-right: 3rem;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 60px;
    }
    @media only screen and (min-width: 1400px) {
        padding-left: 3rem;
        padding-right: 3rem;
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 70px;
    }
`;