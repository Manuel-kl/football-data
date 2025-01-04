import { defineStore } from "pinia";
import { useApiClient } from "../utils/api";
import { ref } from "vue";

export const useFootballStore = defineStore("football", () => {
  const standings = ref<any[]>([]);
  const fixtures = ref<any[]>([]);
  const results = ref<any[]>([]);
  const scorers = ref<any[]>([]);

  const { apiClient } = useApiClient();

  const getStandings = async () => {
    console.log("getStandings");
    try {
      const response = await apiClient.get("/competitions/PL/standings");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    standings,
    fixtures,
    results,
    scorers,
    getStandings,
  };
});
