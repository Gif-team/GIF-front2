import React from "react";
import { Header } from "../components/header";
import { AlertContext } from "../context/alertContext";
import { useContext } from "react";
export function Badge() {
  const { alertPopUp, setAlertPopUp } = useContext(AlertContext);
  return (
    <div className="flex justify-center">
      <Header />
      {alertPopUp ? (
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
      <div className="flex justify-center flex-col w-[40%] m-20">
        <h1 className="text-[36px] font-semibold">뱃지</h1>
        <div className="flex gap-20">
          <div className="flex flex-col items-center">
            <svg
              width="150"
              height="150"
              viewBox="0 0 150 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="150" height="150" rx="40" fill="#D9D9D9" />
            </svg>
            <span>탐색왕</span>
          </div>
          <div className="flex flex-col items-center">
            <svg
              width="150"
              height="150"
              viewBox="0 0 150 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="150" height="150" rx="40" fill="#D9D9D9" />
            </svg>
            <span>깜빡이</span>
          </div>
          <div className="flex flex-col items-center">
            <svg
              width="150"
              height="150"
              viewBox="0 0 150 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="150" height="150" rx="40" fill="#D9D9D9" />
            </svg>
            <span>인기왕</span>
          </div>
        </div>
      </div>
    </div>
  );
}
