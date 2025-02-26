import type { IconProps } from "../../types";

export function Search(props: IconProps): React.JSX.Element {
  const { size = 14, sizeX = size, sizeY = size, color = "currentColor", style, ...rest } = props;

  return (
    <svg
      fill="none"
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
        d="M14.3538 13.6463L11.2244 10.5175C12.1314 9.42859 12.5837 8.03189 12.4872 6.61798C12.3906 5.20407 11.7527 3.88181 10.7061 2.92625C9.65951 1.9707 8.2848 1.45543 6.86796 1.48763C5.45113 1.51983 4.10125 2.09702 3.09913 3.09913C2.09702 4.10125 1.51983 5.45113 1.48763 6.86796C1.45543 8.2848 1.9707 9.65951 2.92625 10.7061C3.88181 11.7527 5.20407 12.3906 6.61798 12.4872C8.03189 12.5837 9.42859 12.1314 10.5175 11.2244L13.6463 14.3538C13.6927 14.4002 13.7479 14.4371 13.8086 14.4622C13.8693 14.4874 13.9343 14.5003 14 14.5003C14.0657 14.5003 14.1308 14.4874 14.1915 14.4622C14.2522 14.4371 14.3073 14.4002 14.3538 14.3538C14.4002 14.3073 14.4371 14.2522 14.4622 14.1915C14.4874 14.1308 14.5003 14.0657 14.5003 14C14.5003 13.9343 14.4874 13.8693 14.4622 13.8086C14.4371 13.7479 14.4002 13.6927 14.3538 13.6463ZM2.50002 7.00002C2.50002 6.11001 2.76394 5.23998 3.25841 4.49995C3.75287 3.75993 4.45568 3.18316 5.27795 2.84256C6.10021 2.50197 7.00501 2.41285 7.87793 2.58649C8.75084 2.76012 9.55267 3.1887 10.182 3.81804C10.8113 4.44738 11.2399 5.2492 11.4136 6.12211C11.5872 6.99503 11.4981 7.89983 11.1575 8.7221C10.8169 9.54436 10.2401 10.2472 9.50009 10.7416C8.76007 11.2361 7.89004 11.5 7.00002 11.5C5.80695 11.4987 4.66313 11.0242 3.8195 10.1805C2.97587 9.33691 2.50134 8.19309 2.50002 7.00002Z"
        fill={color}
      />
    </svg>
  );
}
