import { FC } from 'react';

type Props =
  | { width: number; height?: never }
  | { width?: never; height: number };

const Logo: FC<Props> = ({ width, height }) => {
  return (
    <svg
      className="aspect-[473/90]"
      width={width}
      height={height}
      viewBox="0 0 473 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_0_1)">
        <path
          d="M19.4725 32.5277L0 87.7333H18.399L94 31.3186L27.5551 61.7918L37.8715 32.5277H19.4725ZM40.1448 26.0792L47.0987 45.7884L62.9403 38.524L49.3482 0H30.9492L40.1448 26.0792ZM54.984 68.1322L61.8905 87.7333H80.2974L69.5469 57.27L54.984 68.1322Z"
          fill="currentColor"
        />
      </g>
      <path
        d="M111.181 33.8016L117.893 47.5766L123.654 33.8016H138.531L124.656 60.2997L139.082 88H124.105L117.242 73.7241L110.68 88H95.653L109.428 60.45L96.1539 33.8016H111.181ZM200.794 68.8152C200.794 67.5128 200.677 66.3273 200.443 65.2587C200.209 64.1901 199.709 63.205 198.94 62.3034C198.206 61.4017 197.121 60.5001 195.685 59.5984C194.282 58.6968 192.445 57.7618 190.175 56.7934C187.47 55.658 184.848 54.4558 182.31 53.1868C179.772 51.8844 177.485 50.3817 175.448 48.6786C173.411 46.9755 171.791 44.9719 170.589 42.6677C169.42 40.3301 168.836 37.5918 168.836 34.4528C168.836 31.3806 169.387 28.5922 170.489 26.0876C171.624 23.5831 173.227 21.4459 175.298 19.676C177.368 17.8727 179.789 16.4869 182.561 15.5184C185.366 14.55 188.488 14.0658 191.928 14.0658C196.603 14.0658 200.644 15.0342 204.05 16.9711C207.489 18.9079 210.144 21.5627 212.014 24.9355C213.918 28.3083 214.869 32.182 214.869 36.5566H200.243C200.243 34.4862 199.942 32.6662 199.341 31.0967C198.774 29.4938 197.855 28.2415 196.586 27.3399C195.317 26.4383 193.681 25.9874 191.677 25.9874C189.807 25.9874 188.254 26.3715 187.019 27.1395C185.817 27.8742 184.915 28.8927 184.314 30.1951C183.746 31.464 183.462 32.9 183.462 34.5029C183.462 35.7051 183.746 36.7904 184.314 37.7588C184.915 38.6938 185.733 39.5454 186.768 40.3134C187.804 41.0481 189.022 41.7661 190.425 42.4674C191.861 43.1686 193.43 43.8532 195.134 44.5211C198.44 45.8234 201.362 47.2594 203.899 48.8289C206.437 50.365 208.558 52.1015 210.261 54.0384C211.964 55.9418 213.25 58.0957 214.118 60.5001C214.986 62.9044 215.42 65.6428 215.42 68.715C215.42 71.7538 214.886 74.5255 213.817 77.0301C212.782 79.5012 211.263 81.6385 209.259 83.4417C207.256 85.2116 204.835 86.5808 201.996 87.5492C199.191 88.5176 196.052 89.0018 192.579 89.0018C189.206 89.0018 186.017 88.5343 183.012 87.5993C180.006 86.6308 177.351 85.1782 175.047 83.2414C172.776 81.2711 170.99 78.7833 169.687 75.7778C168.385 72.739 167.734 69.1491 167.734 65.0083H182.41C182.41 67.2123 182.628 69.099 183.062 70.6685C183.496 72.2047 184.164 73.4402 185.065 74.3753C185.967 75.2769 187.069 75.9615 188.371 76.429C189.707 76.8631 191.226 77.0802 192.93 77.0802C194.866 77.0802 196.403 76.7128 197.538 75.9782C198.707 75.2435 199.542 74.2584 200.042 73.0228C200.543 71.7872 200.794 70.3847 200.794 68.8152ZM248.28 33.8016V44.3708H220.63V33.8016H248.28ZM226.991 20.4273H240.967V71.47C240.967 72.9727 241.117 74.1248 241.418 74.9263C241.718 75.7277 242.169 76.2954 242.77 76.6294C243.405 76.9299 244.239 77.0802 245.275 77.0802C245.976 77.0802 246.627 77.0468 247.228 76.98C247.829 76.8798 248.28 76.7796 248.581 76.6795V87.6494C247.479 88.0835 246.31 88.4174 245.074 88.6512C243.872 88.8849 242.436 89.0018 240.766 89.0018C237.961 89.0018 235.524 88.4675 233.453 87.3989C231.416 86.3303 229.83 84.6272 228.694 82.2896C227.559 79.9187 226.991 76.813 226.991 72.9727V20.4273ZM282.292 74.9764V33.8016H296.367V88H283.143L282.292 74.9764ZM283.895 63.8061L287.802 63.7059C287.802 67.3458 287.451 70.7186 286.75 73.8243C286.049 76.8965 284.997 79.568 283.594 81.8388C282.192 84.1096 280.438 85.8795 278.335 87.1485C276.231 88.384 273.743 89.0018 270.871 89.0018C268.667 89.0018 266.63 88.6345 264.76 87.8998C262.923 87.1318 261.337 85.9463 260.001 84.3434C258.666 82.7071 257.614 80.6199 256.846 78.082C256.111 75.5107 255.744 72.4217 255.744 68.8152V33.8016H269.819V68.9654C269.819 70.4348 269.953 71.7038 270.22 72.7724C270.487 73.8076 270.854 74.6591 271.322 75.327C271.789 75.9949 272.34 76.4791 272.975 76.7796C273.609 77.0468 274.327 77.1804 275.129 77.1804C277.333 77.1804 279.069 76.6127 280.338 75.4773C281.641 74.3085 282.559 72.7223 283.093 70.7186C283.628 68.6816 283.895 66.3774 283.895 63.8061ZM332.834 76.0283V11.0603H346.909V88L334.186 88.0501L332.834 76.0283ZM304.733 62.8043V59.1977C304.733 54.7897 305.1 50.9327 305.835 47.6267C306.603 44.3207 307.738 41.5657 309.241 39.3617C310.743 37.1577 312.58 35.5214 314.751 34.4528C316.955 33.3508 319.476 32.7998 322.314 32.7998C324.886 32.7998 327.14 33.451 329.077 34.7533C331.047 36.0223 332.717 37.8089 334.086 40.1131C335.455 42.4173 336.557 45.1389 337.392 48.2779C338.227 51.4169 338.811 54.8565 339.145 58.5966V63.8061C338.744 67.3458 338.126 70.6518 337.292 73.7241C336.49 76.7963 335.388 79.4678 333.986 81.7386C332.616 84.0094 330.963 85.796 329.027 87.0984C327.09 88.3673 324.836 89.0018 322.264 89.0018C319.426 89.0018 316.905 88.4341 314.701 87.2987C312.53 86.1633 310.693 84.4936 309.191 82.2896C307.721 80.0522 306.603 77.3139 305.835 74.0747C305.1 70.8021 304.733 67.0453 304.733 62.8043ZM318.758 59.1977V62.8043C318.758 65.3422 318.875 67.5295 319.109 69.3662C319.376 71.1694 319.793 72.6555 320.361 73.8243C320.962 74.9597 321.747 75.8112 322.715 76.3789C323.684 76.9132 324.886 77.1804 326.322 77.1804C328.192 77.1804 329.711 76.7128 330.88 75.7778C332.049 74.8094 332.917 73.4903 333.485 71.8206C334.086 70.1175 334.42 68.164 334.487 65.96V56.4928C334.42 54.6561 334.203 53.0031 333.835 51.5338C333.468 50.0645 332.95 48.8122 332.283 47.777C331.615 46.7418 330.78 45.9403 329.778 45.3726C328.81 44.8049 327.674 44.5211 326.372 44.5211C324.969 44.5211 323.767 44.8049 322.765 45.3726C321.797 45.9403 321.029 46.8253 320.461 48.0274C319.893 49.1962 319.459 50.7157 319.159 52.5857C318.892 54.4224 318.758 56.6264 318.758 59.1977ZM372.205 33.8016V88H358.129V33.8016H372.205ZM357.478 19.7762C357.478 17.6056 358.163 15.819 359.532 14.4164C360.935 12.9805 362.805 12.2625 365.142 12.2625C367.513 12.2625 369.383 12.9805 370.752 14.4164C372.122 15.819 372.806 17.6056 372.806 19.7762C372.806 21.9134 372.105 23.7 370.702 25.1359C369.333 26.5384 367.496 27.2397 365.192 27.2397C362.821 27.2397 360.935 26.5384 359.532 25.1359C358.163 23.7 357.478 21.9134 357.478 19.7762ZM381.722 62.7542V59.0975C381.722 54.8565 382.223 51.0997 383.225 47.8271C384.26 44.5545 385.73 41.8162 387.633 39.6122C389.536 37.3748 391.824 35.6884 394.495 34.553C397.2 33.3842 400.223 32.7998 403.562 32.7998C406.935 32.7998 409.957 33.3842 412.628 34.553C415.333 35.6884 417.637 37.3748 419.541 39.6122C421.478 41.8162 422.964 44.5545 423.999 47.8271C425.034 51.0997 425.552 54.8565 425.552 59.0975V62.7542C425.552 66.9618 425.034 70.7019 423.999 73.9745C422.964 77.2471 421.478 80.0021 419.541 82.2395C417.637 84.4769 415.35 86.1633 412.678 87.2987C410.007 88.4341 407.001 89.0018 403.662 89.0018C400.323 89.0018 397.301 88.4341 394.596 87.2987C391.924 86.1633 389.62 84.4769 387.683 82.2395C385.746 80.0021 384.26 77.2471 383.225 73.9745C382.223 70.7019 381.722 66.9618 381.722 62.7542ZM395.748 59.0975V62.7542C395.748 65.2587 395.915 67.4293 396.249 69.266C396.616 71.1027 397.134 72.6221 397.801 73.8243C398.503 75.0265 399.338 75.9114 400.306 76.4791C401.274 77.0468 402.393 77.3306 403.662 77.3306C404.931 77.3306 406.066 77.0468 407.068 76.4791C408.07 75.9114 408.888 75.0265 409.523 73.8243C410.191 72.6221 410.675 71.1027 410.975 69.266C411.309 67.4293 411.476 65.2587 411.476 62.7542V59.0975C411.476 56.6598 411.293 54.5226 410.925 52.6859C410.558 50.8158 410.04 49.2964 409.372 48.1276C408.705 46.9254 407.87 46.0238 406.868 45.4227C405.899 44.7882 404.797 44.471 403.562 44.471C402.326 44.471 401.224 44.7882 400.256 45.4227C399.321 46.0238 398.503 46.9254 397.801 48.1276C397.134 49.2964 396.616 50.8158 396.249 52.6859C395.915 54.5226 395.748 56.6598 395.748 59.0975ZM458.462 73.3735C458.462 72.4384 458.144 71.6036 457.51 70.8689C456.875 70.1342 455.874 69.3829 454.504 68.6148C453.135 67.8134 451.315 66.9284 449.044 65.96C446.573 64.9582 444.386 63.923 442.483 62.8544C440.579 61.7857 438.959 60.6003 437.624 59.2979C436.321 57.9955 435.336 56.5095 434.668 54.8398C434 53.1701 433.667 51.2667 433.667 49.1294C433.667 46.8253 434.084 44.7047 434.919 42.7679C435.787 40.7977 437.023 39.0779 438.626 37.6085C440.228 36.1058 442.182 34.937 444.486 34.1022C446.824 33.2339 449.445 32.7998 452.35 32.7998C456.425 32.7998 459.914 33.5178 462.819 34.9537C465.758 36.3563 468.012 38.3265 469.582 40.8644C471.151 43.4024 471.936 46.3577 471.936 49.7305H457.911C457.911 48.5284 457.727 47.4597 457.36 46.5247C456.992 45.5563 456.391 44.8049 455.556 44.2706C454.755 43.7363 453.67 43.4692 452.3 43.4692C451.299 43.4692 450.397 43.6862 449.595 44.1204C448.827 44.5545 448.21 45.1389 447.742 45.8735C447.308 46.5748 447.091 47.4097 447.091 48.3781C447.091 49.1127 447.241 49.7639 447.542 50.3316C447.876 50.8993 448.393 51.4503 449.095 51.9846C449.796 52.5189 450.731 53.0866 451.9 53.6877C453.102 54.2554 454.571 54.8899 456.308 55.5912C459.914 56.9269 462.87 58.3629 465.174 59.899C467.511 61.4351 469.248 63.2384 470.383 65.3088C471.519 67.3458 472.086 69.8671 472.086 72.8725C472.086 75.2769 471.619 77.4642 470.684 79.4345C469.782 81.4047 468.463 83.1078 466.727 84.5437C464.99 85.9797 462.903 87.0817 460.465 87.8497C458.061 88.6178 455.373 89.0018 452.401 89.0018C448.026 89.0018 444.336 88.1336 441.33 86.3971C438.325 84.6606 436.054 82.4399 434.518 79.735C432.982 76.9967 432.214 74.1582 432.214 71.2195H445.538C445.605 73.0228 445.939 74.4421 446.54 75.4773C447.174 76.4791 448.026 77.1804 449.095 77.5811C450.163 77.9818 451.349 78.1822 452.651 78.1822C453.953 78.1822 455.022 78.0152 455.857 77.6813C456.725 77.3139 457.376 76.7629 457.81 76.0283C458.245 75.2602 458.462 74.3753 458.462 73.3735Z"
        fill="currentColor"
      />
      <defs>
        <clipPath id="clip0_0_1">
          <rect width="94" height="87.7333" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default Logo;