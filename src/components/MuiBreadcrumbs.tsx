import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-labels="breadcrumb"
        separator={<NavigateNext fontSize="small" />}
        maxItems={3}
        // itemsAfterCollapse={2}
        itemsBeforeCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="GrayText.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
