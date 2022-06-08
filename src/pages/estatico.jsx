import Layout from '../components/Layout';


/**
 * a pagina so e estatica quando o build e 
 * gerado, no --npm run dev-- nao funciona pois ele 
 * recompila o codigo a cada save  
 *  
 */
export function getStaticProps(){
    return{
        props:{
            numero:Math.random()
        }
    }
}

export default function Estatico(props){

    return(
        <Layout titulo="Conteudo Estatico">
            <div>{props.numero}</div>
        </Layout>
    )
}