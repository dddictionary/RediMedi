import "./Header.css";
import { CiMedicalCross } from "react-icons/ci";

export default function Header() {
  return (
    <>
      <div className="heading">
        <h1 className="heading__header">
          Redi<CiMedicalCross className="heading__plus-icon" />Medi
        </h1>
      </div>
      <div className="subtitle">
        <small className="subtitle__text">
            Health alerts.
        </small>
      </div>
    </>
  );
}
