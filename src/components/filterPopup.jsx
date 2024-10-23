import React from "react";

export function FilterPopup() {
  return (
    <>
      <div className="fixed top-0 left-0 bg-[rgba(1,1,1,0.3)] w-full h-full">
        <div className="fixed top-[50%] left-[50%] bg-[#E9E9E9] min-w-[500px] w-[50%] h-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-3xl">
          <div className="flex p-10 w-full h-full flex-col ">
            <header className="flex text-[24px] justify-between">
              <h1>필터</h1>
              <svg
                className="cursor-pointer "
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M23.5425 23.5425L8.45758 8.45758"
                  stroke="#7E8EF1"
                  strokeLinecap="round"
                />
                <path
                  d="M23.5424 8.45758L8.45747 23.5425"
                  stroke="#7E8EF1"
                  strokeLinecap="round"
                />
              </svg>
            </header>
            <main className="flex text-center items-start mt-14">
              <ul className="flex-1 cursor-pointer">
                <li className="flex items-center">
                  <svg
                    className="flex-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.31 18.9001C19.75 18.2101 20 17.3801 20 16.5001C20 14.0001 18 12.0001 15.5 12.0001C13 12.0001 11 14.0001 11 16.5001C11 19.0001 13 21.0001 15.5 21.0001C16.37 21.0001 17.19 20.7501 17.88 20.3201L21 23.3901L22.39 22.0001L19.31 18.9001ZM15.5 19.0001C14.837 19.0001 14.2011 18.7367 13.7322 18.2679C13.2634 17.799 13 17.1632 13 16.5001C13 15.8371 13.2634 15.2012 13.7322 14.7324C14.2011 14.2635 14.837 14.0001 15.5 14.0001C16.163 14.0001 16.7989 14.2635 17.2678 14.7324C17.7366 15.2012 18 15.8371 18 16.5001C18 17.1632 17.7366 17.799 17.2678 18.2679C16.7989 18.7367 16.163 19.0001 15.5 19.0001ZM5 20.0001V12.0001H2L12 3.00012L22 12.0001H20.18C19 10.7701 17.34 10.0001 15.5 10.0001C11.92 10.0001 9 12.9201 9 16.5001C9 17.7901 9.38 19.0001 10.03 20.0001H5Z"
                      fill="black"
                    />
                  </svg>
                  <p className="flex-1">분실물</p>
                  <svg
                    className="flex-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.65752 7.07112L0.000514984 1.41412L1.41451 0.00012207L6.36452 4.95012L11.3145 0.00012207L12.7285 1.41412L7.07152 7.07112C6.88399 7.25859 6.62968 7.36391 6.36452 7.36391C6.09935 7.36391 5.84504 7.25859 5.65752 7.07112Z"
                      fill="black"
                    />
                  </svg>
                </li>
                <li className="bg-[#F0F0F0]">찾았습니다</li>
                <li className="bg-[#F0F0F0]">잃어버렸습니다</li>
              </ul>
              <ul className="flex-1 cursor-pointer">
                <li className="flex items-center">
                  <svg
                    className="flex-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_23_1462)">
                      <path
                        d="M12 0.799973L12.3584 0.0847732C12.2472 0.0290268 12.1244 0 12 0C11.8756 0 11.7528 0.0290268 11.6416 0.0847732L12 0.799973ZM7.2 13.6V12.8H6.4V13.6H7.2ZM13.6 13.6H14.4V12.8H13.6V13.6ZM0 24H24V22.4H0V24ZM11.6416 0.0847732L2.0416 4.88477L2.7584 6.31517L12.3584 1.51517L11.6416 0.0847732ZM0 9.59997H24V7.99997H0V9.59997ZM21.9584 4.88477L12.3584 0.0847732L11.6416 1.51517L21.2416 6.31517L21.9584 4.88477ZM1.6 8.79997V23.2H3.2V8.79997H1.6ZM20.8 8.79997V23.2H22.4V8.79997H20.8ZM8 23.2V13.6H6.4V23.2H8ZM7.2 14.4H13.6V12.8H7.2V14.4ZM12.8 13.6V23.2H14.4V13.6H12.8Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_23_1462">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-1">관</p>
                  <svg
                    className="flex-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.65752 7.07112L0.000514984 1.41412L1.41451 0.00012207L6.36452 4.95012L11.3145 0.00012207L12.7285 1.41412L7.07152 7.07112C6.88399 7.25859 6.62968 7.36391 6.36452 7.36391C6.09935 7.36391 5.84504 7.25859 5.65752 7.07112Z"
                      fill="black"
                    />
                  </svg>
                </li>
                <li className="bg-[#F0F0F0]">본관</li>
                <li className="bg-[#F0F0F0]">금봉관</li>
                <li className="bg-[#F0F0F0]">기숙사</li>
              </ul>
              <ul className="flex-1 cursor-pointer">
                <li className="flex items-center">
                  <svg
                    className="flex-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 22V20H6.5V15.5H11V11H15.5V6.5H20V3H22V8.5H17.5V13H13V17.5H8.5V22H3Z"
                      fill="black"
                    />
                  </svg>
                  <p className="flex-1">층</p>
                  <svg
                    className="flex-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.65752 7.07112L0.000514984 1.41412L1.41451 0.00012207L6.36452 4.95012L11.3145 0.00012207L12.7285 1.41412L7.07152 7.07112C6.88399 7.25859 6.62968 7.36391 6.36452 7.36391C6.09935 7.36391 5.84504 7.25859 5.65752 7.07112Z"
                      fill="black"
                    />
                  </svg>
                </li>
                <li className="bg-[#F0F0F0]">1층</li>
                <li className="bg-[#F0F0F0]">2층</li>
                <li className="bg-[#F0F0F0]">3층</li>
                <li className="bg-[#F0F0F0]">4층</li>
                <li className="bg-[#F0F0F0]">5층</li>
              </ul>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
