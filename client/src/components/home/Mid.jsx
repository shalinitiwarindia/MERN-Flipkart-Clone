
import { Grid, styled } from "@mui/material";
import {imgURL } from "../../constants/data";

const Wrap = styled(Grid)`
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
const Mid= () => {
    const url ="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/2a424b4ce6a5f5b2.jpg?q=20";
    return (
        <>
        <Image src={url} alt="Flight" />
        <Wrap lg={12} sm={12} md={12} xs={12} container>
            {
                imgURL.map(image => (
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Image src={image} alt="image" style={{width:"100%"}} />
                    </Grid>
                ))
            }
        </Wrap>

      
        </>
    )
}

export default Mid;