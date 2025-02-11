import { Import } from "lucide-react";
import olpheian from "../assets/img/olpheian.webp";
import footerbg from "../assets/img/footer/footerbg.webp";
import FooterGallery from "./footer/FooterGallery";
import FooterBrand from "./footer/FooterBrand";
import FooterBadges from "./footer/FooterBadges";
import FooterLinks from "./footer/FooterLinks";

const Footer = () => {
  return (
    <div className="min-h-screen m-20">
      <div className="flex items-center space-x-4 z-30 bg-transparent mb-20">
        <div className="flex-1">
          <img
            src={footerbg}
            alt="Description of the image"
            className="w-[85%] rounded-lg"
          />
        </div>

        <div className="flex-1 text-lg text-black">
          <h2 className="font-semibold mb-4 text-[20px]">
            THE OPPENHEIM GROUP LOS ANGELES
          </h2>
          <a href="#" className="mb-4 text-base tracking-widest">
            office@ogroup.com
            <br />
            +1 323.910.1675
            <br />
            CA Broker Lic. # 01983697
          </a>
          <p className="text-sm">8604 Sunset Blvd. West Hollywood, CA 90069</p>
          <p className="text-xs">
            Luxury Real Estate, Homes, Estates, Properties in the Hollywood
            Hills, Sunset Strip, Bird Streets, West Hollywood, Beverly Hills,
            Bel Air, Brentwood, Encino, Laurel Canyon, Fryman Estates, Holmby
            HIlls, Little Holmby, Los Angeles, Downtown, Malibu, Miracle Mile,
            Pacific Palisades, Santa Monica, Venice, Sherman Oaks, Studio City,
            Westwood, Hollywood, Silver Lake, Los Feliz, Manhattan Beach, Palos
            Verdes.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 mb-4">
        <FooterGallery />
        <FooterGallery />
        <FooterGallery />
        <FooterGallery />
      </div>
      <br />
      <FooterBrand />
      <hr className="border-t-2 border-blue-500 my-6" />

      <FooterBadges />
      <FooterLinks />
    </div>
  );
};

export default Footer;
