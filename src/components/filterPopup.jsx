import closeImg from '../imgs/close.png';
import React from 'react';

export function FilterPopup() {
  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full h-full bg-black bg-opacity-30" />
      <div className=" fixed left-0 h-[50%] transform w-1/3 bg-[#E9E9E9] p-5 z-20 rounded-3xl">
        <div className="flex flex-col w-[100%] h-[100%]">
          <header className="flex mt-[25px] w=[100%] justify-center">
            <h5 className="text-lg font-semibold">필터</h5>
            <img src={closeImg} alt="x" className="cursor-pointer" />
          </header>
          <div className="flex flex-row w-[100%] mt-[25px] justify-center text-center bg-[#F0F0F0]">
            <div className="flex-1">
              <div className="bg-[#E9E9E9]">분실물</div>
              <div className="cursor-pointer">찾았습니다</div>
              <div className="cursor-pointer">잃어버렸습니다</div>
            </div>
            <div className="flex-1">
              <div className="bg-[#E9E9E9]">관</div>
              <div className="cursor-pointer">본관</div>
              <div className="cursor-pointer">금봉관</div>
              <div className="cursor-pointer">기숙사</div>
            </div>
            <div className="flex-1">
              <div className="bg-[#E9E9E9]">층</div>
              <div className="cursor-pointer">1층</div>
              <div className="cursor-pointer">2층</div>
              <div className="cursor-pointer">3층</div>
              <div className="cursor-pointer">4층</div>
              <div className="cursor-pointer">5층</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
