import { Stack } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { DonateBox } from '../components/DonateBox';
import { Header } from '../components/Header';
import {
  AboutGlioblastoma,
  HomeHero,
  RememberingKristin,
} from '../components/pageSections/home';
import { EventProps } from '../types';

const Home = (props: { featuredEvent: EventProps }) => {
  return (
    <>
      <NextSeo
        title="Kristin Renee Cantrell Hill Memorial Endowment Fund"
        description="Kristin's Endowment Fund provides funding for care and program assistance for neurology patients with brain tumors and scholarships to nursing students."
        canonical="https://www.uptothesky.org/"
      />
      <Stack
        w="full"
        spacing={{ base: 16, sm: 24, md: 36 }}
        mb={{ base: 24, md: 36 }}
      >
        <Stack spacing={{ base: 0, md: 36 }} bg="white" alignItems="center">
          <Header />
          <HomeHero />
        </Stack>
        <RememberingKristin />
        <AboutGlioblastoma />
        <DonateBox />
      </Stack>
    </>
  );
};

export default Home;
