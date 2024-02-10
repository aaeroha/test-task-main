import { CardMedia, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../../store";
import { getLotById } from "../../../store/reducer/thunk/lots";
// @ts-ignore
const IMAGES_BASEPATH = process.env.CONFIG.IMAGES_BASEPATH || "alt-path";

export const Car = () => {
  const { id } = useParams<string>();
  const dispatch = useDispatch();
  const carItem = useSelector((state) => state.auctionSlice.auction.data);

  useEffect(() => {
    if (id) dispatch(getLotById(id));
  }, []);

  return (
    <Container>
      <Typography variant="h6" component="h6">
        Подробная информация об автомобиле {carItem?.title}
      </Typography>
      <CardMedia
        component="img"
        sx={{ mt: 3, width: "350px", height: "100%" }}
        src={`${IMAGES_BASEPATH}${carItem?.imgUrl}`}
        alt={carItem?.title}
      />
      <Typography
        variant="inherit"
        component="p"
        sx={{ mt: 3, fontWeight: "500" }}
      >
        Пробег: {carItem?.mileage} км
      </Typography>
    </Container>
  );
};
