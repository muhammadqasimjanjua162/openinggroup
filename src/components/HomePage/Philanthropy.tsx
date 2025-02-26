import React from "react";
import bg from "../../assets/img/HomePage/Media/philanthrapy-bg.webp";
import PhilanthropySlider from "./PhilanthropySlider";

const Philanthropy = () => {
  return (
    <div
      className="z-10 border-amber-200 h-[300px] flex w-full absolute"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="w-1/2">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus, impedit! Accusamus esse beatae tempora veniam odio
          nemo ducimus vel dicta, aut facere eum nulla ipsa similique assumenda
          amet neque praesentium, earum fuga. Vero veritatis cupiditate dolores
          inventore similique quas, nam nemo, quisquam temporibus illo iste
          minima blanditiis. Ut aliquam modi deserunt doloremque eius quia
          voluptas nihil voluptatum in. Quae temporibus, suscipit ut est et
          nobis impedit quos excepturi minus. Praesentium ipsum, minus quod
          debitis voluptatum atque, aut accusamus, sequi similique soluta magni
          ratione iusto obcaecati aperiam. Laborum inventore laudantium rem!
          Quas cum consectetur voluptate ipsa temporibus pariatur placeat,
          tempora suscipit.
        </p>
      </div>
      <div className="w-1/2">
        <PhilanthropySlider />
      </div>
    </div>
  );
};

export default Philanthropy;
