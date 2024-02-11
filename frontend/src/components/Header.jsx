import "./Header.css";
import RediMediLogo from "./RediMediLogo";

export default function Header() {
  return (
    <>
    <RediMediLogo />
      <div className="subtitle">
        <small className="subtitle__text">
          Improving your health, one reminder at a time.
        </small>
      </div>
    </>
  );
}
