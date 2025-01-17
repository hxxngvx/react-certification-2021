import React from 'react';

import GridVideo from '../../components/GridVideo';
import Container from '../../components/Common/Container';

import { withPageLayout } from '../../components/Layout';
import { useAuthContext } from '../../providers/Auth';

const FavoritesPage = () => {
  const {
    state: { favorites },
  } = useAuthContext();

  return (
    <Container className="mx-auto">
      <GridVideo videos={favorites} pathname="/favorites/watch" />
    </Container>
  );
};

export default withPageLayout(FavoritesPage);
