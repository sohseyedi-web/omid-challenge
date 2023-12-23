import React from "react";
import { useGetEvents } from "../../hooks/useGetEvents";
import Events from "./Events";

const HeaderLayout = () => {
  const { data } = useGetEvents();

  return (
    <header className="w-full flex items-center justify-end  my-3 container mx-auto gap-x-4">
      <span className="cursor-pointer">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_223_225"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="21"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0.000499725H19.2849V20.7215H0V0.000499725Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_223_225)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.2022 15.4405C5.4312 15.4405 5.6602 15.4695 5.8842 15.5295C6.5602 15.7115 7.1472 16.1635 7.4952 16.7705C7.7212 17.1515 7.8462 17.5965 7.8502 18.0505C7.8502 18.7005 8.3722 19.2215 9.0142 19.2215H10.2672C10.9062 19.2215 11.4282 18.7035 11.4312 18.0645C11.4272 17.3585 11.7032 16.6875 12.2082 16.1825C12.7062 15.6845 13.4022 15.3855 14.0982 15.4055C14.5542 15.4165 14.9932 15.5395 15.3802 15.7595C15.9372 16.0785 16.6482 15.8885 16.9702 15.3385L17.6342 14.2315C17.7822 13.9765 17.8252 13.6565 17.7462 13.3615C17.6682 13.0665 17.4722 12.8105 17.2082 12.6595C16.5902 12.3035 16.1492 11.7295 15.9662 11.0415C15.7852 10.3665 15.8842 9.6295 16.2372 9.0225C16.4672 8.6225 16.8042 8.2855 17.2082 8.0535C17.7502 7.7365 17.9402 7.0275 17.6252 6.4755C17.6122 6.4535 17.6002 6.4305 17.5902 6.4065L17.0042 5.3905C16.6852 4.8355 15.9752 4.6445 15.4182 4.9615C14.8162 5.3175 14.1002 5.4195 13.4122 5.2385C12.7252 5.0605 12.1492 4.6255 11.7902 4.0115C11.5602 3.6275 11.4352 3.1805 11.4312 2.7255C11.4402 2.3835 11.3202 2.0765 11.1022 1.8515C10.8852 1.6275 10.5802 1.5005 10.2672 1.5005H9.0142C8.7042 1.5005 8.4142 1.6215 8.1952 1.8395C7.9772 2.0585 7.8582 2.3495 7.8602 2.6595C7.8392 4.1215 6.6442 5.2985 5.1972 5.2985C4.7332 5.2935 4.2862 5.1685 3.8982 4.9365C3.3532 4.6265 2.6412 4.8175 2.3222 5.3725L1.6452 6.4855C1.3352 7.0235 1.5252 7.7345 2.0772 8.0555C2.8962 8.5295 3.4072 9.4135 3.4072 10.3615C3.4072 11.3095 2.8962 12.1925 2.0752 12.6675C1.5262 12.9855 1.3362 13.6925 1.6542 14.2425L2.2852 15.3305C2.4412 15.6115 2.6962 15.8145 2.9912 15.8975C3.2852 15.9795 3.6092 15.9445 3.8792 15.7945C4.2762 15.5615 4.7382 15.4405 5.2022 15.4405ZM10.2672 20.7215H9.0142C7.5452 20.7215 6.3502 19.5275 6.3502 18.0585C6.3482 17.8775 6.2962 17.6895 6.1992 17.5265C6.0422 17.2525 5.7882 17.0565 5.4952 16.9785C5.2042 16.9005 4.8852 16.9435 4.6232 17.0955C3.9952 17.4455 3.2562 17.5305 2.5802 17.3405C1.9052 17.1495 1.3222 16.6855 0.980198 16.0705L0.355198 14.9935C-0.375802 13.7255 0.0591976 12.1005 1.3252 11.3685C1.6842 11.1615 1.9072 10.7755 1.9072 10.3615C1.9072 9.9475 1.6842 9.5605 1.3252 9.3535C0.0581977 8.6175 -0.375802 6.9885 0.354198 5.7205L1.0322 4.6075C1.7532 3.3535 3.3832 2.9115 4.6542 3.6415C4.8272 3.7445 5.0152 3.7965 5.2062 3.7985C5.8292 3.7985 6.3502 3.2845 6.3602 2.6525C6.3562 1.9555 6.6312 1.2865 7.1322 0.7815C7.6352 0.2775 8.3032 0.000499725 9.0142 0.000499725H10.2672C10.9832 0.000499725 11.6792 0.2945 12.1782 0.8055C12.6762 1.3195 12.9512 2.0245 12.9302 2.7395C12.9322 2.9005 12.9852 3.0865 13.0812 3.2495C13.2402 3.5195 13.4912 3.7095 13.7892 3.7875C14.0872 3.8615 14.3992 3.8215 14.6642 3.6645C15.9442 2.9335 17.5732 3.3715 18.3042 4.6415L18.9272 5.7205C18.9432 5.7495 18.9572 5.7775 18.9692 5.8065C19.6312 7.0575 19.1892 8.6325 17.9592 9.3515C17.7802 9.4545 17.6352 9.5985 17.5352 9.7725C17.3802 10.0415 17.3372 10.3615 17.4152 10.6555C17.4952 10.9555 17.6862 11.2045 17.9552 11.3585C18.5622 11.7075 19.0152 12.2955 19.1962 12.9745C19.3772 13.6525 19.2782 14.3885 18.9252 14.9955L18.2612 16.1015C17.5302 17.3575 15.9012 17.7925 14.6342 17.0605C14.4652 16.9635 14.2702 16.9105 14.0762 16.9055H14.0702C13.7812 16.9055 13.4842 17.0285 13.2682 17.2435C13.0492 17.4625 12.9292 17.7545 12.9312 18.0645C12.9242 19.5335 11.7292 20.7215 10.2672 20.7215Z"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.64509 8.4746C8.60509 8.4746 7.75909 9.3216 7.75909 10.3616C7.75909 11.4016 8.60509 12.2466 9.64509 12.2466C10.6851 12.2466 11.5311 11.4016 11.5311 10.3616C11.5311 9.3216 10.6851 8.4746 9.64509 8.4746ZM9.64509 13.7466C7.77809 13.7466 6.25909 12.2286 6.25909 10.3616C6.25909 8.4946 7.77809 6.9746 9.64509 6.9746C11.5121 6.9746 13.0311 8.4946 13.0311 10.3616C13.0311 12.2286 11.5121 13.7466 9.64509 13.7466Z"
          />
        </svg>
      </span>
      <span className="cursor-pointer">
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.6665 8.9043H0.842529C0.428529 8.9043 0.0925293 8.5683 0.0925293 8.1543C0.0925293 7.7403 0.428529 7.4043 0.842529 7.4043H18.6665C19.0805 7.4043 19.4165 7.7403 19.4165 8.1543C19.4165 8.5683 19.0805 8.9043 18.6665 8.9043Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.2012 12.8096C13.7872 12.8096 13.4472 12.4736 13.4472 12.0596C13.4472 11.6456 13.7782 11.3096 14.1922 11.3096H14.2012C14.6152 11.3096 14.9512 11.6456 14.9512 12.0596C14.9512 12.4736 14.6152 12.8096 14.2012 12.8096Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.7637 12.8096C9.3497 12.8096 9.0097 12.4736 9.0097 12.0596C9.0097 11.6456 9.3407 11.3096 9.7547 11.3096H9.7637C10.1777 11.3096 10.5137 11.6456 10.5137 12.0596C10.5137 12.4736 10.1777 12.8096 9.7637 12.8096Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.31689 12.8096C4.90289 12.8096 4.56189 12.4736 4.56189 12.0596C4.56189 11.6456 4.89389 11.3096 5.30789 11.3096H5.31689C5.73089 11.3096 6.06689 11.6456 6.06689 12.0596C6.06689 12.4736 5.73089 12.8096 5.31689 12.8096Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.2012 16.6963C13.7872 16.6963 13.4472 16.3603 13.4472 15.9463C13.4472 15.5323 13.7782 15.1963 14.1922 15.1963H14.2012C14.6152 15.1963 14.9512 15.5323 14.9512 15.9463C14.9512 16.3603 14.6152 16.6963 14.2012 16.6963Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.7637 16.6963C9.3497 16.6963 9.0097 16.3603 9.0097 15.9463C9.0097 15.5323 9.3407 15.1963 9.7547 15.1963H9.7637C10.1777 15.1963 10.5137 15.5323 10.5137 15.9463C10.5137 16.3603 10.1777 16.6963 9.7637 16.6963Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.31689 16.6963C4.90289 16.6963 4.56189 16.3603 4.56189 15.9463C4.56189 15.5323 4.89389 15.1963 5.30789 15.1963H5.31689C5.73089 15.1963 6.06689 15.5323 6.06689 15.9463C6.06689 16.3603 5.73089 16.6963 5.31689 16.6963Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.7935 4.791C13.3795 4.791 13.0435 4.455 13.0435 4.041V0.75C13.0435 0.336 13.3795 0 13.7935 0C14.2075 0 14.5435 0.336 14.5435 0.75V4.041C14.5435 4.455 14.2075 4.791 13.7935 4.791Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.71527 4.791C5.30127 4.791 4.96527 4.455 4.96527 4.041V0.75C4.96527 0.336 5.30127 0 5.71527 0C6.12927 0 6.46527 0.336 6.46527 0.75V4.041C6.46527 4.455 6.12927 4.791 5.71527 4.791Z"
          />
          <mask
            id="mask0_223_154"
            maskUnits="userSpaceOnUse"
            x="0"
            y="1"
            width="20"
            height="21"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1.5791H19.5V21.5H0V1.5791Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_223_154)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.521 3.0791C2.928 3.0791 1.5 4.4621 1.5 6.9731V16.0221C1.5 18.5881 2.928 20.0001 5.521 20.0001H13.979C16.572 20.0001 18 18.6141 18 16.0981V6.9731C18.004 5.7381 17.672 4.7781 17.013 4.1181C16.335 3.4381 15.29 3.0791 13.988 3.0791H5.521ZM13.979 21.5001H5.521C2.116 21.5001 0 19.4011 0 16.0221V6.9731C0 3.6451 2.116 1.5791 5.521 1.5791H13.988C15.697 1.5791 17.11 2.0911 18.075 3.0581C19.012 3.9991 19.505 5.3521 19.5 6.9751V16.0981C19.5 19.4301 17.384 21.5001 13.979 21.5001Z"
            />
          </g>
        </svg>
      </span>
      <form action="" className="">
        <select className=" bg-[#F0F0F0] px-2 text-center h-[30px]  rounded-lg">
          {data?.map((item) => (
            <option value={item.event_date} key={item.id}>
              <Events item={item} type={"options"} />
            </option>
          ))}
        </select>
      </form>
    </header>
  );
};

export default HeaderLayout;