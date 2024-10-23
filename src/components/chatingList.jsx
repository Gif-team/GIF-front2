import React from "react";

// 선택된 챗팅 목록
export function ChatingSelected() {
  return (
    <div className="flex items-center p-[15px] bg-[#F0F0F0]">
      {/* svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 72 72"
        fill="none"
      >
        <g clipPath="url(#clip0_124_771)">
          <rect width="72" height="72" rx="36" fill="#CBCCCE" />
          <path
            d="M36.0605 45C43.9337 45 50.3105 38.6231 50.3105 30.75C50.3105 22.8769 43.9337 16.5 36.0605 16.5C28.1874 16.5 21.8105 22.8769 21.8105 30.75C21.8105 38.6231 28.1874 45 36.0605 45ZM36.0605 52.125C26.5487 52.125 7.56055 56.8987 7.56055 66.375V69.9375C7.56055 71.8969 9.16367 73.5 11.123 73.5H60.998C62.9574 73.5 64.5605 71.8969 64.5605 69.9375V66.375C64.5605 56.8987 45.5724 52.125 36.0605 52.125Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_124_771">
            <rect width="72" height="72" rx="36" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <section className="pl-[15px]">
        <h3 className="text-[16px] font-semibold">{/*이름추가*/}</h3>
        <h4 className="text-[14px] font-medium">{/*상태추가*/}</h4>
      </section>
    </div>
  );
}

// 선택안된 챗팅목록
export function ChatingUnselected() {
  return (
    <div className="flex items-center p-[15px]">
      {/* svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 72 72"
        fill="none"
      >
        <g clipPath="url(#clip0_124_771)">
          <rect width="72" height="72" rx="36" fill="#CBCCCE" />
          <path
            d="M36.0605 45C43.9337 45 50.3105 38.6231 50.3105 30.75C50.3105 22.8769 43.9337 16.5 36.0605 16.5C28.1874 16.5 21.8105 22.8769 21.8105 30.75C21.8105 38.6231 28.1874 45 36.0605 45ZM36.0605 52.125C26.5487 52.125 7.56055 56.8987 7.56055 66.375V69.9375C7.56055 71.8969 9.16367 73.5 11.123 73.5H60.998C62.9574 73.5 64.5605 71.8969 64.5605 69.9375V66.375C64.5605 56.8987 45.5724 52.125 36.0605 52.125Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_124_771">
            <rect width="72" height="72" rx="36" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <section className="pl-[15px]">
        <h3 className="text-[16px] font-semibold">{/*이름추가*/}</h3>
        <h4 className="text-[14px] font-medium">{/*상태 추가*/}</h4>
      </section>
    </div>
  );
}

// 상대의 챗팅
export function ChatingBlue() {
  return (
    <>
      <div className="flex items-center p-[15px]">
        {/* svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 72 72"
          fill="none"
        >
          <g clipPath="url(#clip0_124_771)">
            <rect width="72" height="72" rx="36" fill="#CBCCCE" />
            <path
              d="M36.0605 45C43.9337 45 50.3105 38.6231 50.3105 30.75C50.3105 22.8769 43.9337 16.5 36.0605 16.5C28.1874 16.5 21.8105 22.8769 21.8105 30.75C21.8105 38.6231 28.1874 45 36.0605 45ZM36.0605 52.125C26.5487 52.125 7.56055 56.8987 7.56055 66.375V69.9375C7.56055 71.8969 9.16367 73.5 11.123 73.5H60.998C62.9574 73.5 64.5605 71.8969 64.5605 69.9375V66.375C64.5605 56.8987 45.5724 52.125 36.0605 52.125Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_124_771">
              <rect width="72" height="72" rx="36" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <section
          className="ml-[15px] p-[10px] bg-[#7E8EF1] rounded-tr-[15px] rounded-b-[15px] 
          break-words
          max-w-[400px]
          font-medium
          text-[#FFFFFF]"
        >
          <p>{/*여기에 댓글 추가*/}</p>
        </section>
      </div>
    </>
  );
}

// 내 채팅
export function ChatingWhite() {
  return (
    <>
      <div className="flex flex-row-reverse items-center p-[15px]">
        {/* svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 72 72"
          fill="none"
        >
          <g clipPath="url(#clip0_124_771)">
            <rect width="72" height="72" rx="36" fill="#CBCCCE" />
            <path
              d="M36.0605 45C43.9337 45 50.3105 38.6231 50.3105 30.75C50.3105 22.8769 43.9337 16.5 36.0605 16.5C28.1874 16.5 21.8105 22.8769 21.8105 30.75C21.8105 38.6231 28.1874 45 36.0605 45ZM36.0605 52.125C26.5487 52.125 7.56055 56.8987 7.56055 66.375V69.9375C7.56055 71.8969 9.16367 73.5 11.123 73.5H60.998C62.9574 73.5 64.5605 71.8969 64.5605 69.9375V66.375C64.5605 56.8987 45.5724 52.125 36.0605 52.125Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_124_771">
              <rect width="72" height="72" rx="36" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <section
          className="mr-[15px] p-[10px] bg-[#EEEEEE] rounded-tl-[15px] rounded-b-[15px]
          break-words
          max-w-[400px]
          font-medium
          text-[#000000]"
        >
          <p>{/*여기에 댓글 추가*/}</p>
        </section>
      </div>
    </>
  );
}
