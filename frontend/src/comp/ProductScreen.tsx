import React from 'react'
import { useParams } from "react-router-dom";

const ProductScreen = () => {
    const params = useParams();
    return (
        <div>{params.slug}</div>
    )
}

export default ProductScreen