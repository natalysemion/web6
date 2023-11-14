import { useEffect, useState } from "react";
import { getCharacters } from "../api/api";
import { ResultsEntity } from "../types/characters";
import { useSearchParams } from "react-router-dom";

const useCharacters = () => {
  const [characters, setCharacters] = useState<ResultsEntity[] | null>(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searchParams] = useSearchParams();
  const [name, setName] = useState<string>(searchParams.get("name") || "");

  const pageSize = 20;

  const handlePageChange = (page: number) => {
    if (page < 1) page = 1;
    if (page > Math.ceil(totalCount / pageSize))
      page = Math.ceil(totalCount / pageSize);
    setPage(page);
  };

  useEffect(() => {
    setName(searchParams.get("name") || "");
  }, [searchParams]);

  useEffect(() => {
    getCharacters(page, name).then((data) => {
      setCharacters(data.results);
      setTotalCount(data.info.count);
    });
  }, [page, name]);

  return {
    characters,
    page,
    totalCount,
    pageSize,
    handlePageChange,
  };
};

export default useCharacters;
