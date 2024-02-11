import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, CardMedia, CardContent, Card } from '@mui/material';
import { AuctionItem } from '../../../../types/index';
// @ts-ignore
const IMAGES_BASEPATH = process.env.CONFIG.IMAGES_BASEPATH || 'alt-path';

type ListItemProps = { lot: AuctionItem };

function pad(num: number) {
  return num.toString().padStart(2, '0');
}

function formatTime(time: number) {
  const curTime = new Date(time - Date.now());
  const hours = curTime.getUTCHours();
  const minutes = curTime.getUTCMinutes();
  const seconds = curTime.getUTCSeconds();
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export const ListItem: FC<ListItemProps> = ({ lot }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return prevTime;
        }
        return prevTime - 100;
      });
    }, 1000);
    setTimeLeft(lot.finishTime);
    return () => clearInterval(timer);
  }, [lot]);

  return (
    <Card
      sx={{
        ml: 2,
        mr: 2,
        mt: 3,
        mb: 2,
        minWidth: 345,
        minHeight: 345,
        position: 'relative',
      }}
    >
      <Link
        to={`/${lot.id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <CardContent
          sx={{
            backgroundColor: '#dfdfdf',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography gutterBottom variant="h6" component="h6">
            {lot.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontWeight: 'bold',
            }}
          >
            {formatTime(timeLeft)}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={`${IMAGES_BASEPATH}${lot.imgUrl}`}
          alt={lot.title}
          sx={{ position: 'absolute', height: '80%' }}
        />
        <Typography
          variant="h6"
          color="text.secondary"
          component="p"
          sx={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            backgroundColor: '#afafaf',
            padding: '5px 15px',
            color: 'white',
            borderTopLeftRadius: '5px',
          }}
        >
          Ставка: {lot.bid} р
        </Typography>
      </Link>
    </Card>
  );
};
