import { Post } from "../components/post";

export function Profile() {
  return (
    <main className="mt-[60px] w-[674px]">
      <div className="flex items-center pt-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
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
        <h1 className="ml-6 font-bold text-[24px]">김지훈</h1>
        <ul className="flex flex-col items-center justify-center  bg-[#EFF0F2] ml-auto rounded-xl p-[24px] text-center">
          <li className="font-bold">프로필</li>
          <div className="bg-[#4f5665] w-full h-[1px] my-3"></div>
          <div className="flex flex-col itms-center gap-4 w-full">
            <li>회원탈퇴</li>
            <li>로그아웃</li>
            <li>뱃지 보기</li>
            <li>비밀번호 변경</li>
          </div>
        </ul>
      </div>
      <div>
        <h3 className=" text-[24px] font-medium">내가 작성한 글</h3>
        <div className="border-x border-t flex flex-wrap">
          {/* map 사용 예정 */}
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </main>
  );
}
