export const formatTime = (timeInMillis) => {
  const seconds = Math.floor((timeInMillis % 60000) / 1000);
  const milliseconds = (timeInMillis % 1000)
    .toString()
    .padStart(3, "0")
    .slice(0, 2);

  const formattedTime = `${seconds < 10 ? "0" : ""}${seconds}:${milliseconds}`;
  return formattedTime;
};
