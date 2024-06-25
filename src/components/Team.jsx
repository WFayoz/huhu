import React from "react";

const Team = () => {
  const Team =
    "https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg";
  return (
    <div className="bg-blue-100 mt-16 ">
      <div className="max-w-[1280px] w-full mx-auto px-5">
        <h1 className="text-7xl text-blue-700 font-medium py-10">Team</h1>
        <div className="flex justify-between items-center">
          <div className="max-w-[47%]">
            <p className="text-2xl  ">
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            <p className=" text-9xl my-4 font-bold text-blue-700">100+</p>
            <p className="text-4xl font-medium mt-7">Dedicated team</p>
          </div>
          <div className="max-w-[47%] ">
            <img src={Team} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
