import React, { useState } from "react";
import blueLogo from "../imgs/blueLogo.png";

const emailregex = /^[a-zA-Z0-9._%+-]+@gsm\.hs\.kr$/i;
const passwordregex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;

export function SignUp() {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center mt-[120px] justify-between gap-8 p-8 border rounded-lg border-gray-login">
        <img src={blueLogo} className="w-[90px]" alt="로고" />
        <div className="flex flex-col justify-between gap-3">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[14px] font-medium">
              이메일
            </label>
            <input
              id="email"
              placeholder="학교 이메일을 입력해주세요..."
              type="text"
              onChange={(e) =>
                e.target.value.match(emailregex)
                  ? setEmail(false)
                  : setEmail(true)
              }
              className="text-[14px] focus:border-primary-primary p-3 w-[360px] h-[40px] border border-gray-login rounded-lg"
            />
            {email ? <div>올바른 이메일 주소를 입력하세요</div> : null}
          </div>

          <div className="flex flex-col ">
            <label className="text-[14px] font-medium" htmlFor="password">
              비밀번호
            </label>
            <input
              id="password"
              placeholder="영문, 숫자, 특수문자 포함 8글자 이상"
              type="password"
              onChange={(e) =>
                e.target.value.match(passwordregex)
                  ? (setPassword(false), setPasswordValue(e.target.value))
                  : setPassword(true)
              }
              className="text-[14px] p-3 w-[360px] focus:border-primary-primary h-[40px] border border-gray-login rounded-lg"
            />
            {password ? (
              <div>
                영문, 숫자, 특수문자를 포함하여 8글자 이상으로 적어주세요
              </div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label className="text-[14px] font-medium" htmlFor="passwordCheck">
              비밀번호 확인
            </label>
            <input
              id="passwordCheck"
              type="password"
              placeholder="비밀번호를 재입력해주세요..."
              onChange={(e) =>
                e.target.value === passwordValue
                  ? setPasswordCheck(false)
                  : setPasswordCheck(true)
              }
              className=" text-[14px] p-3 w-[360px] h-[40px] border border-gray-login rounded-lg"
            />
            {passwordCheck ? <div>비밀번호가 일치하지 않아요</div> : null}
          </div>
        </div>
        <button
          className={`text-white mt-4 px-36 py-2 rounded-lg font-semibold ${
            password && email && passwordCheck
              ? "bg-primary-primary"
              : "bg-primary-second"
          }`}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}
