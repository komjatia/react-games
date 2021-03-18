//Add base url
const baseAPI = "https://api.rawg.io/api/";

//Get current date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentYear = new Date().getUTCFullYear();
//Current Date
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Getting popular games
const popuralGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
//getting upcommigGames
const upcommingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
//getting newGames
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${baseAPI}${popuralGames}`;
export const upcommingGamesURL = () => `${baseAPI}${upcommingGames}`;
export const newGamesURL = () => `${baseAPI}${newGames}`;

//Game Details
export const GameDetailURL = (game_id) => `${baseAPI}games/${game_id}`;
export const GameScreenshotURL = (game_id) =>
  `${baseAPI}games/${game_id}/screenshots`;
