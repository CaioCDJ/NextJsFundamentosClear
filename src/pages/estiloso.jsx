import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Estiloso.module.css';

export default function Estiloso(){

    return(
        <Layout titulo="Exemplo de css Modularizado">
            <div className={styles.roxo}>
                <h1>Estilo usando css Modulos</h1>
            </div>    
        </Layout>
    );
}