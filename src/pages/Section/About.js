import { Container } from "@mui/material";

// SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import Myself from "Components/About/Myself";

const About = () => {
    return (
        <Container maxWidth="xl" disableGutters as="section" sx={{ pt: "5em" }} id="about">
            {/* <SectionHeading
                value1="Explore the GREATNESS"
                value2="We BRING!"
                border={true}
            /> */}
            <Myself />
        </Container>
    );
};
export default About;