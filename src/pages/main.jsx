import { Header } from "../components/header";
import { PopUp } from "../components/popUp";

export function Main({ alertPopUp }) {
  return (
    <div>
      <Header />
      {alertPopUp ? (
        <div>
          <h5>알람</h5>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="close">
              <path
                id="Path 2"
                d="M23.5425 23.5424L8.45758 8.45746"
                stroke="#7E8EF1"
                stroke-linecap="round"
              />
              <path
                id="Path 2_2"
                d="M23.5424 8.45746L8.45747 23.5424"
                stroke="#7E8EF1"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </div>
      ) : null}
    </div>
  );
}
