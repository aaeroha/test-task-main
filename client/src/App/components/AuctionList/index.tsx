import { FC } from 'react';
import { Box } from '@mui/material';
import { ListItem } from './ListItem';
import { AuctionItem } from '../../../types/index';

type AuctionListProps = {
  data: AuctionItem[];
};

export const AuctionList: FC<AuctionListProps> = ({ data }) => {
  return (
    <Box
      sx={{
        mt: 3,
        mb: 2,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {data ? (
        data?.map((item) => <ListItem key={item.id} lot={item} />)
      ) : (
        <>Content not loaded</>
      )}
    </Box>
  );
};
