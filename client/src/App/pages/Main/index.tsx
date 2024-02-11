import debounce from 'lodash.debounce';
import { Box, Container, Divider } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from '../../../store';
import { usePageVisibility } from '../../hooks/usePageVisibility';

import { getLots } from '../../../store/reducer/thunk/lots';

import { SearchInput } from '../../components/SearchInput';
import { AuctionList } from '../../components/AuctionList';
import { Loader } from '../../components/Loader';

// @ts-ignore
const POLLING_INTERVAL = process.env.CONFIG.POLLING_INTERVAL || 20;

type SearhInput = {
  search: string;
};

export const Main = () => {
  const [searchInput, setSearchInput] = useState<SearhInput>({ search: '' });
  const isPageVisible = usePageVisibility();
  let timerIdRef = useRef<NodeJS.Timer | null>(null);
  const dispatch = useDispatch();
  const allLotsData = useSelector((state) => state.auctionSlice.auctions.data);
  const isLoading = useSelector(
    (state) => state.auctionSlice.auctions.isLoading
  );

  //* debounced input
  const debouncedSearch = debounce((value: string) => {
    setSearchInput({ search: value });
  }, 1000);

  const pollingCallback = () => {
    dispatch(getLots(searchInput));
  };

  //* polling if user use page
  const startPolling = () => {
    pollingCallback();
    timerIdRef.current = setInterval(pollingCallback, POLLING_INTERVAL * 1000);
  };

  const stopPolling = () => {
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
      timerIdRef.current = null;
    }
  };

  useEffect(() => {
    if (isPageVisible) {
      startPolling();
    } else {
      stopPolling();
    }
    return () => {
      stopPolling();
    };
  }, [isPageVisible, searchInput]);

  return (
    <Container>
      <Loader toggl={isLoading} />
      <Box sx={{ mb: 2 }}>
        <SearchInput debouncedHandler={debouncedSearch} />
      </Box>
      <Divider />
      <Box sx={{ mt: 3, mb: 2 }}>
        <AuctionList data={allLotsData} />
      </Box>
    </Container>
  );
};
