import axios from "axios";

export const BACKEND_ENDPOINT = "https://mock_AiService.com";

export const fetchMockData = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/api/visualData`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// assuming it will return a res.data array that will contain a json like we use  ;its a mock example ;
