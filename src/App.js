import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("popular");

  const filteredMovies = movies.filter(movie =>
    movie.name?.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {

    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {

        let filtered = data;

        if (category === "top_rated") {
          filtered = data.sort((a, b) =>
            (b.rating?.average || 0) - (a.rating?.average || 0)
          );
        }

        if (category === "upcoming") {
          filtered = data.filter(show => show.premiered > "2018");
        }

        setMovies(filtered);

      });

  }, [category]);

  return (
    <Routes>

      <Route
        path="/"
        element={
          <>
            <Navbar setSearch={setSearch} setCategory={setCategory} />

            <Box sx={{ padding: 3 }}>
              <Grid container spacing={3}>

                {filteredMovies.map((movie) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                    <MovieCard movie={movie} />
                  </Grid>
                ))}

              </Grid>
            </Box>
          </>
        }
      />

      <Route path="/movie" element={<MovieDetails />} />

    </Routes>
  );
}

export default App;