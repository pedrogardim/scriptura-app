import { createApi } from "@reduxjs/toolkit/query/react";
import { baseGraphQLQuery } from "../../utils/http";

const getChapter = `#graphql
query bible($book: String!, $chapter: Int!) {
  bible(input:{book: $book, chapter: $chapter}) {
    text
    verseNum
  }
}`;

export const bibleApi = createApi({
  reducerPath: "bibleApi",
  baseQuery: baseGraphQLQuery,
  endpoints: (builder) => ({
    getBible: builder.query({
      query: (variables) => ({
        url: "",
        body: { query: getChapter, variables },
      }),
      transformResponse: (response) => response.data.bible,
    }),
  }),
});

export const { useGetBibleQuery, useLazyGetBibleQuery } = bibleApi;
