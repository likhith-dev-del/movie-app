import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function MovieDetails() {

  const { state } = useLocation();
  const movie = state.movie;

  return (
    <Box sx={{ padding: 4 }}>

      <Typography variant="h4" gutterBottom>
        {movie.name}
      </Typography>

      <img
        src={movie.image?.original}
        alt={movie.name}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        ⭐ Rating: {movie.rating?.average || "N/A"}
      </Typography>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Release Date: {movie.premiered}
      </Typography>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Language: {movie.language}
      </Typography>

      <Typography
        variant="body1"
        sx={{ marginTop: 2 }}
        dangerouslySetInnerHTML={{ __html: movie.summary }}
      />

    </Box>
  );
}

export default MovieDetails;