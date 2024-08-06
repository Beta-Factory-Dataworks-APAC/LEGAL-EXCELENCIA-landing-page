import { teamMembers } from "@/constants";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div id="team" className="flex flex-col mx-auto px-auto mt-10">
      <div className="flex flex-col justify-center items-center mt-16 gap-8">
        <h1 className="text-6xl">Meet our team</h1>
        <p className="text-slate-500 text-2xl">
          we are a group of dedicated professionals and a close-knit team.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 mt-6 justify-center items-center p-6 border-2 rounded-xl"
          >
            <Image
              src={member.image}
              alt={member.name}
              className="w-full mx-auto md:h-96 h-60 rounded-xl"
            />
            <h2 className="text-2xl text-blue-900">{member.name}</h2>
            <p className="text-slate-500">{member.role}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-400">
              <a href={`${member.linkedin_id}`} target="_blank">
                {member.linkedin}
              </a>
              <a href={`${member.mail_id}`} target="_blank">
                {member.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
