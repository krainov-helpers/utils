import type { IconProps } from "../../types";

export function Edit(props: IconProps): React.JSX.Element {
  const { size = 14, sizeX = size, sizeY = size, color = "currentColor", style, ...rest } = props;

  return (
    <svg
      fill={color}
      height={sizeY}
      viewBox="0 0 16 16"
      width={sizeX}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fontSize: sizeY == undefined ? undefined : `${sizeY}px`,
        width: sizeX == undefined ? undefined : `${sizeX}px`,
        height: sizeY == undefined ? undefined : `${sizeY}px`,
        minWidth: sizeX == undefined ? undefined : `${sizeX}px`,
        minHeight: sizeY == undefined ? undefined : `${sizeY}px`,
        maxWidth: sizeX == undefined ? undefined : `${sizeX}px`,
        maxHeight: sizeY == undefined ? undefined : `${sizeY}px`,
        ...style,
      }}
      {...rest}
    >
      <path
        d="M14.2075 4.58547L11.4144 1.79297C11.3215 1.70009 11.2113 1.62641 11.0899 1.57614C10.9686 1.52587 10.8385 1.5 10.7072 1.5C10.5759 1.5 10.4458 1.52587 10.3245 1.57614C10.2031 1.62641 10.0929 1.70009 10 1.79297L2.29313 9.49985C2.19987 9.59237 2.12593 9.70251 2.0756 9.82386C2.02528 9.94521 1.99959 10.0754 2.00001 10.2067V12.9999C2.00001 13.2651 2.10536 13.5194 2.2929 13.707C2.48043 13.8945 2.73479 13.9999 3 13.9999H13.5C13.6326 13.9999 13.7598 13.9472 13.8536 13.8534C13.9473 13.7596 14 13.6325 14 13.4999C14 13.3672 13.9473 13.2401 13.8536 13.1463C13.7598 13.0525 13.6326 12.9999 13.5 12.9999H7.2075L14.2075 5.99985C14.3004 5.90699 14.3741 5.79674 14.4243 5.6754C14.4746 5.55406 14.5005 5.424 14.5005 5.29266C14.5005 5.16132 14.4746 5.03127 14.4243 4.90993C14.3741 4.78858 14.3004 4.67834 14.2075 4.58547ZM5.79313 12.9999H3V10.2067L8.5 4.70672L11.2931 7.49985L5.79313 12.9999ZM12 6.79297L9.20751 3.99985L10.7075 2.49985L13.5 5.29297L12 6.79297Z"
        fill={color}
      />
    </svg>
  );
}
