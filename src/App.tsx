/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import api from "./services/api";
import logo from "./img/logo.svg";
import { Header, Main } from "./styles/app";
import Pagination from "./components/Pagination";
import { useModal } from "./hooks/Modal";
import { CharacterDetails } from "./components/Modal/CharacterDetails";

type TypeList = {
  name: string;
  id: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    items: {
      name: string;
    }[];
  };
  events: {
    items: {
      name: string;
    }[];
  };
}[];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState<TypeList>([]);

  const [itensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = list.slice(startIndex, endIndex);

  const pages = Math.ceil(list.length / itensPerPage);

  const { open, close } = useModal();

  const getData = async () => {
    try {
      const data = await api
        .get("")
        .then((response) => response.data.data.results);

      console.log("data", data);
      setList(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();

    const closeModal = (e) => {
      if (e.keyCode === 27) {
        document.body.classList.remove("is-hidden");
        close();
      }
    };
    window.addEventListener("keydown", closeModal);
    return () => window.removeEventListener("keydown", closeModal);
  }, []);

  const handleInfo = (item) => {
    document.body.classList.add("is-hidden");
    open({
      content: (
        <CharacterDetails
          src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          title={item.name}
          description={item.description}
          series={item.series}
          comics={item.comics}
          events={item.events}
          urls={item.urls}
        />
      ),
    });
  };

  return (
    <>
      <Header>
        <div className="header-logo">
          <img src={logo} alt="Objective logo" />
        </div>
        <div className="header-text">
          <div className="header-text__name">
            <h2>Mateus Tavares</h2>
            <strong>Teste de Front-end</strong>
          </div>
          <div className="header-text__logo">CB</div>
        </div>
      </Header>
      <Main>
        <div className="container">
          <div className="container-searchBar">
            <h1>Busca de personagens</h1>
            <label htmlFor="search">
              <span>Nome do personagem</span>
              <input
                type="search"
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
                spellCheck="false"
              />
            </label>
          </div>

          <div className="container-charactersList">
            <ul className="container-characters__list">
              {list.length === 0 ? (
                <p>Carregando...</p>
              ) : (
                currentItens
                  .filter((value) => {
                    if (
                      value.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return value;
                    }
                    return null;
                  })
                  .map((item) => {
                    return (
                      <li key={item.id}>
                        <button type="button" onClick={() => handleInfo(item)}>
                          <div className="character">
                            <img
                              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                              alt={item.name}
                              loading="lazy"
                            />
                            <h3>{item.name}</h3>
                          </div>
                          <div className="series">
                            <ul>
                              {item.series.items.slice(0, 3).map((item) => {
                                return <li key={item.name}>{item.name}</li>;
                              })}
                            </ul>
                          </div>
                          <div className="events">
                            <ul>
                              {item.events.items.slice(0, 3).map((item) => {
                                return <li key={item.name}>{item.name}</li>;
                              })}
                            </ul>
                          </div>
                        </button>
                      </li>
                    );
                  })
              )}
            </ul>
          </div>
        </div>
      </Main>
      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default App;
