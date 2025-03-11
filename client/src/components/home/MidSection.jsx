
import { Grid, styled } from "@mui/material";
import { imageURL} from "../../constants/data";

const Wrapper = styled(Grid)`
    margin-top:10px;
    justify-content: space-between;
`;

const Image = styled("img")(({theme})=>({
    marginTop:10,
    width:"100%",
    height:"120%",
    display:"flex",
    justifyContent:"space-between",
    [theme.breakpoints.down("md")]:{
        objectFit:"cover",
        height:120
    }
}));
const MidSection = () => {
    const url ="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/18de31e52e204bee.jpg?q=20";
    return (
        <>
        <Wrapper lg={12} sm={12} md={12} xs={12} container>
            {
                imageURL.map(image => (
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Image src={image} alt="image" style={{width:"100%"}} />
                    </Grid>
                ))
            }
        </Wrapper>
        <Image style={{marginTop:80 , height:300}}src={url} alt="Sale" />
       

      
        </>
    )
}

export default MidSection;