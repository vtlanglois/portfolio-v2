export default function Footer() {
  return (
    <footer>
      <svg
        width="100%"
        viewBox="0 0 680 42"
        preserveAspectRatio="xMidYMax slice"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        className="bg-[#3ea032]"
      >
        <path
          d="M-10 45 L-10 12 Q60 2 150 8 Q220 14 280 6 Q320 1 360 8 Q410 16 480 7 Q570 -2 690 14 L690 45 Z"
          fill="#2d7a24"
        >
          <animate
            attributeName="d"
            dur="5.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
            values="
    M-10 45 L-10 12 Q60 2 150 8 Q220 14 280 6 Q320 1 360 8 Q410 16 480 7 Q570 -2 690 14 L690 45 Z;
    M-10 45 L-10 14 Q60 4 150 10 Q220 16 280 8 Q320 3 360 10 Q410 18 480 9 Q570 0 690 16 L690 45 Z;
    M-10 45 L-10 12 Q60 2 150 8 Q220 14 280 6 Q320 1 360 8 Q410 16 480 7 Q570 -2 690 14 L690 45 Z
  "
          />
        </path>
      </svg>

      <div className="bg-[#2d7a24] text-white">
        <div className="container mx-auto p-3">Footer</div>
      </div>
    </footer>
  );
}
