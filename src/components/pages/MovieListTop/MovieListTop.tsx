import { useEffect, useState } from "react";
import { TOP_LISTS } from "../../../constants";
import { useGetFilmTopQuery } from "../../../services/kinopoiskApi";
import { useLocation, useNavigate } from "react-router";
import { Button, Stack, Typography } from "@mui/material";
import MovieList from "../../ui/MovieList";
import { ArrowBack } from "@mui/icons-material";
import ErrorMessage from "../../ui/ErrorMessage";
import MoviesListTopSkeleton from "./MoviesListTopSkeleton";

export default function MovieListTop() {
  const location = useLocation();
  const Navigate = useNavigate();
  const [page, setPage] = useState(1);

  const movieType = TOP_LISTS.find((el) => el.url === location.pathname);

  const { data, error, isLoading } = useGetFilmTopQuery({
    type: movieType?.value,
    page,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [location]);

  if (error) return <ErrorMessage />;
  if (isLoading) return <MoviesListTopSkeleton />;

  return (
    <>
      <Stack sx={{ mb: 2, mt: 2 }} flexDirection={"row"}>
        <Button onClick={() => Navigate(-1)} startIcon={<ArrowBack />} />
        <Typography variant="h4">{movieType?.title}</Typography>
      </Stack>
      <MovieList
        movies={data.items}
        totalPages={data.totalPages}
        page={page}
        setPage={setPage}
        countries={""}
        order={""}
        year={""}
        genreId={""}
      />
    </>
  );
}
