import { theme } from "../../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query/devtools";



import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={ queryClient }>
      <ChakraProvider theme={ theme }>
          <Component { ...pageProps } />
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
