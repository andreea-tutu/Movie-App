import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

function RemoveFavourites() {
  return (
    <>
      <span className="mr-2">Remove from favourites</span>
      <FontAwesomeIcon
        className="broken-heart-icon"
        icon={faHeartBroken}
        pull="right"
        bounce
      />
    </>
  );
}

export default RemoveFavourites;
