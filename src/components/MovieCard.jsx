import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useNavigate}  from "react-router-dom";

export default function MovieCard({ movie }) {

  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate("/movie", { state: { movie } })}
      sx={{
        width: 250,
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6
        }
      }}
    >

      <CardMedia
        component="img"
        height="350"
        image={movie.image?.medium}
        alt={movie.name}
      />

      <CardContent>

        <Typography variant="h6">
          {movie.name}
        </Typography>

        <Typography variant="body2">
          ⭐ {movie.rating?.average || "N/A"}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {movie.premiered}
        </Typography>

      </CardContent>

    </Card>
  );
}