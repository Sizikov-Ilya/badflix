import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import ActorDetail from "./components/pages/ActorDetail";
import MovieDetail from "./components/pages/MovieDetail";
import Movies from "./components/pages/Movies";
import { TOP_LISTS, MOVIE_LISTS } from "./constants";
import MovieListMain from "./components/pages/MovieListMain";
import MovieListTop from "./components/pages/MovieListTop";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Movies />,
        },
        ...TOP_LISTS.map((el) => ({
          path: el.url,
          element: <MovieListTop />,
        })),
        ...MOVIE_LISTS.map((el) => ({
          path: el.url,
          element: <MovieListMain />,
        })),
        {
          path: "/movie/:id",
          element: <MovieDetail />,
        },
        {
          path: "/actor/:id",
          element: <ActorDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
