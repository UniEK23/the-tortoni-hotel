import "./giltFrame.css";
 
// Wrap anything (usually an <img>) in a gilded picture frame.
//   <GiltFrame><img src={photo} alt="..." /></GiltFrame>
//   <GiltFrame variant="thin">...</GiltFrame>
function GiltFrame({ children, variant = "default", className = "" }) {
  return (
    <div className={`gilt gilt--${variant} ${className}`.trim()}>
      <div className="gilt__inner">{children}</div>
    </div>
  );
}
 
export default GiltFrame;