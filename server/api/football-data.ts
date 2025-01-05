export default defineEventHandler(async (event) => {
    try {
      console.log("Incoming request:", {
        method: event.node.req.method,
        url: event.node.req.url,
      });

      const apiUrl = "https://api.football-data.org/v4/competitions/PL/standings";
      const headers = {
        "X-Auth-Token": process.env.API_KEY,
      };

      console.log("API request details:", { apiUrl, headers });

      const response = await $fetch(apiUrl, { headers });

      return response;
    } catch (error) {
      console.error("Error fetching external API:", {
        message: error.message,
        stack: error.stack,
        status: error.response?.status,
      });

      throw createError({
        statusCode: error.response?.status || 500,
        statusMessage: "Failed to fetch external API",
      });
    }
  });
