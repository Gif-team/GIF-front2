export function Chating() {
  return (
    <div className="flex justify-center">
      {/* 전체채팅 */}
      <div className="border border-[#C4C4C4] w-[600px]">
        <header>
          <h1 className="text-[24px] font-semibold p-[25px]">전체 채팅</h1>
        </header>
        <main>
          {/* MAP함수 사용예정 */}
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
              <h3 className="text-[16px] font-semibold">김지훈</h3>
              <h4 className="text-[14px] font-medium">교동이를 찾습니다.</h4>
            </section>
          </div>
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
              <h3 className="text-[16px] font-semibold">김지훈</h3>
              <h4 className="text-[14px] font-medium">교동이를 찾습니다.</h4>
            </section>
          </div>
        </main>
      </div>

      {/* 채팅창 */}
      <div className="border border-[#C4C4C4] w-[600px] h-[100%]">
        <header className="p-[10px] border-b-[1px]">
          <h2 className="font-bold text-[20px]">김지훈</h2>
          <h4 className="font-medium text-[14px]">교동이를 찾습니다.</h4>
        </header>
        <main>
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
              교동이를 찾고있습니다...
            </section>
          </div>
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
              교동이 저희 반에서 보관중입니다.
            </section>
          </div>
        </main>
        <footer className="flex justify-center items-center border-t border-[#C4C4C4] p-[20px]">
          <div
            className="flex justify-around items-center bg-[#F0F0F0]  
            p-[10px] flex-grow rounded-3xl"
          >
            <textarea
              className="flex-grow bg-transparent 
              border-none outline-none resize-none no-scrollbar"
              rows="1"
              placeholder="메세지를 보내보세요!"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="25"
              viewBox="0 0 27 25"
              fill="none"
            >
              <path
                d="M23.6093 3.16667H19.4514L17.0512 0.5H9.18139L6.78112 3.16667H2.62326C1.92753 3.16667 1.26029 3.44762 0.768334 3.94772C0.276378 4.44781 0 5.12609 0 5.83333V21.8333C0 22.5406 0.276378 23.2189 0.768334 23.719C1.26029 24.219 1.92753 24.5 2.62326 24.5H23.6093C24.305 24.5 24.9723 24.219 25.4642 23.719C25.9562 23.2189 26.2326 22.5406 26.2326 21.8333V5.83333C26.2326 5.12609 25.9562 4.44781 25.4642 3.94772C24.9723 3.44762 24.305 3.16667 23.6093 3.16667ZM23.6093 21.8333H2.62326V5.83333H7.93535L10.3356 3.16667H15.8969L18.2972 5.83333H23.6093V21.8333ZM13.1163 7.16667C11.377 7.16667 9.70886 7.86905 8.47897 9.11929C7.24908 10.3695 6.55814 12.0652 6.55814 13.8333C6.55814 15.6014 7.24908 17.2971 8.47897 18.5474C9.70886 19.7976 11.377 20.5 13.1163 20.5C14.8556 20.5 16.5237 19.7976 17.7536 18.5474C18.9835 17.2971 19.6744 15.6014 19.6744 13.8333C19.6744 12.0652 18.9835 10.3695 17.7536 9.11929C16.5237 7.86905 14.8556 7.16667 13.1163 7.16667ZM13.1163 17.8333C12.0727 17.8333 11.0718 17.4119 10.3339 16.6618C9.59596 15.9116 9.18139 14.8942 9.18139 13.8333C9.18139 12.7725 9.59596 11.7551 10.3339 11.0049C11.0718 10.2548 12.0727 9.83333 13.1163 9.83333C14.1599 9.83333 15.1607 10.2548 15.8987 11.0049C16.6366 11.7551 17.0512 12.7725 17.0512 13.8333C17.0512 14.8942 16.6366 15.9116 15.8987 16.6618C15.1607 17.4119 14.1599 17.8333 13.1163 17.8333Z"
                fill="#B5B5B5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M2.89909 24.5C2.16575 24.5 1.5382 24.2391 1.01642 23.7173C0.494644 23.1956 0.233311 22.5676 0.232422 21.8333V3.16667C0.232422 2.43333 0.493755 1.80578 1.01642 1.284C1.53909 0.762222 2.16664 0.500889 2.89909 0.5H21.5658C22.2991 0.5 22.9271 0.761333 23.4498 1.284C23.9724 1.80667 24.2333 2.43422 24.2324 3.16667V21.8333C24.2324 22.5667 23.9715 23.1947 23.4498 23.7173C22.928 24.24 22.3 24.5009 21.5658 24.5H2.89909ZM2.89909 21.8333H21.5658V3.16667H2.89909V21.8333ZM4.23242 19.1667H20.2324L15.2324 12.5L11.2324 17.8333L8.23242 13.8333L4.23242 19.1667Z"
                fill="#B5B5B5"
              />
            </svg>
          </div>
          <button
            className="flex justify-center items-center 
            bg-[#5956E8] rounded-[50%] 
            w-[34px] h-[34px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="24"
              viewBox="0 0 17 28"
              fill="none"
            >
              <path
                d="M1.66602 27L14.666 14L1.66602 0.999999"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </footer>
      </div>
    </div>
  );
}
