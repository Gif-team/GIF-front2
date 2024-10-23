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
    <div className="flex flex-col items-center w-full ">
      <Header />
      <div className="w-[56%] flex">
        <h1 className="text-2xl font-bold">최신 게시물</h1>
        {open ? (
          <>
            <div className="fixed top-0 left-0 z-10 w-full h-full bg-black bg-opacity-30" />
            <div className=" fixed right-0 h-[100%] transform w-1/3 bg-white p-5 z-20">
              <div className="flex items-start justify-between">
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
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
