"use client";
import React, { useEffect, useState } from "react";

import { articlesData } from "@/interfaces/GeneralTypes";
import CardArticle from "./molecules/CardArticle";

const Articles = () => {
  const [articles, setArticles] = useState<articlesData[] | []>([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("/api/zamrood/article")
        .then((res) => res.json())
        .then((data) => {
          setArticles(data.data);
        });
    };

    fetchData();
  }, []);

  return (
    <section
      id="articles"
      className="container px-4 sm:px-6 mx-auto pt-8 md:pt-14 pb-custom mb-14"
    >
      <h2 className="text-xl md:text-4xl font-bold text-tertiary-text font-unbounded">
        Articles
      </h2>
      <p className="text-tertiary-text text-base md:text-2xl font-normal mb-6">
        Our currated writings, offering something for every reader.
      </p>
      <div className="article-list grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 lg:gap-6">
        {articles.map((art: articlesData, indx: number) => (
          <CardArticle key={art.id} article={art} indx={indx} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
