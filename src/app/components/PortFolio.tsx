import React from "react";

function PortFolio() {
  return (
    <>
      <div className=" flex h-auto mt-9 text-center justify-center items-center   w-full ">
        <div className="flex justify-center  gap-7 flex-wrap h-[200px] ">
          <img
            className="mt-3 p-3  w-[250px] h-[200px]"
            src="/Pic-for-website/p1.png"
            alt="not-found"
          />
          <img
            className="mt-3 p-3 w-[250px] h-[200px] "
            src="/Pic-for-website/p2.png"
            alt="not-found"
          />
          <img
            className="mt-3 p-3 w-[250px] h-[200px] "
            src="/Pic-for-website/p3.png"
            alt="not-found"
          />
          <img
            className="mt-3 p-3 w-[250px] h-[200px] "
            src="/Pic-for-website/p4.png"
            alt="not-found"
          />
          <img
            className=" mt-3 p-3w-[250px] h-[200px] "
            src="/Pic-for-website/p5.png"
            alt="not-found"
          />
          <img
            className=" mt-9 p-3 w-[250px] h-[200px]"
            src="/Pic-for-website/p6.png"
            alt="not-found"
          />
          <img
            className="mt-9 p-3  w-[250px] h-[200px]"
            src="/Pic-for-website/p7.png"
            alt="not-found"
          />
          <img
            className=" mt-9 p-3 w-[250px] h-[200px]"
            src="/Pic-for-website/p8.png"
            alt="not-found"
          />
          <img
            className="mt-9 p-3 w-[250px] h-[200px] "
            src="/Pic-for-website/p9.png"
            alt="not-found"
          />
          <img
            className=" mt-9 p-3 w-[250px] h-[250px]"
            src="/Pic-for-website/p10.png"
            alt="not-found"
          />
        </div>
      </div>

      {/* our process section */}

      <div className=" flex flex-col text-center  mt-80   justify-center">
        <h1 className=" font-serif text-black text-3xl font-extrabold ">
          {" "}
          Our Process
        </h1>
        <img
          className=" m-9 p-3 overflow-hidden bg-cover object-cover mt-4 "
          src="/Pic-for-website/animation .png"
          alt="not-found"
        />
      </div>
      {/* ======================= */}
      <div className=" ">
  <div className=" flex justify-evenly   ">
    <div className="flex flex-col items-center mx-4">
      <h1 className=" font-extrabold text-2xl  w-36 h-12">Brainstorm</h1>
      <p className="w-36 h-20">Our team will dive deep into your business, researching your industry, target market, and competitors to generate exciting design ideas.</p>
    </div>
    <div className="flex flex-col items-center mx-4">
      <h1 className="  font-extrabold text-2xl  w-36 h-12">Sketch</h1>
      <p className="w-36 h-20">The team will then draft sketches of the best ideas from the brainstorming session to expand and develop design concepts.</p>
    </div>
    <div className="flex flex-col items-center mx-4">
      <h1 className="  font-extrabold text-2xl w-36 h-12">Create</h1>
      <p className="w-36 h-20">Only after our designers are satisfied with the sketches do we move them to the digital realm. It’s here that your new logo really comes to life.</p>
    </div>
    <div className="flex flex-col items-center mx-4">
      <h1 className="  font-extrabold text-2xl w-36 h-12">Refine</h1>
      <p className="w-36 h-20">Once the designs have been refined to perfection, you’ll have the opportunity to see the fruits of this detail-oriented process.</p>
    </div>
  </div>
</div>

    </>
  );
}

export default PortFolio;
