import { Box, Typography } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import Slider from "Components/Client/Slider";


//Styles
import styles from "Styles/Client/Client.styles";

const Client = () => {
    return (
        <Box component="section" sx={{ ...styles.Container, color:"white"}} id="client">
            {/* <SectionHeading
                value1="Tunggu apalagi? Ayo wujudkan impianmu bersama EUREKA!"
                value2="Dengan eureka, kita ciptakan business goal dengan solusi professional dengan anda. #Salam Victory! "
                // border={true}
            /> */}
            <Slider />
        </Box>
    );
};
export default Client;