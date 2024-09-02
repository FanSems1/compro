import { Box, Typography } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import Slider from "Components/Client/Slider";


//Styles
import styles from "Styles/Client/Client.styles";

const Client = () => {
    return (
        <Box component="section" sx={styles.Container} id="client">
            <SectionHeading
                value1="Wanna Join US?"
                value2="Let's GO!!!"
                border={true}
            />
            <Slider />
        </Box>
    );
};
export default Client;