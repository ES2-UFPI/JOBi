import { Box, SimpleGrid } from "@chakra-ui/react"
import CardInfo from "../../components/Card/Card"
//import Navegation from "../../components/Navegation/Navegation";
function Dashboard() {

    return (
        <div>
            <Box w="full" p={4}>
                <SimpleGrid columns={3} spacing={40}>
                    <CardInfo />
                    <CardInfo />
                    <CardInfo />
                    <CardInfo />
                    <CardInfo />
                    <CardInfo />
                    <CardInfo />
                </SimpleGrid>
            </Box>
        </div>
    );
}

export default Dashboard;