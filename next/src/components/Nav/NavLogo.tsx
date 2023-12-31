import { useRouter } from "next/router";
import styles from "./Nav.module.scss";
import clsx from "clsx";
import Link from "next/link";

export function NavLogo() {
  return (
    <Link
      href="/"
      className={clsx("h-full w-auto flex items-center", "h-14 lg:w-auto")}
    >
      <WhichLogo />
    </Link>
  );
}

const WhichLogo = () => {
  const r = useRouter();
  if (r?.pathname === "/news/category/mining") {
    return <MiningLogoSVG />;
  }

  if (r?.pathname === "/podcasts") {
    return <PodcastsLogoSVG />;
  }

  return (
    <img
      className={styles.logoImg}
      src={"/kitco_logo_white.png"}
      alt="Kitco logo"
    />
  );
};

function MiningLogoSVG() {
  const st0 = { fill: "#F9C432" };
  const st1 = { fill: "#FFFFFF" };
  const st2 = { fill: "#FFFFFF" };
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 148 822.2 296"
      //   style="enable-background:new 0 0 822.2 612;"
      //   xmlSpace="preserve"
    >
      <path
        className="st0"
        style={st0}
        d="M746.8,349.1H463.4c-3.4,0-6.2-3.2-6.2-7v-79.9c0-3.9,2.8-7,6.2-7H768l-19.2,91.7
	C748.8,348,747.9,349.1,746.8,349.1z"
      />
      <path
        className="st1"
        d="M445.1,247.8c-0.9-1.5-1.7-2.6-2.4-3.2c-0.4-0.3-0.8-0.6-1.4-0.9c1.4-0.1,2.5-0.6,3.4-1.5
	c0.9-0.9,1.3-1.9,1.3-3.1c0-0.8-0.3-1.6-0.7-2.4c-0.5-0.7-1.2-1.3-2-1.6c-0.9-0.3-2.3-0.4-4.1-0.4h-5.6V251h2.6v-6.9h1.5
	c1,0,1.6,0.2,2.1,0.6c0.7,0.5,1.6,1.8,2.7,3.8l1.4,2.6h3.2L445.1,247.8z M439.3,241.9h-3.2v0h0v-4.9h3c1.3,0,2.2,0.1,2.6,0.3
	c0.2,0.1,0.5,0.2,0.7,0.4c0.2,0.1,0.3,0.3,0.5,0.5c0.3,0.4,0.4,0.8,0.4,1.3c0,0.8-0.3,1.4-0.8,1.8
	C441.9,241.6,440.8,241.9,439.3,241.9z"
      />
      <path
        className="st1"
        style={st1}
        d="M425.2,242.9c0-8.3,6.8-15.1,15.1-15.1l0,0c8.4,0,15.1,6.8,15.1,15.1l0,0c0,8.3-6.8,15.1-15.1,15.1l0,0
	C431.9,258,425.2,251.2,425.2,242.9L425.2,242.9z M427.4,242.9c0,7.1,5.8,12.9,12.9,12.9l0,0c7.2,0,12.9-5.8,12.9-12.9l0,0
	c0-7.1-5.8-12.9-12.9-12.9l0,0C433.1,229.9,427.4,235.7,427.4,242.9L427.4,242.9z"
      />
      <g>
        <path
          d="M522.6,291.7l-12.1,22.9c-2.4,0.3-4.4,0.3-6.7,0l-12.2-23.1v37.2c-2.7,0.3-6.6,0.3-9.3,0v-53.2c2.8-0.3,7.4-0.3,10.1,0
		l14.9,28.6l15-28.6c2.8-0.3,7.1-0.3,9.8,0v53.2c-2.7,0.3-6.6,0.3-9.3,0V291.7z"
        />
        <path d="M544.3,275.4c2.8-0.3,6.7-0.3,9.3,0v53.2c-2.7,0.3-6.6,0.3-9.3,0V275.4z" />
        <path
          d="M575.4,290.6v38.1c-2.9,0.4-6.3,0.4-9.3,0v-53.2c3.2-0.3,7.1-0.3,10.2,0l21.5,38.9v-38.9c3.3-0.3,6.3-0.3,9.3,0v53.2
		c-3.4,0.3-7.1,0.3-10.6,0L575.4,290.6z"
        />
        <path d="M619.5,275.4c2.8-0.3,6.7-0.3,9.3,0v53.2c-2.7,0.3-6.6,0.3-9.3,0V275.4z" />
        <path
          d="M650.6,290.6v38.1c-2.9,0.4-6.3,0.4-9.3,0v-53.2c3.2-0.3,7.1-0.3,10.2,0l21.5,38.9v-38.9c3.3-0.3,6.3-0.3,9.3,0v53.2
		c-3.4,0.3-7.1,0.3-10.6,0L650.6,290.6z"
        />
        <path
          d="M721.7,308.1H713c-0.4-2.2-0.4-5.4,0-7.7h17.8v26.8c-5.6,1.7-11.3,2.5-16,2.5c-13,0-21.4-3.6-21.4-14.7v-25.8
		c0-11.2,8.4-14.7,21.4-14.7c4.9,0,9.5,0.3,14.9,1.3c0.3,2.2,0.3,5.5,0,7.6c-4.7-0.7-8.7-1-13.5-1c-7.5,0-13.5,0.8-13.5,8.6V313
		c0,7.8,5.9,8.6,13.5,8.6c1.9,0,3.7-0.1,5.5-0.3V308.1z"
        />
      </g>
      <polygon
        className="st1"
        style={st1}
        points="772.9,348.9 756.3,348.9 777.1,255.4 794.8,255.4 "
      />
      <polygon
        className="st0"
        style={st0}
        points="797.4,348.9 780.5,348.9 801.2,255.4 818.9,255.4 "
      />
      <path
        className="st2"
        style={st2}
        d="M52.4,304c0,0.3,0,0.6,0.1,1c0.1,0.4,0.3,0.7,0.6,1l41.6,42.8h23.6l-44.8-48.3l37.1-41.4H90.8l-37.1,42.5
	c-0.5,0.6-0.8,1-1,1.2C52.5,303,52.4,303.4,52.4,304L52.4,304z M432.2,302.2v-15.4c0-5.2-1.1-9.7-3.4-13.7c-2.3-3.9-5.3-7.2-9-9.8
	c-3.7-2.6-7.9-4.5-12.6-5.8c-4.6-1.3-9.3-1.9-14-1.9h-30c-4.9,0-9.7,0.8-14.4,2.3c-4.7,1.5-8.9,3.8-12.6,6.7
	c-3.7,2.9-6.7,6.5-8.9,10.6c-2.2,4.1-3.4,8.7-3.4,13.8v13.2v13.2c0,5.1,1.1,9.7,3.4,13.8c2.2,4.1,5.2,7.7,8.9,10.6
	c3.7,2.9,7.9,5.2,12.6,6.7c4.7,1.5,9.5,2.3,14.4,2.3h30c4.7,0,9.3-0.6,14-1.9c4.6-1.3,8.8-3.2,12.6-5.8c3.7-2.6,6.8-5.9,9-9.8
	c2.3-3.9,3.4-8.5,3.4-13.7V302.2L432.2,302.2z M345.8,302.2c0.1-5.2,0.7-9.9,1.7-14c1.1-4.5,3-8.3,5.6-11.4c2.6-3,6-5.3,10.1-6.9
	c4.1-1.5,9.2-2.3,15.3-2.3c6.3,0,11.5,0.7,15.8,2.2c4.2,1.5,7.6,3.8,10.2,6.8c2.6,3,4.4,6.8,5.5,11.4c1,4.1,1.5,8.8,1.6,14.1
	c-0.1,5.3-0.6,10-1.6,14.1c-1.1,4.5-2.9,8.3-5.5,11.4c-2.6,3-6,5.3-10.2,6.8c-4.2,1.5-9.5,2.2-15.8,2.2c-6.1,0-11.2-0.8-15.3-2.3
	c-4.1-1.5-7.5-3.8-10.1-6.9c-2.6-3-4.5-6.8-5.6-11.4C346.5,312.1,345.9,307.5,345.8,302.2L345.8,302.2z M261.2,288.4
	c3.5-16.8,15.2-20.7,30.5-20.7c10.4,0,14.8,0.7,24.2,5.7v-13.8c0-1.3-64.9-16.7-75.4,22.7c-3.4,12.8-3.4,27.1,0,39.9
	c10.5,39.4,75.4,23.9,75.4,22.7V331c-9.4,4.9-13.8,5.7-24.2,5.7c-15.3,0-27-3.9-30.5-20.7C259.3,306.9,259.3,297.5,261.2,288.4
	L261.2,288.4z M193.7,259.2h-10.8h-0.5h-27.3v14.9c8-1.8,16.3-3.1,26.8-3.3l1.5,0c1.7,26,1.3,52-0.9,78h0.5h0.4h10.5h10.5h0.4h0.5
	c-2.2-26-2.6-52-0.9-78l1.5,0c10.4,0.1,18.7,1.5,26.8,3.3v-14.9H205h-0.5H193.7L193.7,259.2z M124.3,259.2h11.3h11.3
	c-2.7,29.9-2.5,59.8,0,89.7h-11.3h-11.3C126.8,319,127,289.1,124.3,259.2L124.3,259.2z M30.2,259.2h11.3h11.3
	c-2.7,29.9-2.5,59.8,0,89.7H41.5H30.2C32.7,319,32.9,289.1,30.2,259.2z"
      />
    </svg>
  );
}

function PodcastsLogoSVG() {
  const s = {
    st0: { fill: "#006FFF" },
    st1: { fill: "#FFFFFF" },
    st2: { fillRule: "evenodd", clipRule: "evenodd", fill: "#FFFFFF" },
    st3: { fillRule: "evenodd", clipRule: "evenodd", fill: "#006FFF" },
  } as const;
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 132 1114.3 322"
      // style="enable-background:new 0 0 1114.3 612;"
    >
      <path
        className="st0"
        style={s.st0}
        d="M960.6,345.8h-468c-4.1,0-7.4-3.3-7.4-7.4v-88c0-4.1,3.3-7.4,7.4-7.4h468c4.1,0,7.4,3.3,7.4,7.4v88
	C968,342.4,964.7,345.8,960.6,345.8z"
      />
      <path
        className="st1"
        style={s.st1}
        d="M472,234.9c-1-1.6-1.9-2.8-2.6-3.5c-0.4-0.4-0.9-0.7-1.5-0.9c1.5-0.1,2.8-0.7,3.7-1.6c0.9-1,1.4-2.1,1.4-3.4
	c0-0.9-0.3-1.8-0.8-2.6c-0.6-0.8-1.3-1.4-2.2-1.7c-1-0.3-2.5-0.5-4.5-0.5h-6.1v17.8h2.9v-7.6h1.7c1,0,1.8,0.2,2.3,0.6
	c0.8,0.6,1.8,1.9,3,4.2l1.6,2.8h3.5L472,234.9z M465.6,228.4h-3.5v0h0V223h3.3c1.4,0,2.4,0.1,2.9,0.3c0.3,0.1,0.5,0.2,0.7,0.4
	c0.2,0.2,0.4,0.3,0.5,0.5c0.3,0.4,0.4,0.9,0.4,1.4c0,0.8-0.3,1.5-0.9,2C468.4,228.1,467.2,228.4,465.6,228.4z"
      />
      <path
        className="st1"
        style={s.st1}
        d="M450.1,229.5c0-9.1,7.4-16.6,16.6-16.6l0,0c9.2,0,16.6,7.4,16.6,16.6l0,0c0,9.1-7.4,16.6-16.6,16.6l0,0
	C457.5,246,450.1,238.6,450.1,229.5L450.1,229.5z M452.5,229.5c0,7.8,6.3,14.2,14.2,14.2l0,0c7.8,0,14.2-6.3,14.2-14.2l0,0
	c0-7.8-6.3-14.2-14.2-14.2l0,0C458.8,215.3,452.5,221.6,452.5,229.5L452.5,229.5z"
      />
      <g>
        <path
          className="st1"
          style={s.st1}
          d="M522,263.8H539c13.5,0,21.9,4,21.9,15.7v4.6c0,11.4-8.4,15.3-21.9,15.3h-10v22.2c-2.1,0.3-4.8,0.3-6.9,0V263.8
		z M553.9,280.5c0-9.2-6.7-10.6-14.9-10.6h-10v23.6h10c8.2,0,14.9-1.5,14.9-10.3V280.5z"
        />
        <path
          className="st1"
          style={s.st1}
          d="M612.9,306.7c0,12-8.4,16-21,16c-12.7,0-21.1-4-21.1-16v-28.3c0-11.9,8.4-15.9,21.1-15.9c12.6,0,21,4,21,15.9
		V306.7z M606,279.3c0-9.5-6.5-10.8-14.1-10.8s-14.1,1.2-14.1,10.8v26.4c0,9.4,6.6,10.7,14.1,10.7s14.1-1.3,14.1-10.7V279.3z"
        />
        <path
          className="st1"
          style={s.st1}
          d="M626.7,321.6v-57.8h18.8c13.6,0,22,4,22,15.8v26.1c0,11.8-8.3,15.9-22,15.9H626.7z M660.5,280.7
		c0-9.5-6.8-10.8-15-10.8h-11.9v45.5h11.9c8.2,0,15-1.5,15-10.7V280.7z"
        />
        <path
          className="st1"
          style={s.st1}
          d="M679.6,278.5c0-12.1,8.3-16,21.4-16c5.1,0,10.2,0.3,15.4,1.5c0.4,1.6,0.4,4.1,0,5.7c-4.9-0.8-9.1-1.1-14.5-1.1
		c-8.5,0-15.4,1.2-15.4,11v25.9c0,9.6,6.9,10.9,15.4,10.9c5.9,0,10.2-1.1,14.8-2.3c0.5,1.6,0.9,3.8,0.9,5.7
		c-5.4,1.9-11.4,2.9-16.5,2.9c-13.1,0-21.4-3.8-21.4-16V278.5z"
        />
        <path
          className="st1"
          style={s.st1}
          d="M759.3,304.8h-22.4l-5.6,16.8c-2,0.3-5,0.3-7,0l20.6-57.8c2.2-0.3,4.8-0.3,6.9,0l20.5,57.8
		c-2.1,0.3-5.1,0.3-7.2,0L759.3,304.8z M748.1,271.9l-9.2,27.3h18.5L748.1,271.9z"
        />
        <path
          className="st1"
          style={s.st1}
          d="M814.1,308.6c0,10.2-7,14.1-18.9,14.1c-5,0-10.8-0.3-15.8-1.4c-0.4-1.6-0.4-4.3,0-6c5.6,0.9,10.3,1.2,15.7,1.2
		c6.7,0,12.2-1.2,12.2-8.8v-3.6c0-5.1-2.1-5.7-6.5-7.2l-11.3-3.8c-6.9-2.3-10.2-4.9-10.2-11.5v-5.2c0-10.2,8-14,19.7-14
		c5.1,0,9.5,0.3,14.8,1.6c0.4,1.6,0.4,4.1,0,5.7c-5.4-1-9.4-1.3-14.6-1.3c-7.4,0-13.1,1.3-13.1,8.6v3.3c0,4.6,2.3,5.6,7.1,7.2
		l10.8,3.7c6.9,2.3,10.2,4.3,10.2,11.7V308.6z"
        />
        <path
          className="st1"
          style={s.st1}
          d="M837.1,269.6h-17.4c-0.3-1.6-0.3-4.2,0-5.8h41.7c0.3,1.6,0.3,4.3,0,5.8H844v52c-2.1,0.3-4.9,0.3-6.9,0V269.6z"
        />
        <path
          className="st1"
          style={s.st1}
          d="M901.9,308.6c0,10.2-7,14.1-18.9,14.1c-5,0-10.8-0.3-15.8-1.4c-0.4-1.6-0.4-4.3,0-6c5.6,0.9,10.3,1.2,15.7,1.2
		c6.7,0,12.2-1.2,12.2-8.8v-3.6c0-5.1-2.1-5.7-6.5-7.2l-11.3-3.8c-6.9-2.3-10.2-4.9-10.2-11.5v-5.2c0-10.2,8-14,19.7-14
		c5.1,0,9.5,0.3,14.8,1.6c0.4,1.6,0.4,4.1,0,5.7c-5.4-1-9.4-1.3-14.6-1.3c-7.4,0-13.1,1.3-13.1,8.6v3.3c0,4.6,2.3,5.6,7.1,7.2
		l10.8,3.7c6.9,2.3,10.2,4.3,10.2,11.7V308.6z"
        />
      </g>
      <g>
        <path
          className="st2"
          style={s.st2}
          d="M952.1,289.7v35.5c0,3.7-3,6.8-6.8,6.8h0c-3.7,0-6.8-3-6.8-6.8v-35.5H952.1z"
        />
        <path
          className="st3"
          style={s.st3}
          d="M979.2,289.7v19.1c0,3.7-3,6.8-6.8,6.8h0c-3.7,0-6.8-3-6.8-6.8v-19.1H979.2z"
        />
        <path
          className="st3"
          style={s.st3}
          d="M1006.3,289.7v37.2c0,3.7-3,6.8-6.8,6.8h0c-3.7,0-6.8-3-6.8-6.8v-37.2H1006.3z"
        />
        <path
          className="st3"
          style={s.st3}
          d="M1033.4,289.7v64.6c0,3.7-3.1,6.8-6.8,6.8h0c-3.7,0-6.8-3-6.8-6.8v-64.6H1033.4z"
        />
        <path
          className="st3"
          style={s.st3}
          d="M1060.5,289.7v17.6c0,3.7-3.1,6.8-6.8,6.8h0c-3.7,0-6.8-3-6.8-6.8v-17.6H1060.5z"
        />
        <path
          className="st3"
          style={s.st3}
          d="M1087.6,289.7v6.2c0,3.7-3.1,6.8-6.8,6.8h0c-3.7,0-6.8-3-6.8-6.8v-6.2H1087.6z"
        />
        <path
          className="st2"
          style={s.st2}
          d="M931.7,254.4L931.7,254.4c3.7,0,6.8,3,6.8,6.8v28.6H925v-28.6C925,257.4,928,254.4,931.7,254.4z"
        />
        <path
          className="st2"
          style={s.st2}
          d="M958.8,276L958.8,276c3.7,0,6.8,3,6.8,6.8v6.9h-13.6v-6.9C952.1,279,955.1,276,958.8,276z"
        />
        <path
          className="st3"
          style={s.st3}
          d="M986,261.1L986,261.1c3.7,0,6.8,3,6.8,6.8v21.8h-13.6v-21.8C979.2,264.2,982.2,261.1,986,261.1z"
        />
        <path
          className="st3"
          style={s.st3}
          d="M1013.1,210.7L1013.1,210.7c3.7,0,6.8,3,6.8,6.8v72.3h-13.6v-72.3C1006.3,213.7,1009.3,210.7,1013.1,210.7z"
        />
        <path
          className="st3"
          style={s.st3}
          d="M1040.2,252.1L1040.2,252.1c3.7,0,6.8,3,6.8,6.8v30.8h-13.6v-30.8C1033.4,255.2,1036.4,252.1,1040.2,252.1z"
        />
        <path
          className="st3"
          style={s.st3}
          d="M1067.3,272.5L1067.3,272.5c3.7,0,6.8,3,6.8,6.8v10.5h-13.6v-10.5C1060.5,275.5,1063.6,272.5,1067.3,272.5z"
        />
        <path
          className="st3"
          style={s.st3}
          d="M1094.4,279.7L1094.4,279.7c3.7,0,6.8,3.1,6.8,6.8v3.2h-13.6v-3.2C1087.6,282.8,1090.7,279.7,1094.4,279.7z"
        />
      </g>
      <path
        className="st2"
        style={s.st2}
        d="M45.4,296.3c0,0.3,0.1,0.7,0.2,1.1c0.1,0.4,0.3,0.8,0.7,1.1l45.3,46.6h25.7l-48.9-52.6l40.4-45.1H87.2
	l-40.4,46.2c-0.5,0.7-0.9,1.1-1.1,1.3C45.5,295.2,45.4,295.6,45.4,296.3L45.4,296.3z M459.2,294.3v-16.8c0-5.6-1.2-10.6-3.7-14.9
	c-2.5-4.3-5.8-7.8-9.9-10.7c-4.1-2.8-8.6-4.9-13.7-6.4c-5-1.4-10.1-2.1-15.2-2.1h-32.7c-5.3,0-10.5,0.8-15.6,2.5
	c-5.1,1.7-9.7,4.1-13.7,7.3c-4,3.2-7.2,7.1-9.7,11.6c-2.4,4.5-3.7,9.5-3.7,15.1v14.3v14.3c0,5.5,1.2,10.6,3.7,15.1
	c2.4,4.5,5.7,8.4,9.7,11.6c4,3.2,8.6,5.6,13.7,7.3c5.1,1.7,10.3,2.5,15.6,2.5h32.7c5.1,0,10.2-0.7,15.2-2.1c5-1.4,9.6-3.5,13.7-6.4
	c4.1-2.8,7.4-6.4,9.9-10.7c2.5-4.3,3.7-9.3,3.7-14.9V294.3L459.2,294.3z M365.1,294.3c0.1-5.7,0.7-10.8,1.9-15.2
	c1.2-4.9,3.3-9.1,6.1-12.4c2.8-3.3,6.5-5.8,11-7.5c4.5-1.7,10.1-2.5,16.7-2.5c6.8,0,12.6,0.8,17.2,2.4c4.6,1.6,8.3,4.1,11.2,7.4
	c2.8,3.3,4.8,7.4,6,12.4c1.1,4.4,1.7,9.6,1.8,15.4c-0.1,5.8-0.7,10.9-1.8,15.4c-1.2,4.9-3.2,9.1-6,12.4c-2.8,3.3-6.5,5.8-11.2,7.4
	c-4.6,1.6-10.3,2.4-17.2,2.4c-6.6,0-12.2-0.8-16.7-2.5c-4.5-1.7-8.2-4.2-11-7.5c-2.8-3.3-4.9-7.4-6.1-12.4
	C365.8,305.1,365.2,300.1,365.1,294.3L365.1,294.3z M272.9,279.3c3.8-18.3,16.5-22.5,33.2-22.5c11.3,0,16.1,0.8,26.4,6.2v-15.1
	c0-1.4-70.8-18.2-82.2,24.7c-3.7,14-3.7,29.5,0,43.5c11.4,42.9,82.2,26.1,82.2,24.7v-15.1c-10.2,5.4-15.1,6.2-26.4,6.2
	c-16.7,0-29.4-4.2-33.2-22.5C270.8,299.5,270.8,289.2,272.9,279.3L272.9,279.3z M199.4,247.4h-11.8h-0.5h-29.8v16.3
	c8.8-2,17.8-3.4,29.2-3.6l1.6,0c1.9,28.3,1.4,56.7-1,85h0.5h0.4h11.4h11.4h0.4h0.5c-2.4-28.3-2.8-56.7-1-85l1.6,0
	c11.4,0.2,20.4,1.6,29.2,3.6v-16.3h-29.8h-0.5H199.4L199.4,247.4z M123.7,247.4H136h12.3c-3,32.6-2.7,65.1,0,97.7H136h-12.3
	C126.4,312.6,126.7,280,123.7,247.4L123.7,247.4z M21.3,247.4h12.3h12.3c-3,32.6-2.7,65.1,0,97.7H33.5H21.3
	C24,312.6,24.2,280,21.3,247.4z"
      />
    </svg>
  );
}
