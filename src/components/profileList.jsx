import React from "react";

export function ProfileList() {
  return (
    <div className="flex border-b p-6">
      <img src="" alt="" className="w-36 h-36" />
      <div className="flex flex-col justify-center items-start ml-5">
        <h1>교동이를 찾습니다.</h1>
        <h2>사례금 2000원</h2>
        <h4>찾습니다 ` 본관`1층`2시간전</h4>
      </div>
      <div className="flex ml-auto items-end justify-center">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M24.5244 3.86201C23.9379 3.18934 23.2417 2.65574 22.4753 2.29168C21.709 1.92762 20.8876 1.74023 20.0581 1.74023C19.2285 1.74023 18.4071 1.92762 17.6408 2.29168C16.8744 2.65574 16.1782 3.18934 15.5917 3.86201L14.3747 5.25737L13.1576 3.86201C11.9731 2.50391 10.3665 1.74094 8.69133 1.74094C7.01614 1.74094 5.40955 2.50391 4.22501 3.86201C3.04047 5.22011 2.375 7.06208 2.375 8.98272C2.375 10.9034 3.04047 12.7453 4.22501 14.1034L5.44205 15.4988L14.3747 25.7402L23.3073 15.4988L24.5244 14.1034C25.1111 13.4311 25.5765 12.6328 25.894 11.7542C26.2116 10.8755 26.375 9.93379 26.375 8.98272C26.375 8.03166 26.2116 7.08991 25.894 6.21128C25.5765 5.33265 25.1111 4.53436 24.5244 3.86201Z"
              stroke="#9F9F9F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-bold text-[24px]">4</p>
        </div>
      </div>
    </div>
  );
}
