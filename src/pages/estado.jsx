import Layout from "../components/Layout";
import { useState } from "react";

export default function Estado(){
   
    const [numero, setNumero] = useState(0);


    function incrementar(){
        setNumero(numero+1)
    }

    return(
        <Layout>
            <div>{numero}</div>
            <button onClick={incrementar}>Icrementar</button>
        </Layout>
    )
}