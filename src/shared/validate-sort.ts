type SortOptions = {
  [key: string]: any;
};

export const validateSort = (sort: "asc" | "desc"): SortOptions => {
  const sortOptions: SortOptions = {
    asc: { precio: 1 },
    desc: { precio: -1 },
  };

  return sortOptions[sort];
};
