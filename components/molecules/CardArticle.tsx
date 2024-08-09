import Image from "next/image";
import React from "react";
import Link from "next/link";

import { articlesData } from "@/interfaces/GeneralTypes";
import { cn } from "@/lib/utils";

interface CardArticleProps {
  article: articlesData;
  indx: number;
}

const CardArticle = ({ article, indx }: CardArticleProps) => {
  return (
    <Link
      href={article.slug}
      target="_blank"
      className={cn(
        "card-article h-full w-full flex flex-col",
        indx === 0 && "md:col-span-2 md:row-span-2 h-full"
      )}
    >
      <div className="img-wrap relative w-full h-full md:aspect-video lg:aspect-square overflow-hidden">
        <Image
          src={article.featured_image}
          alt={article.title}
          width={500}
          height={300}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-full p-4 md:p-2 lg:p-4 bg-tertiary-text">
        <h2 className="text-primary-text text-base md:text-sm lg:text-base font-bold line-clamp-2">
          {article.title}
        </h2>
      </div>
    </Link>
  );
};

export default CardArticle;
