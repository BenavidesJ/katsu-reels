import { Spinner } from '@chakra-ui/react';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  isLoading: boolean;
}

export const Layout = ({ children, isLoading }: LayoutProps) => {
  return isLoading ? (
    <div>
      <Spinner
        thickness="8px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  ) : (
    <main>{children}</main>
  );
};
