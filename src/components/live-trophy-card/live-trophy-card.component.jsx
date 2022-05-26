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
  winnerName,
  creatorEmail,
  creatorName,
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
          <i className={type === "live" ? "icon__feed" : "icon__trophy"} />
          <S.IconUnderline type={type} />
        </S.IconBadge>
      </S.CardHeader>
      <S.CardBody>
        <S.BodyTitle>
          {showDelete ? "Numele Castigatorului" : "Numele proprietarului"}
        </S.BodyTitle>
        <p>{showDelete ? winnerName : creatorName}</p>
        <S.BodyTitle>
          {showDelete
            ? "Adresa de email a castigatorului"
            : "Adresa de email a proprietarului"}
        </S.BodyTitle>
        <p>{showDelete ? winnerEmail : creatorEmail}</p>
        <S.BodyTitle>
          {type === "live" ? "Oferta curenta" : "Oferta castigatoare"}
        </S.BodyTitle>
        <p>{currentPrice}</p>
      </S.CardBody>
      <S.CardFooter>
        {type === "live" || (
          <S.MailButton
            href={`mailto:${showDelete ? winnerEmail : creatorEmail}`}
          >
            Trimite Mail
          </S.MailButton>
        )}
        {showDelete && (
          <S.DeleteButton onClick={handleDelete}>Sterge</S.DeleteButton>
        )}
      </S.CardFooter>
    </S.Card>
  );
};

export default LiveTrophyCard;
