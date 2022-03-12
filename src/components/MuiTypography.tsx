import React from "react";
import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">subtitle1 Heading</Typography>
      <Typography variant="subtitle2">subtitle2 Heading</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, adipisci
        eveniet molestiae quod inventore in id nihil pariatur expedita!
        Aspernatur amet tenetur totam, vitae soluta vero sapiente facere natus
        exercitationem!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        maiores, mollitia laudantium error voluptatibus temporibus nemo quasi
        reiciendis repellendus eos officiis, laboriosam assumenda explicabo
        perferendis. Iste a accusantium provident quia.
      </Typography>
    </div>
  );
};
