import Logo from "../assets/logo.png";
import Back from "./common/Back";
import CustomNavlink from "./common/CustomNavlink";

const Sidebar = ({ active, setActive }) => {

  
  

  return (
    <>
      <Back active={active} setActive={setActive} />
      <aside
        className={`${
          active ? "w-[240px] right-0 top-0" : "-right-28 w-0 top-0"
        } fixed z-50 lg:relative h-screen bg-white text-[#053B50] rounded-l-3xl shadow-lg py-10 px-3 rounded space-y-3 transition-all duration-300`}
      >
        <div className="flex items-center justify-center">
          <img src={Logo} className="w-[50px] h-[32px]" alt="" />
        </div>
        <div className="my-3">
          <ul className="flex flex-col gap-y-1">
            <CustomNavlink to={"/"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" />
              </svg>
              <h6>خانه</h6>
            </CustomNavlink>
            <CustomNavlink to={"/calendar"}>
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

              <h6>تقویم</h6>
            </CustomNavlink>
            <CustomNavlink to={"/analyse"}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.12109 16.5625C5.70709 16.5625 5.37109 16.2265 5.37109 15.8125V8.95251C5.37109 8.53851 5.70709 8.20251 6.12109 8.20251C6.53509 8.20251 6.87109 8.53851 6.87109 8.95251V15.8125C6.87109 16.2265 6.53509 16.5625 6.12109 16.5625Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7881 16.5615C10.3741 16.5615 10.0381 16.2255 10.0381 15.8115V5.66849C10.0381 5.25449 10.3741 4.91849 10.7881 4.91849C11.2021 4.91849 11.5381 5.25449 11.5381 5.66849V15.8115C11.5381 16.2255 11.2021 16.5615 10.7881 16.5615Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.3784 16.5615C14.9644 16.5615 14.6284 16.2255 14.6284 15.8115V12.5775C14.6284 12.1635 14.9644 11.8275 15.3784 11.8275C15.7924 11.8275 16.1284 12.1635 16.1284 12.5775V15.8115C16.1284 16.2255 15.7924 16.5615 15.3784 16.5615Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.064 1.5C3.292 1.5 1.5 3.397 1.5 6.335V15.165C1.5 18.103 3.292 20 6.064 20H15.436C18.209 20 20 18.103 20 15.165V6.335C20 3.397 18.209 1.5 15.436 1.5H6.064ZM15.436 21.5H6.064C2.437 21.5 0 18.954 0 15.165V6.335C0 2.546 2.437 0 6.064 0H15.436C19.063 0 21.5 2.546 21.5 6.335V15.165C21.5 18.954 19.063 21.5 15.436 21.5Z"
                />
              </svg>

              <h6>آنالیز</h6>
            </CustomNavlink>
            <CustomNavlink to={"/atp"}>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.08011 13.5928H0.779114C0.365114 13.5928 0.0291138 13.2568 0.0291138 12.8428C0.0291138 12.4288 0.365114 12.0928 0.779114 12.0928H7.08011C7.49411 12.0928 7.83011 12.4288 7.83011 12.8428C7.83011 13.2568 7.49411 13.5928 7.08011 13.5928Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.1909 3.90039H9.89087C9.47687 3.90039 9.14087 3.56439 9.14087 3.15039C9.14087 2.73639 9.47687 2.40039 9.89087 2.40039H16.1909C16.6049 2.40039 16.9409 2.73639 16.9409 3.15039C16.9409 3.56439 16.6049 3.90039 16.1909 3.90039Z"
                />
                <mask
                  id="mask0_223_182"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="7"
                  height="7"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0.000396729H6.2258V6.192H0V0.000396729Z"
                  />
                </mask>
                <g mask="url(#mask0_223_182)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.11282 1.5C2.22382 1.5 1.49982 2.216 1.49982 3.097C1.49982 3.977 2.22382 4.692 3.11282 4.692C4.00282 4.692 4.72582 3.977 4.72582 3.097C4.72582 2.216 4.00282 1.5 3.11282 1.5ZM3.11282 6.192C1.39682 6.192 -0.000183105 4.804 -0.000183105 3.097C-0.000183105 1.39 1.39682 0 3.11282 0C4.82982 0 6.22582 1.39 6.22582 3.097C6.22582 4.804 4.82982 6.192 3.11282 6.192Z"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3877 11.208C13.4977 11.208 12.7737 11.924 12.7737 12.804C12.7737 13.685 13.4977 14.4 14.3877 14.4C15.2767 14.4 15.9997 13.685 15.9997 12.804C15.9997 11.924 15.2767 11.208 14.3877 11.208ZM14.3877 15.9C12.6707 15.9 11.2737 14.511 11.2737 12.804C11.2737 11.097 12.6707 9.70799 14.3877 9.70799C16.1037 9.70799 17.4997 11.097 17.4997 12.804C17.4997 14.511 16.1037 15.9 14.3877 15.9Z"
                />
              </svg>

              <h6>ATP</h6>
            </CustomNavlink>
            <CustomNavlink to={"/users"}>
              <svg
                width="22"
                height="17"
                viewBox="0 0 22 17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8598 9.138H10.8868C13.4068 9.138 15.4558 7.088 15.4558 4.569C15.4558 2.05 13.4068 0 10.8868 0C8.36776 0 6.31877 2.05 6.31877 4.566C6.31377 5.783 6.78277 6.929 7.64077 7.792C8.49677 8.656 9.63976 9.134 10.8598 9.138ZM7.81877 4.569C7.81877 2.877 9.19477 1.5 10.8868 1.5C12.5788 1.5 13.9558 2.877 13.9558 4.569C13.9558 6.262 12.5788 7.638 10.8868 7.638H10.8618C10.0458 7.635 9.27977 7.314 8.70477 6.735C8.12977 6.156 7.81576 5.389 7.81877 4.569Z"
                />
                <path d="M16.1448 7.50051C16.1978 7.87551 16.5188 8.14651 16.8868 8.14651C16.9208 8.14651 16.9558 8.14451 16.9908 8.13951C18.7658 7.89051 20.1068 6.35051 20.1108 4.55551C20.1108 2.77251 18.8338 1.26851 17.0758 0.979506C16.6648 0.914506 16.2818 1.18851 16.2138 1.59751C16.1468 2.00651 16.4238 2.39251 16.8318 2.45951C17.8628 2.62851 18.6108 3.51051 18.6108 4.55351C18.6088 5.60551 17.8238 6.50751 16.7838 6.65351C16.3728 6.71051 16.0878 7.08951 16.1448 7.50051Z" />
                <path d="M19.1604 14.0482C19.2744 14.3472 19.5594 14.5312 19.8614 14.5312C19.9504 14.5312 20.0404 14.5152 20.1284 14.4822C21.5584 13.9372 21.7724 12.9442 21.7724 12.4002C21.7724 11.5092 21.2634 10.3712 18.8404 10.0082C18.4274 9.95515 18.0474 10.2282 17.9864 10.6382C17.9254 11.0492 18.2084 11.4302 18.6174 11.4922C19.7154 11.6562 20.2724 11.9622 20.2724 12.4002C20.2724 12.5372 20.2724 12.8222 19.5944 13.0802C19.2074 13.2272 19.0124 13.6612 19.1604 14.0482Z" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8867 16.7909C9.22773 16.7909 4.17773 16.7909 4.17773 13.5959C4.17773 10.4139 9.22773 10.4139 10.8867 10.4139C12.5457 10.4139 17.5947 10.4139 17.5947 13.6129C17.5947 16.7909 12.7217 16.7909 10.8867 16.7909ZM10.8867 11.9139C8.51073 11.9139 5.67773 12.2059 5.67773 13.5959C5.67773 14.9969 8.51073 15.2909 10.8867 15.2909C13.2627 15.2909 16.0947 14.9999 16.0947 13.6129C16.0947 12.2089 13.2627 11.9139 10.8867 11.9139Z"
                />
                <path d="M4.88572 8.14645C4.85172 8.14645 4.81672 8.14445 4.78172 8.13945C3.00672 7.89045 1.66672 6.35045 1.66272 4.55745C1.66272 2.77245 2.93972 1.26845 4.69772 0.97945C5.11872 0.91345 5.49172 1.19045 5.55972 1.59745C5.62672 2.00645 5.34972 2.39245 4.94172 2.45945C3.91072 2.62845 3.16272 3.51045 3.16272 4.55545C3.16472 5.60545 3.94972 6.50845 4.98872 6.65345C5.39972 6.71045 5.68472 7.08945 5.62772 7.50045C5.57472 7.87545 5.25372 8.14645 4.88572 8.14645Z" />
                <path d="M1.64512 14.4822C1.73312 14.5152 1.82312 14.5312 1.91212 14.5312C2.21412 14.5312 2.49912 14.3472 2.61312 14.0482C2.76112 13.6612 2.56612 13.2272 2.17912 13.0802C1.50012 12.8212 1.50012 12.5372 1.50012 12.4002C1.50012 11.9622 2.05712 11.6562 3.15512 11.4922C3.56412 11.4302 3.84712 11.0492 3.78612 10.6382C3.72412 10.2282 3.34612 9.95619 2.93312 10.0082C0.509122 10.3712 0.00012207 11.5102 0.00012207 12.4002C0.00012207 12.9432 0.214122 13.9362 1.64512 14.4822Z" />
              </svg>
              <h6>مدیریت ورزشکاران</h6>
            </CustomNavlink>
          </ul>
        </div>
        <div className="pt-9">
          <ul className="flex flex-col gap-y-1">
            <CustomNavlink to={"/practice"}>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.69275 6H7.8466V8.76923H3.69275V6Z"
                  stroke="#3D3D3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.84659 19.8462L8.9949 15.2548C9.13672 14.6869 8.90611 14.0912 8.4189 13.7668C7.61157 13.2287 7.06319 12.3802 6.90413 11.4231L6.46198 8.76923H7.84659V6C7.84659 5.2353 8.4665 4.61538 9.23121 4.61538H14.7697C15.5344 4.61538 16.1543 5.2353 16.1543 6V10.8462C16.1322 11.7675 15.9627 12.6794 15.6521 13.5471C15.5274 14.0465 15.5274 14.5689 15.6521 15.0683L16.8466 19.8462"
                  stroke="#3D3D3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.30814 2.53846C1.54344 2.53846 0.923523 3.15837 0.923523 3.92308V11.5385C0.923523 12.3032 1.54344 12.9231 2.30814 12.9231C3.07284 12.9231 3.69275 12.3032 3.69275 11.5385V3.92308C3.69275 3.15837 3.07284 2.53846 2.30814 2.53846Z"
                  stroke="#3D3D3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.3081 2.53846C19.5434 2.53846 18.9235 3.15837 18.9235 3.92308V11.5385C18.9235 12.3032 19.5434 12.9231 20.3081 12.9231C21.0728 12.9231 21.6928 12.3032 21.6928 11.5385V3.92308C21.6928 3.15837 21.0728 2.53846 20.3081 2.53846Z"
                  stroke="#3D3D3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.1543 6H18.9235V8.76923H16.1543V6Z"
                  stroke="#3D3D3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6158 7.38461V4.61538"
                  stroke="#3D3D3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3851 7.38461V4.61538"
                  stroke="#3D3D3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h6>مخزن تمرین‌ها</h6>
            </CustomNavlink>

            <CustomNavlink to={"/str"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_223_217)">
                  <path
                    d="M6 21C7.10457 21 8 20.1046 8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 7C19.1046 7 20 6.10457 20 5C20 3.89543 19.1046 3 18 3C16.8954 3 16 3.89543 16 5C16 6.10457 16.8954 7 18 7Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 19H16.5C17.4283 19 18.3185 18.6313 18.9749 17.9749C19.6313 17.3185 20 16.4283 20 15.5C20 14.5717 19.6313 13.6815 18.9749 13.0251C18.3185 12.3687 17.4283 12 16.5 12H8.5C7.57174 12 6.6815 11.6313 6.02513 10.9749C5.36875 10.3185 5 9.42826 5 8.5C5 7.57174 5.36875 6.6815 6.02513 6.02513C6.6815 5.36875 7.57174 5 8.5 5H12"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                
              </svg>

              <h6>استراتژی</h6>
            </CustomNavlink>
            <CustomNavlink to={"/settings"}>
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

              <h6>تنظیمات</h6>
            </CustomNavlink>
            <CustomNavlink to={"/last"}>
              <svg
                width="19"
                height="22"
                viewBox="0 0 19 22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_223_237"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="19"
                  height="18"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.10352e-05 0H18.497V17.348H6.10352e-05V0Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_223_237)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.24707 1.5C5.75207 1.5 3.31607 4.238 3.31607 6.695C3.31607 8.774 2.73907 9.735 2.22907 10.583C1.82007 11.264 1.49707 11.802 1.49707 12.971C1.66407 14.857 2.90907 15.848 9.24707 15.848C15.5501 15.848 16.8341 14.813 17.0001 12.906C16.9971 11.802 16.6741 11.264 16.2651 10.583C15.7551 9.735 15.1781 8.774 15.1781 6.695C15.1781 4.238 12.7421 1.5 9.24707 1.5ZM9.24707 17.348C4.57107 17.348 0.345074 17.018 7.43898e-05 13.035C-0.00292561 11.387 0.500074 10.549 0.944074 9.811C1.39307 9.063 1.81607 8.358 1.81607 6.695C1.81607 3.462 4.80207 0 9.24707 0C13.6921 0 16.6781 3.462 16.6781 6.695C16.6781 8.358 17.1011 9.063 17.5501 9.811C17.9941 10.549 18.4971 11.387 18.4971 12.971C18.1481 17.018 13.9231 17.348 9.24707 17.348Z"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.19827 21.5H9.19627C8.07527 21.499 7.01427 21.005 6.20927 20.108C5.93227 19.801 5.95727 19.326 6.26527 19.05C6.57327 18.772 7.04727 18.797 7.32427 19.106C7.84227 19.683 8.50727 20 9.19727 20H9.19827C9.89127 20 10.5593 19.683 11.0783 19.105C11.3563 18.798 11.8303 18.773 12.1373 19.05C12.4453 19.327 12.4703 19.802 12.1933 20.109C11.3853 21.006 10.3223 21.5 9.19827 21.5Z"
                />
              </svg>

              <h6>آخرین فعالیت‌ها</h6>
            </CustomNavlink>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;