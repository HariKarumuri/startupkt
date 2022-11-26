import React, { useEffect, useState } from "react";
import { client } from "./../../lib/client";
import BlogCard from "./blogCard";
import "./Blog.css"

const Blog = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author -> name,
      } | order(publishedAt desc)`
      )
      .then((data) => {
        setStories(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
    <div className="container text-center mt-2">
      <h1 className="Heading">Recent posts form our Blog</h1>
      
        {stories[0] && (
          <div className="row">
            {stories.map((story) => (
              <BlogCard
                key={story.slug.current}
                title={story.title}
                img={story.mainImage.asset.url}
                goTo={story.slug.current}
                author={story.name}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
