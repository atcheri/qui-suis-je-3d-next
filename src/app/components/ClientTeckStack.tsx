"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import TeckStack with no SSR to prevent 3D model loading during build
const TeckStack = dynamic(() => import("../sections/TeckStack"), {
  ssr: false,
  loading: () => <TeckStackLoader />
});

const TeckStackLoader = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="h-full w-full px-5 md:px-10">
        <div className="flex flex-col items-center">
          <div className="w-80 h-10 bg-gray-200 animate-pulse rounded-md mb-2"></div>
          <div className="w-60 h-6 bg-gray-100 animate-pulse rounded-md"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="card-border group overflow-hidden rounded-lg">
              <div className="w-full h-40 bg-gray-100 animate-pulse rounded-md"></div>
              <div className="p-4">
                <div className="w-full h-6 bg-gray-200 animate-pulse rounded-md"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ClientTeckStack() {
  return (
    <Suspense fallback={<TeckStackLoader />}>
      <TeckStack />
    </Suspense>
  );
}

