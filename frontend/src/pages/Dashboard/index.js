import { Box, SimpleGrid, Heading  } from "@chakra-ui/react"
import CardInfo from "../../components/Card/Card"
import { useState, useEffect } from "react";
import axios from '../../services/axios';
import CardContratante from "../../components/Card/CardContratante";
import CardPrestador from "../../components/Card/CardPrestador";
import CardVagas from "../../components/Card/CardVagas";
import { vagas_f } from "../../services/vagas";
//import Navegation from "../../components/Navegation/Navegation";
function Dashboard() {
    const [ dados, setDados ] = useState([]);
    useEffect(()=>{
        async function getDados(){

            let data = localStorage.getItem('userData');
            data = JSON.parse(data);
            
            let route = `/conexoes/select`;

            const response = await axios.get(route);
            
            //console.log(response.data.reverse());

            setDados(response.data);
            
        }

        getDados();
        
    }, []);


    return (
        <div className="dashboard">
            <div className="dash_head">
            <h1 style={{fontFamily: 'Montserrat, sans-serif', fontSize: 30}}>JOB<span style={{color: '#008AEE'}}>i</span></h1>
            </div>
            <Heading style={{fontSize: 40}}>Relatórios</Heading>
            {console.log(dados)}
            <Box w="full" p={4}>
                <SimpleGrid columns={1} spacing={40}>
                    
                    {((dados.vagas_f !== undefined) && (dados.vagas_a !== undefined) && (dados.remuneracao !== undefined) && (dados.conexoes !== undefined)) && <div>
                        {console.log(dados.remuneracao)}
                        <CardInfo conexoes={dados.conexoes}/>
                        <CardContratante contratantes={dados.contratantes}/>
                        <CardPrestador prestadores={dados.prestadores}/>
                        <CardVagas tituloTable={"Vagas Abertas"} vagasFechadas={dados.vagas_a}/>
                        <CardVagas tituloTable={"Vagas Fechadas"} vagasFechadas={dados.vagas_f} Remuneracao={dados.remuneracao} />
                    </div>
                    }
                    
                </SimpleGrid>
            </Box>
        </div>
    );
}

export default Dashboard;