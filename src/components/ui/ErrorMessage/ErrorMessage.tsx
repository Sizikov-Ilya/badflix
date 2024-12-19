import { Box, Typography } from "@mui/material";

export default function ErrorMessage() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={"auto"}
    >
      <Typography variant="h6">
        Произошла ошибка: попробуйте обновить страницу
      </Typography>
    </Box>
  );
}
