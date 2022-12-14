import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  PRIMARY_BROWN,
  PRIMARY_GREY,
  Card,
  OrderButton
} from "./StyledComponents";

const ALT_STYLES = {
  border: "1px solid blue",
  color: "white",
  backgroundColor: "rgb(187, 222, 251, 0.1)"
};

export default function Fillings({ allIngredients }) {
  const [selectedProtein, setSelectedProtein] = useState();
  const [selectedRice, setSelectedRice] = useState();
  const [selectedToppings, setSelectedToppings] = useState();

  function OrderRecap() {
    const proteinDisplayed = selectedProtein.name;
    const riceDisplayed = selectedRice.name;
    const toppingsDisplayed = selectedToppings.name;

    alert(proteinDisplayed + ", " + riceDisplayed + ", " + toppingsDisplayed);
  }

  return (
    <Box sx={{ height: "100vh" }}>
      <Typography
        sx={{
          fontWeight: "600",
          color: PRIMARY_BROWN,
          padding: "30px 0"
        }}
        variant="h5"
        gutterBottom={false}
      >
        PROTEIN
      </Typography>
      {allIngredients.proteins.map((protein, i) => (
        <Card
          key={i}
          variant="outlined"
          onClick={() => setSelectedProtein(protein)}
          sx={protein === selectedProtein ? ALT_STYLES : {}}
        >
          <Typography
            sx={{
              fontWeight: "600",
              color: PRIMARY_BROWN
            }}
            variant="h6"
            gutterBottom={false}
          >
            {protein.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start"
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                color: PRIMARY_GREY
              }}
              variant="subtitle1"
              gutterBottom={false}
            >
              ${protein.priceUSD.toFixed(2)}
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                color: PRIMARY_GREY,
                paddingLeft: "40px"
              }}
              variant="subtitle1"
              gutterBottom={false}
            >
              {protein.calories} CAL
            </Typography>
          </Box>
        </Card>
      ))}
      <Typography
        sx={{
          fontWeight: "600",
          color: PRIMARY_BROWN,
          padding: "30px 0"
        }}
        variant="h5"
        gutterBottom={false}
      >
        Rice
      </Typography>
      {allIngredients.rice.map((rice, i) => (
        <Card
          key={i}
          variant="outlined"
          onClick={() => setSelectedRice(rice)}
          sx={rice === selectedRice ? ALT_STYLES : {}}
        >
          <Typography
            sx={{
              fontWeight: "600",
              color: PRIMARY_BROWN
            }}
            variant="h6"
            gutterBottom={false}
          >
            {rice.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start"
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                color: PRIMARY_GREY
              }}
              variant="subtitle1"
              gutterBottom={false}
            ></Typography>
            <Typography
              sx={{
                fontWeight: "600",
                color: PRIMARY_GREY
              }}
              variant="subtitle1"
              gutterBottom={false}
            >
              {rice.calories} CAL
            </Typography>
          </Box>
        </Card>
      ))}
      <Typography
        sx={{
          fontWeight: "600",
          color: PRIMARY_BROWN,
          padding: "30px 0"
        }}
        variant="h5"
        gutterBottom={false}
      >
        Toppings
      </Typography>
      {allIngredients.toppings.map((topping, i) => (
        <Card
          key={i}
          variant="outlined"
          onClick={() => setSelectedToppings(topping)}
          sx={topping === selectedToppings ? ALT_STYLES : {}}
        >
          <Typography
            sx={{
              fontWeight: "600",
              color: PRIMARY_BROWN
            }}
            variant="h6"
            gutterBottom={false}
          >
            {topping.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start"
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                color: PRIMARY_GREY
              }}
              variant="subtitle1"
              gutterBottom={false}
            ></Typography>
            <Typography
              sx={{
                fontWeight: "600",
                color: PRIMARY_GREY
              }}
              variant="subtitle1"
              gutterBottom={false}
            >
              {topping.calories} CAL
            </Typography>
          </Box>
        </Card>
      ))}
      <OrderButton
        onClick={OrderRecap}
        sx={{ marginTop: "20px" }}
        variant="outlined"
      >
        <Typography
          sx={{
            fontWeight: "600",
            color: "white"
          }}
          variant="h6"
          gutterBottom={false}
        >
          Place Order
        </Typography>
      </OrderButton>
    </Box>
  );
}
