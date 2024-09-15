// Utility to catch asynchronous function errors, including external API errors
const catchAsync = (fn: (...args: any[]) => Promise<any>) => {
  return async (...args: any[]) => {
    try {
      // Attempt to run the passed async function (e.g., an API request)
      return await fn(...args);
    } catch (error: any) {
      // Handle external API errors or other async errors
      if (error.response && error.response.status) {
        // API-specific error structure (like when using Axios)
        console.error(
          `API Error: ${error.response.statusText} (Status Code: ${error.response.status})`
        );
        throw new Error(
          `API Error: ${error.response.statusText} (Status Code: ${error.response.status})`
        );
      }
      // For other errors, log and throw the error
      console.error("An error occurred:", error.message || error);
      throw new Error(error.message || "An unexpected error occurred");
    }
  };
};

export default catchAsync;
