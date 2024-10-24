import React, { useState } from "react";
import ExamImg from "../imgs/Rectangle 27.png";

export function Detail() {
  // 불리언
  const [likeBool, setLikeBool] = useState(true);

  // 하트 색깔
  const [likeColor, setLikeColor] = useState("#E9E9E9");

  // 좋아요 숫자
  const [likeCount, setCount] = useState(0);

  const ToggleLike = () => {
    setLikeBool(!likeBool);
    //console.log(likeBool);

    if (likeBool === true) {
      setCount(likeCount + 1);
      setLikeColor("#d35858");
    } else {
      setCount(likeCount - 1);
      setLikeColor("#E9E9E9");
    }
  };

  return (
    <div className="flex mt-[60px] items-center justify-center flex-col p-[25px]">
      <div className="flex items-center">
        {/* 왼쪽 화살표 */}
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12.7273 3.68676C12.8176 3.59129 12.8881 3.47898 12.9349 3.35626C12.9817 3.23353 13.0039 3.10278 13.0002 2.97148C12.9965 2.84017 12.9669 2.71089 12.9133 2.591C12.8596 2.47112 12.7828 2.36298 12.6873 2.27276C12.5919 2.18254 12.4796 2.11201 12.3568 2.0652C12.2341 2.01838 12.1034 1.9962 11.9721 1.99991C11.8408 2.00363 11.7115 2.03317 11.5916 2.08684C11.4717 2.14052 11.3636 2.21729 11.2733 2.31276L2.77334 11.3128C2.59781 11.4984 2.5 11.7442 2.5 11.9998C2.5 12.2553 2.59781 12.5011 2.77334 12.6868L11.2733 21.6878C11.363 21.7853 11.4711 21.8641 11.5914 21.9195C11.7117 21.975 11.8419 22.0059 11.9743 22.0106C12.1067 22.0153 12.2387 21.9937 12.3626 21.9469C12.4866 21.9002 12.6 21.8293 12.6963 21.7383C12.7927 21.6474 12.8699 21.5382 12.9237 21.4171C12.9775 21.296 13.0067 21.1655 13.0095 21.033C13.0124 20.9006 12.989 20.7689 12.9405 20.6456C12.8921 20.5223 12.8196 20.4098 12.7273 20.3148L4.87534 11.9998L12.7273 3.68676Z"
            fill="black"
          />
        </svg>
        {/* 이미지 추가 (필수) */}
        <img src={ExamImg} alt="img" className="w-[550px] h-[550px]" />
        {/* 오른쪽 화살표 */}
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.2727 20.3132C11.1824 20.4087 11.1119 20.521 11.0651 20.6437C11.0183 20.7665 10.9961 20.8972 10.9998 21.0285C11.0035 21.1598 11.0331 21.2891 11.0867 21.409C11.1404 21.5289 11.2172 21.637 11.3127 21.7272C11.4081 21.8175 11.5204 21.888 11.6432 21.9348C11.7659 21.9816 11.8966 22.0038 12.0279 22.0001C12.1592 21.9964 12.2885 21.9668 12.4084 21.9132C12.5283 21.8595 12.6364 21.7827 12.7267 21.6872L21.2267 12.6872C21.4022 12.5016 21.5 12.2558 21.5 12.0002C21.5 11.7447 21.4022 11.4989 21.2267 11.3132L12.7267 2.31224C12.637 2.21468 12.5289 2.13589 12.4086 2.08047C12.2883 2.02505 12.1581 1.99408 12.0257 1.98938C11.8933 1.98468 11.7613 2.00633 11.6374 2.05307C11.5134 2.09982 11.4 2.17073 11.3037 2.26168C11.2073 2.35263 11.1301 2.46182 11.0763 2.5829C11.0225 2.70398 10.9933 2.83453 10.9905 2.96698C10.9876 3.09942 11.011 3.23112 11.0595 3.35443C11.1079 3.47773 11.1804 3.59018 11.2727 3.68524L19.1247 12.0002L11.2727 20.3132Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="w-full">
        <header className="flex justify-start items-center w-full border-b-2 border-primary-primary px-[15px] pt-[30px] pb-[20px]">
          {/* 프로필 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
          >
            <g clipPath="url(#clip0_1_1393)">
              <rect y="0.5" width="36" height="36" rx="18" fill="#CBCCCE" />
              <path
                d="M18.0293 23C21.9659 23 25.1543 19.8116 25.1543 15.875C25.1543 11.9384 21.9659 8.75 18.0293 8.75C14.0927 8.75 10.9043 11.9384 10.9043 15.875C10.9043 19.8116 14.0927 23 18.0293 23ZM18.0293 26.5625C13.2734 26.5625 3.7793 28.9494 3.7793 33.6875V35.4688C3.7793 36.4484 4.58086 37.25 5.56055 37.25H30.498C31.4777 37.25 32.2793 36.4484 32.2793 35.4688V33.6875C32.2793 28.9494 22.7852 26.5625 18.0293 26.5625Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1393">
                <rect y="0.5" width="36" height="36" rx="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {/* 이름 */}
          <h2 className="pl-[10px] font-bold text-[20px]">{/*이름추가*/}</h2>
          {/* 채팅버튼 */}
          <button className="ml-auto bg-primary-primary rounded-2xl px-[10px] py-[5px] text-white">
            채팅하기
          </button>
        </header>
        <main className="p-[15px]">
          <section className="flex items-center">
            {/* 제목 */}
            <h1 className="font-bold text-[24px]">{/*제목추가*/}</h1>
            {/* 좋아요 버튼 */}
            <div className="flex ml-auto items-center cursor-pointer">
              <svg
                onClick={ToggleLike}
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
              >
                <path
                  d="M23.2265 3.76815C22.6645 3.20759 21.9972 2.76292 21.2628 2.45954C20.5284 2.15615 19.7412 2 18.9463 2C18.1513 2 17.3641 2.15615 16.6297 2.45954C15.8953 2.76292 15.228 3.20759 14.666 3.76815L13.4997 4.93095L12.3334 3.76815C11.1982 2.6364 9.65854 2.00059 8.05315 2.00059C6.44775 2.00059 4.90811 2.6364 3.77293 3.76815C2.63774 4.89989 2 6.43487 2 8.03541C2 9.63594 2.63774 11.1709 3.77293 12.3027L4.93926 13.4655L13.4997 22L22.0602 13.4655L23.2265 12.3027C23.7887 11.7424 24.2348 11.0771 24.5391 10.3449C24.8434 9.61276 25 8.82796 25 8.03541C25 7.24285 24.8434 6.45806 24.5391 5.72587C24.2348 4.99368 23.7887 4.32844 23.2265 3.76815Z"
                  stroke={likeColor}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* 좋아요 카운트 */}
              <p className="font-extrabold text-[26px] w-[30px] select-none">
                {likeCount}
              </p>
            </div>
          </section>
          <section>
            {/* 필터 */}
            <h3 className="font-light text-[12px] mb-[10px]">{/*필터*/}</h3>
            {/* 사례금 */}
            <h2 className="font-bold text-[16px]">{/*사례금추가*/}</h2>
            {/* 설명 */}
            <p className="font-medium text-[14px]">{/*설명추가*/}</p>
          </section>
        </main>
      </div>
    </div>
  );
}
