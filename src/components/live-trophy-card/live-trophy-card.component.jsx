import * as S from "./live-trophy-card.style";

const LiveTrophyCard = ({ type, title, winnerEmail, currentPrice }) => {
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
          <S.MailButton href={`mailto:${winnerEmail}`}>Send Mail</S.MailButton>
        )}
        <S.DeleteButton>Delete</S.DeleteButton>
      </S.CardFooter>
    </S.Card>
  );
};

export default LiveTrophyCard;
