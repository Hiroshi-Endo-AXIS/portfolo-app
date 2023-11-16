// DeveloperButton.tsx

import React from "react";

const ButtonSiteMap: React.FC = () => {
  // developer部の環境変数を取得する
  const developerURL =
    "http://localhost:3000/rez-weather";

  return (
    <div className="w-screen h-screen bg-slate-900">
      <a
        href={developerURL}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2
          className={`mb-3 text-2xl font-semibold`}
        >
          MinimalWeather{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </a>
    </div>
  );
};

export default ButtonSiteMap;
