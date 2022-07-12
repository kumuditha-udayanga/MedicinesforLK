import { Link } from "react-router-dom";
import "./styles.css";

export function InfoBox({
  iconUrl,
  link,
  heading,
  text,
  buttonText,
}: {
  iconUrl: string;
  link: string;
  heading: string;
  text: string;
  buttonText?: string;
}) {
  return (
    <div className={`info-box`}>
      <img src={iconUrl} alt="" />
      <h2>{heading}</h2>
      <p>{text}</p>
      {link != "#" && (
        <Link to={link}>
          <button>{buttonText}</button>
        </Link>
      )}
    </div>
  );
}