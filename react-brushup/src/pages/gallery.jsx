import React, { useState, useEffect } from "react";
import styled from "styled-components";
import homeContext from "../context/homeContext";
import axios from "axios";

const Gallery = props => {
    const context = React.useContext(homeContext);

    const [breedImage, setBreedImage] = React.useState([]);

    console.log("TCL: context", context);
    useEffect(() => {
        console.log("fetch data here");

        axios
            .get(
                `https://dog.ceo/api/breed/${
                    context.homeState.BreedName
                }/images`
            )
            .then(response => {
                console.log("Response node details", response.data.message);
                const { message } = response.data;
                console.log("TCL: Dashboard -> message", message);
                setBreedImage(message);
                context.dispatch({ type: "setBreedResult", breedImage });
            })
            .catch(error => {
                console.log("Error in useEffect nameAdd", error);
                alert("No Data available, reload");
            });
    }, []);

    const ImageRender = breedImage.map((img, key) => {
        console.log("TCL: img", img);
        return <img src={img} alt="Breed" style={{ maxWidth: "100%" }} />;
    });

    return (
        <>
 
           
            <ImageWrapper>{ImageRender}</ImageWrapper>
        </>
    );
};

export default Gallery;

const ImageWrapper = styled.div`
    /* Grid styles */
    display: grid;
    align-items: stretch;

    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    grid-gap: 20px;
    .img {
        border: 1px solid #ccc;
        box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
        max-width: 100%;
    }
    @media only screen and (min-width: 900px) {
        grid-template-columns: repeat(3, minmax(200px, 1fr));
        padding-left: 3rem;
        padding-right: 3rem;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 100px;
        grid-gap: 40px;
    }
    @media only screen and (min-width: 1400px) {
        padding-left: 3rem;
        padding-right: 3rem;
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 150px;
        grid-gap: 50px;
        .img {
            border: 1px solid #ccc;
            box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
            max-width: 100%;
        }
    }
`;
