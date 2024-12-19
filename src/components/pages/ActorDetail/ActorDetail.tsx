import { useNavigate, useParams } from "react-router";
import { useGetStaffByIdQuery } from "../../../services/kinopoiskApi";
import {
  Box,
  Button,
  CircularProgress,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link as RouterLink } from "react-router";
import ErrorMessage from "../../ui/ErrorMessage";
import { ArrowBack } from "@mui/icons-material";
import { Movie } from "../../ui/MovieList/MovieList";

export default function ActorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetStaffByIdQuery(id);

  if (isLoading)
    return (
      <Box display={"flex"} justifyContent={"center"} margin={"auto"}>
        <CircularProgress size={"8rem"} />
      </Box>
    );

  if (error) return <ErrorMessage />;

  return (
    <>
      <Grid container spacing={4} pt={1}>
        <Grid size={{ md: 4, xs: 12 }}>
          <img
            style={{ width: "100%" }}
            src={data?.posterUrl}
            alt={data?.nameRu}
          />
        </Grid>

        <Grid size={{ md: 8, xs: 12 }}>
          <Stack flexDirection={"row"}>
            <Button
              color="primary"
              onClick={() => navigate(-1)}
              startIcon={<ArrowBack />}
            />
            <Stack flexDirection={"column"}>
              <Typography gutterBottom variant="h5">
                {data?.nameRu}
              </Typography>
              <Typography gutterBottom>{data?.nameEn}</Typography>
            </Stack>
          </Stack>

          <Typography gutterBottom variant="h5">
            Об Актере
          </Typography>

          <Grid container>
            <Grid size={6}>
              <Typography gutterBottom>Карьера</Typography>
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>{data?.profession}</Typography>
            </Grid>

            <Grid size={6}>
              <Typography gutterBottom>Рост</Typography>
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>{data?.growth}</Typography>
            </Grid>

            <Grid size={6}>
              <Typography gutterBottom>Дата рождения</Typography>
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>
                {data?.birthday} ({data.age} лет)
              </Typography>
            </Grid>

            <Grid size={6}>
              <Typography gutterBottom>Всего фильмов</Typography>
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>{data?.films.length}</Typography>
            </Grid>

            <Grid size={6}>
              <Typography gutterBottom>Факты</Typography>
            </Grid>
            <Grid size={12}>
              {data.facts.map((fact: string, index: number) => (
                <Typography key={fact} gutterBottom>
                  {index + 1}.{fact}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Typography variant="h5">Фильмы</Typography>
      </Grid>

      <Stack>
        {data.films
          .filter(
            (film: Movie, index: number, self: Movie[]) =>
              index === self.findIndex((el: Movie) => el.filmId === film.filmId)
          )
          .map((film: Movie, index: number) => (
            <Stack
              justifyContent={"space-between"}
              flexDirection={"row"}
              key={index}
            >
              <Typography>{index + 1}</Typography>
              <Link component={RouterLink} to={`/movie/${film.filmId}`}>
                {film.nameRu ? film.nameRu : film.nameEn}
              </Link>
              <Typography>{film.rating ? film.rating : "-"}</Typography>
            </Stack>
          ))}
      </Stack>
    </>
  );
}
