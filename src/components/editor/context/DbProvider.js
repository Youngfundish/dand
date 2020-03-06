import React from "react";
import DbContext from "./DbContext"

import axios from "axios";


const DbProvider = (props) => {
    
    const baseApi ="https://heka4.apache.techcollege.dk/api/products/";

    return (
        <>
        <DbContext.Provider value={{
            getProduct: async () => {
                let response = await axios.get(baseApi + "products/1");
                console.log(response.data);
                return response.data;
            }
        }}>
            {props.children}
        </DbContext.Provider>
        </>
    )
}
export default DbProvider;