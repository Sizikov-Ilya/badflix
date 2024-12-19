import { Box, Link, Rating, Stack, Tooltip } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { Movie } from "../MovieList/MovieList";
import styles from "./MovieCard.module.css";

interface MovieCardProps {
  reload?: boolean;
  movie: Movie;
}

export default function MovieCard({ movie, reload = false }: MovieCardProps) {
  const linkProps = reload
    ? { component: "a", href: `/movie/${movie.kinopoiskId}` }
    : { component: RouterLink, to: `/movie/${movie.kinopoiskId}` };

  return (
    <Stack alignItems={"center"}>
      <Link {...linkProps}>
        <img
          src={movie.posterUrlPreview}
          alt={movie.nameRu}
          className={styles.img}
        />

        <Link component="p" textAlign={"center"} sx={{ width: 200 }}>
          {movie.nameRu ? movie.nameRu : movie.nameEn}
        </Link>
      </Link>

      {movie.ratingKinopoisk && (
        <Stack>
          <Tooltip title={`${movie.ratingKinopoisk} / 10`}>
            <Box>
              <Rating
                precision={0.5}
                readOnly
                name="read-only"
                value={movie.ratingKinopoisk / 2}
              />
            </Box>
          </Tooltip>
        </Stack>
      )}
    </Stack>
  );
}
