import { Game } from '@nx-react-express/shared/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// NOTE: not mine and the one who generated it didn't care much to share the api key
// TODO: use environment variables
// const DOGS_API_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311'

// TODO: maybe generalization

function providesList<R extends { id: string | number }[], T extends string>(
  resultsWithIds: R | undefined,
  tagType: T
) {
  return resultsWithIds
    ? [
        { type: tagType, id: 'LIST' },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: 'LIST' }];
}

export const gameSlice = createApi({
  reducerPath: 'games',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }),
  tagTypes: ['Games'],
  endpoints(builder) {
    return {
      getGames: builder.query<Game[], void>({
        query: () => 'games',
        providesTags: (result) =>
          result ? result.map(({ id }) => ({ type: 'Games', id })) : ['Games'],
        transformResponse: (rawResult: { data: Game[] }) => rawResult.data,
      }),
      getGameById: builder.query<Game, string>({
        query(id: string) {
          return `games/search?id=${id}`;
        },
        providesTags: (result, error, id) => [{ type: 'Games', id }],
        transformResponse: (rawResult: { data: Game }) => rawResult.data,
      }),
    };
  },
});

export const { useGetGamesQuery, useGetGameByIdQuery } = gameSlice;
