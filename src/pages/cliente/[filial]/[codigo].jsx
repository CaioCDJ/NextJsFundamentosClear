import { useRouter } from "next/router";
import Layout from "../../../components/Layout";


export default function ClienteProCodigo(){

    const router = useRouter();

    return(
        <Layout titulo="Navegacao dinamica">
            <div>Codigo = {router.query.codigo}</div>
            <div>filial = {router.query.filial}</div>
        </Layout>
    )
}