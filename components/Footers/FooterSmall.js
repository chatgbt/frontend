import React from "react";
import Logo from "../Logo/Logo";
import {
  OPENSEA_URL
} from '../../config';

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-slate-800"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm  font-semibold py-1 text-center md:text-left">
                <span className="text-slate-500">
                  Copyright © {new Date().getFullYear()}{" "}
                </span>
                <a
                  href="/"
                  className="hover:font-bold text-sm font-semibold py-1"
                >
                  <Logo weight="500" />
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="/"
                    className="hover:font-bold text-sm font-semibold py-1"
                  >
                    <Logo weight="500" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-small"
                    className="text-white hover:text-slate-300 text-sm font-semibold block py-1 px-3"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
