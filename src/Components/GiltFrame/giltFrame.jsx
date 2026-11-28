import "./giltFrame.css";
 
// Wrap every image in a gilded picture frame.
//   <GiltFrame variant="thin">...</GiltFrame>
function GiltFrame({ children, variant = "default", className = "" }) {
  return (
    <div className={`gilt gilt--${variant} ${className}`.trim()}>
      <div className="gilt__inner">{children}</div>
    </div>
  );
}
 
export default GiltFrame;