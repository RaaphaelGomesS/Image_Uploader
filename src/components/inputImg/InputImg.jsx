import "./inputImg.css";

export default function InputImg(props) {

  return (
    <div className="imgInput">
      <input className="input" type="file" accept="image/png,jpeg" />
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/ios-glyphs/100/BDBDBD/full-image.png"
        alt="Imagem de paisagem"
      />
      <span>Drag & Drop your image here</span>
    </div>
  );
}
