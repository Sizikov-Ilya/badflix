import { useGetFilmsQuery, useGetFilmTopQuery } from "../services/kinopoiskApi";
import { TOP_LISTS } from "../constants";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
export default function useMoviesQuery() {
  const { page, order, countries, year } = useSelector(
    (state: RootState) => state.currentQuery
  );

  const responsePopular = useGetFilmTopQuery({
    type: TOP_LISTS[0].value,
    page,
  });

  const responseBest = useGetFilmTopQuery({
    type: TOP_LISTS[1].value,
    page,
  });

  const responseFilms = useGetFilmsQuery({
    type: "FILM",
    countries,
    genreId: "1",
    order,
    year,
    page,
  });
  const responseSerial = useGetFilmsQuery({
    type: "TV_SERIES",
    countries,
    genreId: "1",
    order,
    year,
    page,
  });
  const responseCartoons = useGetFilmsQuery({
    type: "FILM",
    countries,
    genreId: "18",
    order,
    year,
    page,
  });

  const isLoading =
    responsePopular.isFetching ||
    responseBest.isFetching ||
    responseFilms.isFetching ||
    responseSerial.isFetching ||
    responseCartoons.isFetching;

  const hasError =
    responsePopular.isError ||
    responseBest.isError ||
    responseFilms.isError ||
    responseSerial.isError ||
    responseCartoons.isError;
  return {
    isLoading,
    hasError,
    responsePopular,
    responseBest,
    responseFilms,
    responseSerial,
    responseCartoons,
  };
}
