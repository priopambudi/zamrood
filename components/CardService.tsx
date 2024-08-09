import React from "react";

interface CardServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CardService = ({ title, description, icon }: CardServiceProps) => {
  return (
    <div
      id="card-service"
      className="flex flex-col items-center justify-center px-6"
    >
      <div className="md:mb-6">{icon}</div>
      <h3 className="text-tertiary-text text-base md:text-2xl font-bold uppercase text-center">
        {title}
      </h3>
      <p className="text-center mt-2 text-sm md:text-base">{description}</p>
    </div>
  );
};

export default CardService;
