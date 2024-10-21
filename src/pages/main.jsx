import { useContext, useEffect } from "react";
import { AlertContext } from "../context/alertContext";
import { useState } from "react";
import { Header } from "../components/header";

export function Main() {
  const { alertPopUp, setAlertPopUp } = useContext(AlertContext);
  const [open, setOpen] = useState(alertPopUp);

  useEffect(() => {
    setOpen(alertPopUp);
  }, [alertPopUp]);

  return (
    <div>
      <Header />
      {open ? (
        <>
          <div className="fixed top-0 left-0 z-10 w-full h-full bg-black bg-opacity-30" />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] bg-white p-5 z-20">
            <h5 className="text-lg font-semibold">알람</h5>
            <svg
              onClick={() => setAlertPopUp(!alertPopUp)}
              className="cursor-pointer"
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
                  strokeLinecap="round"
                />
                <path
                  id="Path 2_2"
                  d="M23.5424 8.45746L8.45747 23.5424"
                  stroke="#7E8EF1"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
        </>
      ) : null}
    </div>
  );
}
