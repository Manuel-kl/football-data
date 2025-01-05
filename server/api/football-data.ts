export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const league = query.league;

    if (!league) {
      throw createError({
        statusCode: 400,
        statusMessage: "League code is required",
      });
    }

    console.log("Incoming request:", {
      method: event.node.req.method,
      url: event.node.req.url,
      league,
    });

    const apiUrl = `https://api.football-data.org/v4/competitions/${league}/standings`;
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
