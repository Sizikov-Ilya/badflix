import { useNavigate, useParams } from "react-router";
import {
  useGetFilmQuery,
  useGetSequelsAndPrequelsQuery,
  useGetStaffQuery,
} from "../../../services/kinopoiskApi";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router";
import Grid from "@mui/material/Grid2";
import ErrorMessage from "../../ui/ErrorMessage";
import { ArrowBack, Language, Movie as MovieIcon } from "@mui/icons-material";
import MovieCard from "../../ui/MovieCard";
import { Movie } from "../../ui/MovieList/MovieList";
import VideoPlayer from "../../ui/VideoPlayer";

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const responseFilm = useGetFilmQuery(id);
  const responseSequelsAndPrequels = useGetSequelsAndPrequelsQuery(id);
  const responseStaff = useGetStaffQuery(id);

  if (
    responseFilm.isLoading ||
    responseSequelsAndPrequels.isLoading ||
    responseStaff.isLoading
  ) {
    return (
      <Box display={"flex"} justifyContent={"center"} margin={"auto"}>
        <CircularProgress size={"8rem"} />
      </Box>
    );
  }

  if (responseFilm.isError || responseStaff.isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      <Grid container spacing={2} sx={{ mt: { md: 2 } }}>
        <Grid size={{ md: 4, sm: 12 }}>
          <img
            width={"100%"}
            src={responseFilm.data?.posterUrl}
            alt={responseFilm.data?.nameRu}
          />
        </Grid>
        <Grid size={{ md: 6, sm: 12 }}>
          <Grid container>
            <Grid size={2}>
              <Button
                onClick={() => navigate(-1)}
                size="large"
                startIcon={<ArrowBack />}
              />
            </Grid>
            <Grid alignContent={"center"} size={4}>
              <Typography variant="h5">{responseFilm.data?.nameRu}</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size={6}>
              <Typography>Год</Typography>
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>{responseFilm.data?.year}</Typography>
            </Grid>

            <Grid size={6}>
              <Typography gutterBottom>Страна</Typography>
            </Grid>
            <Grid size={6}>
              {responseFilm.data?.countries.map(
                ({ country }: { country: string }) => (
                  <Typography gutterBottom key={country}>
                    {country}
                  </Typography>
                )
              )}
            </Grid>

            <Grid size={6}>
              <Typography gutterBottom>Жанры</Typography>
            </Grid>
            <Grid size={6}>
              {responseFilm.data?.genres.map(({ genre }: { genre: string }) => (
                <Typography gutterBottom key={genre}>
                  {genre}
                </Typography>
              ))}
            </Grid>

            <Grid size={6}>
              <Typography gutterBottom>Режиссеры</Typography>
            </Grid>
            <Grid size={6}>
              {responseStaff.data
                ?.filter(
                  (el: { professionText: string }) =>
                    el.professionText === "Режиссеры"
                )
                .slice(0, 5)
                .map(({ nameRu }: { nameRu: string }, index: number) => (
                  <Typography key={index}>{nameRu}</Typography>
                ))}
            </Grid>

            <Grid size={6}>
              <Typography>Время </Typography>
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>
                {responseFilm.data?.filmLength} мин
              </Typography>
            </Grid>

            <Grid size={12}>
              <Typography>Описание </Typography>
            </Grid>
            <Grid size={12}>
              <Typography gutterBottom>
                {responseFilm.data?.description
                  ? responseFilm.data?.description
                  : "Нет описания"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ md: 2, sm: 12 }}>
          <Typography gutterBottom variant="h6">
            В главных ролях:
          </Typography>
          {responseStaff.data
            .filter(
              (el: { professionText: string }) => el.professionText === "Актеры"
            )
            .slice(0, 5)
            .map(({ nameRu, staffId }: { nameRu: string; staffId: number }) => (
              <div key={staffId}>
                <Link
                  component={RouterLink}
                  to={`/actor/${staffId}`}
                  gutterBottom
                >
                  {nameRu}
                </Link>
              </div>
            ))}
        </Grid>
      </Grid>

      <Grid
        mt={4}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        container
        spacing={2}
      >
        <Grid size={12} justifyContent={"center"} display={"flex"} mt={4}>
          <ButtonGroup variant="outlined" size="small">
            <Button
              endIcon={<Language />}
              href={responseFilm.data.webUrl}
              target="_blank"
            >
              Кинопоиск
            </Button>
            <Button
              endIcon={<MovieIcon />}
              href={`https://www.imdb.com/title/${responseFilm.data.imdbId}`}
              target="_blank"
            >
              IMDB
            </Button>
          </ButtonGroup>
        </Grid>

        <Grid size={12}>
          <Typography textAlign={"center"} variant="h5">
            Смотреть онлайн
          </Typography>
          <VideoPlayer />
        </Grid>
      </Grid>

      {responseSequelsAndPrequels.data && (
        <Stack alignItems={"center"}>
          <Typography gutterBottom variant="h5">
            Сиквелы и приквелы
          </Typography>
          <Stack
            sx={{ gap: 2 }}
            direction="row"
            justifyContent="center"
            flexWrap="wrap"
          >
            {responseSequelsAndPrequels?.data?.map(
              (el: Movie, index: number) => (
                <MovieCard key={index} movie={el} reload />
              )
            )}
          </Stack>
        </Stack>
      )}
    </>
  );
}
