import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const MyAuctions = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);

  return <div>my auctions</div>;
};

export default MyAuctions;
