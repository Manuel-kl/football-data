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
  
      const apiUrl = 'https://api.football-data.org/v4';
      const headers = {
        "X-Auth-Token": process.env.API_KEY || '',
      };
  
      if (!process.env.API_KEY) {
        return createError({
          statusCode: 500,
          statusMessage: "API_KEY is not defined",
        });
      }
      const response = await $fetch(`${apiUrl}/competitions/${league}/matches`, { headers });
  
      return response;
    } catch (error: any) {
      return createError({
        statusCode: error.response?.status || 500,
        statusMessage: "Failed to football data",
      });
    }
  });
  