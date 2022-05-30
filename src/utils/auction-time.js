export const GetAuctionTime = (dueDate) => {
  let now = new Date();
  let miliseconds = Number(dueDate) - now.getTime();

  const hours = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
  const seconds = Math.floor(miliseconds / 1000) % 60;

  return {
    hours,
    minutes,
    seconds,
  };
};
