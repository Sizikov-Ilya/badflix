import { Box, Skeleton, Stack, useMediaQuery } from "@mui/material";
import React from "react";

export default function MoviesSkeleton() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box mt={2} mb={2}>
      {new Array(5).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="200px"
            height="32px"
          />
          <Stack flexWrap={"wrap"} direction={"row"} justifyContent={"center"}>
            {new Array(5).fill(null).map((_, index) => (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={isMobile ? "100%" : "230px"}
                height={isMobile ? "529px" : "230px"}
                key={index}
              />
            ))}
          </Stack>
        </React.Fragment>
      ))}
    </Box>
  );
}
