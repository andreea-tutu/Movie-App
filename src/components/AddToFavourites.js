import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function AddFavourite() {
  return (
    <>
      <span className="mr-2">Add to Favourites</span>
      <FontAwesomeIcon className="heart-icon" icon={faHeart} pull="right" bounce/>
    </>
  );
}

export default AddFavourite;
