import { Skeleton, Stack, useMediaQuery } from "@mui/material";
import React from "react";

export default function MoviesListMainSkeleton() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="200px"
        height="32px"
      />
      <Stack
        sx={{
          flexDirection: { sm: "column", xl: "row" },
          gap: 1,
          mt: 2,
          mb: 2,
        }}
      >
        <Skeleton
          animation="wave"
          variant="rounded"
          width={isMobile ? "100%" : "25%%"}
          height={40}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width={isMobile ? "100%" : "25%%"}
          height={40}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width={isMobile ? "100%" : "25%%"}
          height={40}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width={isMobile ? "100%" : "25%%"}
          height={40}
        />

        <Skeleton animation="wave" variant="rounded" width={132} height={40} />
      </Stack>

      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {Array(15)
          .fill(null)
          .map((_, index) => (
            <React.Fragment key={index}>
              <Stack flexDirection={"column"}>
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="215px"
                  height="322px"
                />
                <Skeleton animation="wave" variant="text" width={120} />
                <Skeleton animation="wave" variant="text" width={120} />
              </Stack>
            </React.Fragment>
          ))}
      </Stack>
    </>
  );
}
