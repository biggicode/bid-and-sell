import { ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from "firebase/firestore";

import * as S from "./live-trophy-card.style";
import { storage, db } from "../../config/firebase";

const LiveTrophyCard = ({
  id,
  imagePath,
  type,
  showDelete,
  title,
  winnerEmail,
  creatorEmail,
  currentPrice,
}) => {
  const handleDelete = async () => {
    const imageRef = ref(storage, imagePath);

    deleteObject(imageRef)
      .then(() => {})
      .catch((error) => {
        console.log("Imaginea nu a fost stearsa din storage", error);
      });

    await deleteDoc(doc(db, type === "live" ? "auctions" : "finished", id));
  };

  return (
    <S.Card>
      <S.CardHeader>
        <p>{title}</p>
        <S.IconBadge type={type}>
          <i className="icon__facebook" />
          <S.IconUnderline type={type} />
        </S.IconBadge>
      </S.CardHeader>
      <S.CardBody>
        <S.BodyTitle>Winner Name</S.BodyTitle>
        <p>-</p>
        <S.BodyTitle>Winner Email</S.BodyTitle>
        <p>{winnerEmail}</p>
        <S.BodyTitle>Winner Phone</S.BodyTitle>
        <p>-</p>
        <S.BodyTitle>Current Price</S.BodyTitle>
        <p>{currentPrice}</p>
      </S.CardBody>
      <S.CardFooter>
        {type === "live" || (
          <S.MailButton
            href={`mailto:${showDelete ? winnerEmail : creatorEmail}`}
          >
            Send Mail
          </S.MailButton>
        )}
        {showDelete && (
          <S.DeleteButton onClick={handleDelete}>Delete</S.DeleteButton>
        )}
      </S.CardFooter>
    </S.Card>
  );
};

export default LiveTrophyCard;
