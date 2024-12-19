/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const kinopoiskApiKey = import.meta.env.VITE_KINOPOISK_KEY;

export const kinopoiskApi = createApi({
  reducerPath: "kinopoiskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api",
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", kinopoiskApiKey);
      headers.set("Content-Type", "application/json");
    },
  }),

  endpoints: (builder) => ({
    getFilmTop: builder.query({
      query: ({ type, page }) =>
        `/v2.2/films/collections?type=${type}&page=${page}`,
    }),
    getFilms: builder.query({
      query: ({
        countries,
        genreId,
        order = "NUM_VOTE",
        type = "FILM",
        year,
        page,
        keyword = "",
      }) =>
        `/v2.2/films?countries=${countries}&genres=${genreId}&order=${order}&type=${type}&yearFrom=${year}&yearTo=${year}&page=${page}&keyword=${keyword}`,
    }),

    getGenreAndCountries: builder.query({
      query: () => `/v2.2/films/filters`,
    }),

    getFilm: builder.query({
      query: (id) => `/v2.2/films/${id}`,
    }),

    getSequelsAndPrequels: builder.query({
      query: (id) => `/v2.1/films/${id}/sequels_and_prequels`,
      transformResponse: (response: any) =>
        response.map((el: any) => ({ ...el, kinopoiskId: el.filmId })),
    }),

    getStaff: builder.query({
      query: (id) => `/v1/staff?filmId=${id}`,
    }),

    getStaffById: builder.query({
      query: (id) => `/v1/staff/${id}`,
    }),
  }),
});

export const {
  useGetStaffByIdQuery,
  useGetFilmQuery,
  useGetSequelsAndPrequelsQuery,
  useGetStaffQuery,
  useGetFilmTopQuery,
  useGetFilmsQuery,
  useGetGenreAndCountriesQuery,
} = kinopoiskApi;
