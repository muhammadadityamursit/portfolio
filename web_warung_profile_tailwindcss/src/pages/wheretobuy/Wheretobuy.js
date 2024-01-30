import React from "react";

const Wheretobuy = () => {
  return (
    <div>
      <div className=" flex flex-wrap w-[50%] h-[50%] mx-auto mt-10 mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3492281238273!2d110.45053007410743!3d-6.968063868225659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f33689c20525%3A0xff1ce00338e53b43!2sBakso%20Sapi%20Setia%20Kawan!5e0!3m2!1sid!2sid!4v1705934906511!5m2!1sid!2sid"
          width="600"
          height="600"
          style={{ border: "" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Wheretobuy;
