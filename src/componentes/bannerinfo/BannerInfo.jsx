import "./BannerInfo.css";

function BannerInfo({ texto }) {
  return (
    <div className="banner-info">
      <span className="banner-info__titulo">{texto}</span>
    </div>
  );
}

export default BannerInfo;
