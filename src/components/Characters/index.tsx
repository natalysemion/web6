import Card from "../Card";
import "./styles.css";
import { ResultsEntity } from "../../types/characters";
import useCharacters from "../../hooks/useCharacters";
import Pagination from "../../helpers/Pagination";
import Search from "../Search";

const Characters = () => {
  const { characters, page, pageSize, totalCount, handlePageChange } =
    useCharacters();

  return (
    <div>
      <Search />
      <div className="charactersWrapper">
        {characters?.map((character: ResultsEntity) => (
          <Card key={character.id} ResultsEntity={character} />
        ))}
      </div>
      <Pagination
        onPageChange={handlePageChange}
        totalCount={totalCount}
        siblingCount={1}
        currentPage={page}
        pageSize={pageSize}
        className="my-pagination"
      />
    </div>
  );
};

export default Characters;
