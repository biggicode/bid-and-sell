import { useState } from "react";
import { db, storage } from "../../config/firebase";
import * as S from "./sell.style";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const initialValues = {
  auctionTitle: "",
  description: "",
  startingPrice: 10,
  currentPrice: 10,
  auctionDuration: 1,
  creatorName: "",
  creatorEmail: "",
  phoneNumber: "",
};

//TO DO: go to read and write settings and allow only register users in firebase (if true)

const Sell = () => {
  const [state, setState] = useState(initialValues);
  const [imageUpload, setImageUpload] = useState(null);

  const {
    auctionTitle,
    description,
    startingPrice,
    auctionDuration,
    creatorName,
    creatorEmail,
    phoneNumber,
  } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleFileChange = (e) => {
    setImageUpload(e.target.files[0]);
  };

  const uploadImage = () => {};

  const resetForm = () => {
    setState(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageUpload == null) return;

    const imagePath = `images/${imageUpload.name + v4()}`;

    const imageRef = ref(storage, imagePath);
    await uploadBytes(imageRef, imageUpload);

    await addDoc(collection(db, "auctions"), {
      ...state,
      currentPrice: state.startingPrice,
      imagePath,
    });

    resetForm();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Title>Sell an object</S.Title>
      <S.SemiTitle>Object details</S.SemiTitle>
      <S.Label htmlFor="auctionTitle">Auction Title</S.Label>
      <S.Input
        type="text"
        placeholder="Ex.: A big white bicycle with 2 rims"
        name="auctionTitle"
        id="auctionTitle"
        value={auctionTitle}
        onChange={handleInputChange}
        required
      />
      <S.Label>Image</S.Label>
      <S.Input type="file" onChange={handleFileChange} required />
      <S.Label htmlFor="description">Description</S.Label>
      <S.TextArea
        placeholder="Try to write something that you wish you will find if you read this"
        name="description"
        id="description"
        value={description}
        onChange={handleInputChange}
        required
      ></S.TextArea>
      <S.Label htmlFor="startingPrice">Starting Price</S.Label>
      <S.Input
        type="number"
        name="startingPrice"
        id="startingPrice"
        value={startingPrice}
        onChange={handleInputChange}
        required
      />
      <S.Label htmlFor="auctionDuration">Auction duration in hours:</S.Label>
      <S.Input
        type="number"
        name="auctionDuration"
        id="auctionDuration"
        step="1"
        max="24"
        min="1"
        value={auctionDuration}
        onChange={handleInputChange}
        required
      />
      <S.Separator />
      <S.SemiTitle>Contact info</S.SemiTitle>
      <S.Label htmlFor="creatorName">Your name</S.Label>
      <S.Input
        type="text"
        name="creatorName"
        id="creatorName"
        value={creatorName}
        onChange={handleInputChange}
        required
      />
      <S.Label htmlFor="creatorEmail">E-mail address</S.Label>
      <S.Input
        type="mail"
        name="creatorEmail"
        id="creatorEmail"
        value={creatorEmail}
        onChange={handleInputChange}
        required
      />
      <S.Label htmlFor="phoneNumber">Phone number</S.Label>
      <S.Input
        type="tell"
        name="phoneNumber"
        id="phoneNumber"
        value={phoneNumber}
        onChange={handleInputChange}
        required
      />
      <S.Separator />
      <S.Button type="submit">Create auction!</S.Button>
    </S.Form>
  );
};

export default Sell;
