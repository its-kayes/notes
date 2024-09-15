import axios from "axios";
import catchAsync from "../handler/catchAsync";

export const Notes = catchAsync(async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/3"
  );

  return response.data;
});
