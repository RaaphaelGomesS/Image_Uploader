import "./card.css";
import InputImg from "../inputImg/InputImg";

export default function CardSend(props) {
  return (
    <div className="card">
      <h1>Upload your image</h1>
      <h4>File should be Jpeg, Png,...</h4>
      <form>
        <InputImg />
      </form>
      <p>Or</p>
      <button>Choose a file</button>
    </div>
  );
}
