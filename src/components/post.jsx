import React from "react";
import blueLogo from "../imgs/blueLogo.png";
export function Post() {
  return (
    <div className="w-[200px] m-5 h-[340px] rounded-[8px] border-gray-border border justify-between">
      <img className="w-full h-[200px]" src={blueLogo} alt="게시물 사진" />
      <div className="gap-3 flex flex-col justify-center m-[12px]">
        <h3 className="text-[21px] font-bold">교동이를 찾습니다</h3>
        <div className=" opacity-[0.5] text-[13px]">
          찾습니다 ∙ 1층 ∙ 본관 ∙ 2시간전
        </div>
        <span className="text-gray-fee">사례금 : 3,000원</span>
      </div>
    </div>
  );
}
