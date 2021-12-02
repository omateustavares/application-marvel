import { useCallback } from "react";
import { useModal } from "../../hooks/Modal";

type Props = {
  src: string;
  title: string;
  description: string;
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
  comics: {
    items: {
      name: string;
    }[];
  };
  urls: {
    type: string;
    url: string;
  }[];
};

export const CharacterDetails = ({
  src,
  title,
  description,
  series,
  comics,
  events,
  urls,
}: Props) => {
  const { close } = useModal();
  const handleDismiss = useCallback(() => {
    document.body.classList.remove("is-hidden");
    close();
  }, [close]);

  return (
    <div className="modal-container">
      <div className="header-modal">
        <button onClick={handleDismiss}>
          <svg viewBox="0 0 24 24">
            <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
          </svg>
        </button>
      </div>
      <div className="content-modal">
        <div className="content-modal__info">
          <picture>
            <img src={src} alt={title} loading="lazy" />
          </picture>
          <div className="bio">
            <div className="bio__inner">
              <h1>{title}</h1>
              {description && <p>{description}</p>}
            </div>
            <div className="bio__inner">
              {series.items.length > 0 && (
                <div className="bio__inner__media">
                  <h2>Séries</h2>
                  <ul>
                    {series.items.map((item) => (
                      <li key={item.name}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              )}
              {comics.items.length > 0 && (
                <div className="bio__inner__media">
                  <h2>Comics</h2>
                  <ul>
                    {comics.items.map((item) => (
                      <li key={item.name}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              )}
              {events.items.length > 0 && (
                <div className="bio__inner__media">
                  <h2>Eventos</h2>
                  <ul>
                    {events.items.map((item) => (
                      <li key={item.name}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              )}
              {urls.length > 0 && (
                <div className="bio__inner__media">
                  <h2>Url's</h2>
                  <ul>
                    {urls.map((item) => (
                      <li key={item.type}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.type}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
