import { Heading, Spinner } from '@chakra-ui/react';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  isLoading: boolean;
}

export const Layout = ({ children, isLoading }: LayoutProps) => {
  return isLoading ? (
    <div className="loader-scene">
      <Spinner
        thickness="8px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Heading as="h3" size="xl">
        Loading...
      </Heading>
    </div>
  ) : (
    <main>{children}</main>
  );
};
