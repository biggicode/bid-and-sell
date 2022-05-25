import { useEffect, useState } from "react";
import { db, storage } from "../../config/firebase";
import * as S from "./sell.style";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
//TO DO: adauga iconita corecta la input file

const Sell = () => {
  //TO DO: Check if user is logged in
  const currentUser = useSelector(({ user }) => user.currentUser);
  const [state, setState] = useState(initialValues);
  const [imageUpload, setImageUpload] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      return navigate("/redirectioneaza");
    }
  }, [currentUser]);

  const {
    auctionTitle,
    description,
    startingPrice,
    auctionDuration,
    creatorName,
    phoneNumber,
  } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleFileChange = (e) => {
    setImageUpload(e.target.files[0]);
  };

  const resetForm = () => {
    setState(initialValues);
    setImageUpload(null);
  };

  const imgTypes = ["image/png", "image/jpeg", "image/jpg"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imgTypes.includes(imageUpload.type)) return;
    //TO DO : add custom errors with state
    let currentDate = new Date();
    let dueDate = currentDate.setHours(
      currentDate.getHours() + Number(auctionDuration)
    );

    const imagePath = `images/${imageUpload.name + v4()}`;
    const imageRef = ref(storage, imagePath);
    await uploadBytes(imageRef, imageUpload);

    const docRef = await addDoc(collection(db, "auctions"), {
      ...state,
      currentPrice: state.startingPrice,
      creatorId: currentUser.uid,
      creatorEmail: currentUser.email,
      dueDate,
      imagePath,
    });

    resetForm();
    navigate(`/auction/${docRef.id}`);
  };

  return (
    <>
      <S.Title>Sell an object</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.FormSection>
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
          <S.FileSection>
            <S.FileLabel htmlFor="file">
              <i className={imageUpload ? "icon__google" : "icon__facebook"} />
            </S.FileLabel>
            <S.InputFile
              type="file"
              id="file"
              onChange={handleFileChange}
              accept="image/*"
              required
            />
            <S.FileText>
              {imageUpload ? imageUpload.name : "Adauga o imagine"}
            </S.FileText>
          </S.FileSection>
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
          <S.Label htmlFor="auctionDuration">
            Auction duration in hours:
          </S.Label>
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
        </S.FormSection>
        <S.FormSection>
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
            value={currentUser?.email || "Introduce un email"}
            onChange={handleInputChange}
            readOnly
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
        </S.FormSection>
        <S.FormSection>
          <S.Button type="submit">Create auction!</S.Button>
        </S.FormSection>
      </S.Form>
    </>
  );
};

export default Sell;
