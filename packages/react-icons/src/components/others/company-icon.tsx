import type { IconProps } from "../../types";

export function Company(props: IconProps): React.JSX.Element {
  const { size = 14, sizeX = size, sizeY = size, color = "currentColor", ...rest } = props;

  return (
    <svg
      width={sizeX}
      height={sizeY}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 3.125C6.80964 3.125 6.25 3.68464 6.25 4.375C6.25 5.06536 6.80964 5.625 7.5 5.625C7.67464 5.625 7.84092 5.58918 7.99189 5.5245L8.008 5.51707L8.02348 5.51044C8.45238 5.31237 8.75 4.87844 8.75 4.375C8.75 3.68464 8.19036 3.125 7.5 3.125ZM7.5 6.875C7.64043 6.875 7.77816 6.86342 7.91228 6.84117L8.44562 8.04184C7.86943 8.49983 7.5 9.20677 7.5 10C7.5 10.4111 7.59923 10.799 7.77505 11.1412L5.76941 12.9247C5.37107 12.6565 4.89131 12.5 4.375 12.5C2.99429 12.5 1.875 13.6193 1.875 15C1.875 16.3807 2.99429 17.5 4.375 17.5C5.75571 17.5 6.875 16.3807 6.875 15C6.875 14.5889 6.77577 14.201 6.59996 13.8589L8.60561 12.0753C9.00395 12.3435 9.4837 12.5 10 12.5C10.5751 12.5 11.1048 12.3058 11.5272 11.9795L13.3301 13.3818C13.1981 13.6862 13.125 14.0221 13.125 14.375C13.125 15.7557 14.2443 16.875 15.625 16.875C17.0057 16.875 18.125 15.7557 18.125 14.375C18.125 12.9943 17.0057 11.875 15.625 11.875C15.05 11.875 14.5203 12.0691 14.0979 12.3955L12.295 10.9931C12.4269 10.6887 12.5 10.3529 12.5 10C12.5 9.94203 12.498 9.88451 12.4941 9.82752L13.526 9.48357C13.9716 10.1705 14.7452 10.625 15.625 10.625C17.0057 10.625 18.125 9.50571 18.125 8.125C18.125 6.74429 17.0057 5.625 15.625 5.625C14.2443 5.625 13.125 6.74429 13.125 8.125C13.125 8.18304 13.127 8.24061 13.1309 8.29766L12.0991 8.64159C11.6536 7.95453 10.8799 7.5 10 7.5C9.85958 7.5 9.72186 7.51158 9.58774 7.53383L9.05439 6.33315C9.63058 5.87516 10 5.16822 10 4.375C10 2.99429 8.88071 1.875 7.5 1.875C6.11929 1.875 5 2.99429 5 4.375C5 5.75571 6.11929 6.875 7.5 6.875ZM9.07253 10.838C9.30127 11.091 9.63207 11.25 10 11.25C10.3932 11.25 10.7441 11.0684 10.9732 10.7845C10.9775 10.7786 10.9819 10.7728 10.9864 10.767C10.991 10.761 10.9957 10.7552 11.0005 10.7495C11.1572 10.5407 11.25 10.2812 11.25 10C11.25 9.86663 11.2291 9.73814 11.1904 9.61762L11.186 9.60476L11.1818 9.59165C11.0125 9.10181 10.5474 8.75 10 8.75C9.82496 8.75 9.65832 8.78598 9.50708 8.85094L9.492 8.85788L9.47756 8.86408C9.0481 9.06193 8.75 9.49615 8.75 10C8.75 10.3148 8.86638 10.6024 9.05846 10.8222C9.06082 10.8248 9.06317 10.8274 9.06549 10.83C9.06786 10.8327 9.07021 10.8354 9.07253 10.838ZM5.30252 14.162C5.30483 14.1647 5.30716 14.1674 5.30953 14.17C5.31184 14.1726 5.31417 14.1752 5.31651 14.1777C5.50861 14.3975 5.625 14.6852 5.625 15C5.625 15.6904 5.06536 16.25 4.375 16.25C3.68464 16.25 3.125 15.6904 3.125 15C3.125 14.3096 3.68464 13.75 4.375 13.75C4.74295 13.75 5.07377 13.909 5.30252 14.162ZM14.375 14.375C14.375 14.0933 14.4682 13.8334 14.6254 13.6244C14.6299 13.619 14.6343 13.6135 14.6386 13.6079C14.6417 13.6039 14.6448 13.5999 14.6477 13.5959C14.6488 13.5944 14.65 13.5929 14.6511 13.5914C14.8802 13.307 15.2313 13.125 15.625 13.125C16.3154 13.125 16.875 13.6846 16.875 14.375C16.875 15.0654 16.3154 15.625 15.625 15.625C14.9346 15.625 14.375 15.0654 14.375 14.375ZM14.4429 8.53255L14.439 8.52042L14.4349 8.50842C14.396 8.3876 14.375 8.25875 14.375 8.125C14.375 7.43464 14.9346 6.875 15.625 6.875C16.3154 6.875 16.875 7.43464 16.875 8.125C16.875 8.81536 16.3154 9.375 15.625 9.375C15.0773 9.375 14.6119 9.0228 14.4429 8.53255Z"
        fill={color}
      />
    </svg>
  );
}
