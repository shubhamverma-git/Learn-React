import React from "react";

function Card({ country, position, name, btnText = "Click Me" }) {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:rou rounded-full mx-auto"
          src="/https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-white">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{name}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {position}, {country}
            </div>
            <button className="text-white bg-zinc-700 p-4 rounded-xl mt-4">
              {btnText}
            </button>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
