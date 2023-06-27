import "./inputImg.css";

export default function InputImg(props) {
  return (
    <div className="imgInput">
      <input className="input" type="file" accept="image/png,jpeg" />
      <span>Drag & Drop your image here</span>
    </div>
  );
}
