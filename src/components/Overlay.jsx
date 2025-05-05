import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center ${
        props.right ? "items-end" : "items-start"
      } p-10`}
      style={{ opacity: props.opacity }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  opacity: PropTypes.number,
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });
  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hello I&lsquo;m Rahul
          </h1>
          <p className="text-gray-500 mb-1">
            Welcome to my beautiful portpolio
          </p>
          <span>I know:</span>
          <ul className="leading-9">
            <li>🧑‍💻 How to code</li>
            <li>🧑‍🏫 How to learn</li>
            <li>📦 How to deliver</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500">PS: I never test</p>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS</li>
            <li>Next JS</li>
            <li>ThreeJs</li>
            <li>Tailwind</li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9">
            <li>NodeJS</li>
            <li>Karavedl</li>
            <li>Python</li>
            <li>PostgreSQL</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            🤙 Call me maybe?
          </h1>
          <p className="text-gray-500">
            I&lsquo;m very expensive but you won&lsquo;t regret it
          </p>
          <div className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:+919447434618" className="mx-3 text-lg">+919447434618</a>
            <img
              src="../copy-regular.svg"
              style={{ height: "0.55cm" }}
              className="float-right p-0 m-0 cursor-pointer"
              alt="copy"
              //add onClick event to copy the number
              onClick={() => {
                navigator.clipboard.writeText("+919447434618");
                toast.success('Number copied to clipboard',{
                  position: 'top-right',
                })
              }}
            />
          </div>
        </Section>
      </div>
    </Scroll>
  );
};
