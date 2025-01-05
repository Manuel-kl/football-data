export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const league = query.league;

    if (!league) {
      return createError({
        statusCode: 400,
        statusMessage: "League code is required",
      });
    }

    const apiUrl = `https://api.football-data.org/v4/competitions/${league}/standings`;
    const headers = {
      "X-Auth-Token": process.env.API_KEY,
    };

    const response = await $fetch(apiUrl, { headers });

    return response;
  } catch (error) {
    return createError({
      statusCode: error.response?.status || 500,
      statusMessage: "Failed to football data",
    });
  }
});
