"use client";

import { useState } from "react";

const useShowMore = <T>(items: T[], min = 4) => {
  const [limit, setLimit] = useState(min);

  const isMax = limit === items.length;

  return {
    items: items.slice(0, limit),
    isMax,
    toggleMore: () => setLimit(isMax ? min : items.length),
  };
};

export type UseShowMoreType = ReturnType<typeof useShowMore>;

export default useShowMore;
