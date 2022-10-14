export const GetAuctionTime = (dueDate) => {
  let now = new Date();
  let miliseconds = Number(dueDate) - now.getTime();

  if (miliseconds <= 0) return "expired";

  const minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
  const hours = Math.floor(miliseconds / (1000 * 60 * 60));
  const seconds = Math.floor((miliseconds % (1000 * 60)) / 1000);

  return {
    hours,
    minutes,
    seconds,
  };
};
