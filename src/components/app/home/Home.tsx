'use client';
import React from 'react';

import Container from '@/components/share/container';
import locale from '@/locale';

const Home = () => {
  const { app } = locale;

  return <Container className='h-[calc(100dvh-90px)] overflow-auto'>home</Container>;
};

export default Home;
