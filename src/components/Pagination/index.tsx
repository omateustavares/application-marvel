import { FC } from "react";
import { Footer } from "./styles";

type Props = {
  pages: number;
  setCurrentPage: (currentPage: number) => void;
  currentPage: number;
};

const Pagination: FC<Props> = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <Footer>
      <div>
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              style={
                index === currentPage
                  ? { backgroundColor: "#167ABC", color: "#ffff" }
                  : undefined
              }
              value={index}
              onClick={(e) => {
                const period = e.currentTarget.value;
                console.log(period);
                setCurrentPage(Number(period));
              }}
              type="button"
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </Footer>
  );
};

export default Pagination;
