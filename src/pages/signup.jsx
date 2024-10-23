import React, { useState } from "react";
import blueLogo from "../imgs/blueLogo.png";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-between gap-8 p-4 border rounded-md border-gray-login">
        <img src={blueLogo} className="w-[90px]" alt="로고" />
        <div className="flex flex-col justify-between gap-3">
          <div className="flex flex-col">
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[360px] h-[40px] border border-gray-login rounded-lg"
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[360px] h-[40px] border border-gray-login rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <input
              id="passwordCheck"
              type="password"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
              className="w-[360px] h-[40px] border border-gray-login rounded-lg"
            />
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
