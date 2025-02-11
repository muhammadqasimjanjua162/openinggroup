import netflix from "../../assets/img/footer/netflix.webp";
import hollywood from "../../assets/img/footer/hollywood.webp";
import lifestyle from "../../assets/img/footer/lifestyle.webp";
import realdeal from "../../assets/img/footer/real deal.webp";
import variety from "../../assets/img/footer/variety.webp";
import footer1 from "../../assets/img/footer/footer-logos-a-16.webp";
import footer2 from "../../assets/img/footer/footer-logos-a-12.webp";
import footer3 from "../../assets/img/footer/footer-logos-a-13.webp";
import footer4 from "../../assets/img/footer/footer-logos-a-15.webp";
import footer5 from "../../assets/img/footer/footer-logos-a-17.webp";
const FooterBrand = () => {
  return (
    <div className="flex flex-wrap justify-center gap-x-4">
      {[
        netflix,
        hollywood,
        lifestyle,
        realdeal,
        footer1,
        footer2,
        footer3,
        footer4,
        footer5,
        footer2,
        footer3,
        footer4,
        footer5,
      ].map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className="w-[100px] h-auto object-contain p-1 mb-4"
        />
      ))}
    </div>
  );
};

export default FooterBrand;
