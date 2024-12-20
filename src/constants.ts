import {
  AutoAwesome,
  Bloodtype,
  FamilyRestroom,
  Fort,
  LiveTv,
  LocalMovies,
  MenuBook,
  MoodBad,
  Pool,
  Reorder,
  StarPurple500,
  VolunteerActivism,
} from "@mui/icons-material";
import CastleIcon from "@mui/icons-material/Castle";

export type TopList = {
  title: string;
  icon: IconNameType;
  url: string;
  value?: string;
};

export type MovieList = {
  title: string;
  icon: IconNameType;
  url: string;
  value?: string;
};

export const iconComponents = {
  AutoAwesome,
  Bloodtype,
  FamilyRestroom,
  LiveTv,
  LocalMovies,
  MenuBook,
  MoodBad,
  Pool,
  StarPurple500,
  VolunteerActivism,
  Fort,
  Reorder,
  CastleIcon,
};

export const TOP_LISTS: TopList[] = [
  {
    title: "ТОП 100 популярных фильмов",
    icon: "AutoAwesome",
    url: "/popular",
    value: "TOP_POPULAR_MOVIES",
  },
  {
    title: "ТОП 250 лучших фильмов",
    icon: "StarPurple500",
    url: "/best",
    value: "TOP_250_MOVIES",
  },
  {
    title: "Топ 250 лучших сериалов",
    icon: "CastleIcon",
    url: "/PopularSerials",
    value: "TOP_250_TV_SHOWS",
  },
  {
    title: "Вампиры",
    icon: "Bloodtype",
    url: "/vampire",
    value: "VAMPIRE_THEME",
  },
  {
    title: "Комиксы",
    icon: "MenuBook",
    url: "/comics",
    value: "COMICS_THEME",
  },
];

export const MOVIE_LISTS: MovieList[] = [
  {
    title: "Фильмы",
    icon: "LocalMovies",
    url: "/films",
    value: "FILM",
  },
  {
    title: "Сериалы",
    icon: "Reorder",
    url: "/serials",
    value: "TV_SERIES",
  },
  {
    title: "Мультфильмы",
    icon: "Fort",
    url: "/cartoons",
    value: "FILM",
  },
];

export type IconNameType = keyof typeof iconComponents;
