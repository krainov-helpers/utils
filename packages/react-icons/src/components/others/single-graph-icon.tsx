import type { IconProps } from "../../types";

export function SingleGrap(props: IconProps): React.JSX.Element {
  const { size = 14, sizeX = size, sizeY = size, color = "currentColor", style, ...rest } = props;

  return (
    <svg
      width={sizeX}
      height={sizeY}
      viewBox="0 0 18 18"
      fill="none"
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
        d="M16.5803 5.32893C16.3976 5.51223 16.1805 5.6576 15.9415 5.75667C15.7024 5.85574 15.4462 5.90656 15.1874 5.90619C15.0535 5.90596 14.9199 5.8923 14.7887 5.86541L12.6393 9.85705C12.8975 10.1152 13.0788 10.4401 13.163 10.7953C13.2472 11.1506 13.2309 11.5223 13.116 11.8689C13.0012 12.2154 12.7922 12.5232 12.5124 12.7578C12.2326 12.9924 11.8932 13.1446 11.5319 13.1974C11.1706 13.2502 10.8018 13.2015 10.4666 13.0567C10.1314 12.9119 9.84309 12.6767 9.63387 12.3775C9.42464 12.0783 9.30275 11.7268 9.28181 11.3623C9.26086 10.9978 9.3417 10.6346 9.51528 10.3134L7.68293 8.48104C7.3963 8.63607 7.07575 8.71772 6.74988 8.71869C6.61596 8.7185 6.4824 8.70484 6.35121 8.67791L4.20176 12.6688C4.47707 12.9442 4.66456 13.295 4.74051 13.6769C4.81646 14.0588 4.77746 14.4546 4.62844 14.8143C4.47942 15.1741 4.22708 15.4815 3.90333 15.6979C3.57957 15.9142 3.19894 16.0296 2.80957 16.0296C2.4202 16.0296 2.03957 15.9142 1.71581 15.6979C1.39206 15.4815 1.13972 15.1741 0.990703 14.8143C0.841687 14.4546 0.802687 14.0588 0.878635 13.6769C0.954584 13.295 1.14207 12.9442 1.41738 12.6688C1.64818 12.4383 1.93267 12.2686 2.24527 12.1752C2.55786 12.0818 2.88877 12.0676 3.20824 12.1338L5.3577 8.14213C4.98909 7.77243 4.78209 7.27166 4.78209 6.74959C4.78209 6.22753 4.98909 5.72676 5.3577 5.35705C5.69207 5.02248 6.13573 4.81947 6.60751 4.78518C7.07928 4.75088 7.54763 4.8876 7.92688 5.1703C8.30612 5.45301 8.5709 5.8628 8.67278 6.32472C8.77466 6.78664 8.70682 7.2698 8.48168 7.6858L10.314 9.51815C10.7227 9.29838 11.1956 9.22943 11.65 9.32338L13.7994 5.33174C13.6166 5.14892 13.4715 4.93188 13.3726 4.69301C13.2736 4.45414 13.2227 4.19811 13.2227 3.93955C13.2227 3.681 13.2736 3.42497 13.3726 3.1861C13.4715 2.94723 13.6166 2.73018 13.7994 2.54737C14.1686 2.17813 14.6694 1.9707 15.1916 1.9707C15.7138 1.9707 16.2146 2.17813 16.5838 2.54737C16.953 2.9166 17.1605 3.41738 17.1605 3.93955C17.1605 4.46172 16.953 4.96251 16.5838 5.33174L16.5803 5.32893Z"
        fill={color}
      />
    </svg>
  );
}
