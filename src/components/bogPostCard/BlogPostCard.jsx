import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/MyContext";

function BlogPostCard() {
  const { mode } = useContext(myContext);

  const cardBg = mode === "dark" ? "rgb(30, 41, 59)" : "white";
  const borderColor =
    mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)";
  const textColor = mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)";
  const shadowClass = mode === "dark" ? "shadow-gray-700" : "shadow-xl";

  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      author: "Sarah Johnson",
      date: "12 Oct 2023",
      summary:
        "Learn how React Hooks simplify state management and lifecycle methods in functional components.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "A Guide to JavaScript ES6 Features",
      author: "Mark Thompson",
      date: "5 Sep 2023",
      summary:
        "Explore the new and powerful features introduced in ES6 to write cleaner and more efficient JavaScript.",
      image:
        "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use Which",
      author: "Emily Davis",
      date: "22 Aug 2023",
      summary:
        "A detailed comparison between CSS Grid and Flexbox layouts to help you choose the right tool for your designs.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <section className="body-font text-gray-600">
      <div className="container px-5 py-10 mx-auto max-w-7xl">
        {/* Cards container */}
        <div className="flex flex-wrap justify-center -m-4 mb-5">
          {blogPosts.map(({ id, title, author, date, summary, image }) => (
            <div key={id} className="p-4 md:w-1/3">
              <div
                style={{
                  background: cardBg,
                  borderBottom: `4px solid ${borderColor}`,
                }}
                className={`h-full shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400 ${shadowClass} rounded-xl overflow-hidden transition-transform duration-300`}
              >
                <img
                  className="w-full object-cover h-48"
                  src={image}
                  alt={title}
                />

                <div className="p-6">
                  <h2
                    className="tracking-widest text-xs title-font font-medium mb-1"
                    style={{ color: textColor }}
                  >
                    {date} — by {author}
                  </h2>

                  <h1
                    className="title-font text-lg font-bold mb-3"
                    style={{ color: textColor }}
                  >
                    {title}
                  </h1>

                  <p className="leading-relaxed" style={{ color: textColor }}>
                    {summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center my-5">
          <Button
            style={{
              background:
                mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
              color: mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
            }}
          >
            See More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BlogPostCard;
