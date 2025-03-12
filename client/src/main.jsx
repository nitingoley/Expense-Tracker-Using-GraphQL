import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.VITE_NODE_ENV ==="development" ?  "http://localhost:4000/graphql" : "/graphql", //  the url of our graphQl server
  cache: new InMemoryCache(), // Apollo Client uses to cache query results after fetching them.
  credentials: "include", //this tells apollo clients to send cookies along with every request to the server.
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
