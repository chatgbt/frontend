import React from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
export default function Navbar({ data, remaining }) {
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 pt-1 pb-2 navbar-expand-lg bg-zinc-900 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-auto relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <p className="text-md font-bold leading-relaxed inline-block mr-4 py-0 whitespace-nowrap uppercase">
                <Logo weight={600} />
              </p>

            </Link>

          </div>
          <div
            className={
              "flex flex-grow items-center bg-slate-900 bg-opacity-0 shadow-none"
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-row list-none mr-auto">    
              <li className="flex items-center">
                
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-rose-500 text-slate-300 px-2 py-2 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/chatgbt/frontend"
                  target="_blank"
                >
                  <i className="text-rose-500 fab fa-github text-lg leading-lg pb-1 mr-1" />
                  Code
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
