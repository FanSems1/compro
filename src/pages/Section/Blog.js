import { Container, Box } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import SingleBlog from "Components/Blog/SingleBlog";
import Company from "Components/Blog/Company";

const Blog = () => {
    return (
        <Container maxWidth="xl" disableGutters as="section" sx={{ py: "5em"}} id="blog">
                <Box sx={{ pl: '20px' }}>
                <SectionHeading
                    value1="Every Single Update"
                    value2="News & Blogs"
                    border={false}
                />
                </Box>
            <SingleBlog />
        </Container>
    );
};

export default Blog;