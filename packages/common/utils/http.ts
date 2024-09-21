import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://192.168.1.137:8080";

export const graphqlRequest = async (query: string, variables = {}) => {
  const res = await fetch(`${API_URL}/graphql`, {
    method: "POST",
    body: JSON.stringify({ query, variables }),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()).data;
};

export const baseGraphQLQuery = fetchBaseQuery({
  baseUrl: `${API_URL}/graphql`,
  method: "POST",
});
