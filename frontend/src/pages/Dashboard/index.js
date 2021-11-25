import { Box, SimpleGrid, Heading  } from "@chakra-ui/react"
import CardInfo from "../../components/Card/Card"
import CardContratante from "../../components/Card/CardContratante";
import CardPrestador from "../../components/Card/CardPrestador";
import CardVagas from "../../components/Card/CardVagas";
import { vagas_f } from "../../services/vagas";
//import Navegation from "../../components/Navegation/Navegation";
function Dashboard() {

    return (
        <div className="dashboard">
            <Heading>Relatórios</Heading>
            <Box w="full" p={4}>
                <SimpleGrid columns={2} spacing={40}>
                    <CardInfo />
                    <CardContratante />
                    <CardPrestador />
                    <CardVagas tituloTable={"Vagas Abertas"} vagasFechadas={vagas_f}/>
                    <CardVagas tituloTable={"Vagas Fechadas"} vagasFechadas={vagas_f}/>
                </SimpleGrid>
            </Box>
        </div>
    );
}

export default Dashboard;