"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileLines = Array.from({ length: 3 });
  const mobileMenuRef = useRef<any>(null);

  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.add(styles.MobileOpen);
    } else {
      document.body.classList.remove(styles.MobileOpen);
    }

    return () => document.body.classList.remove(styles.MobileOpen);
  }, [mobileMenu]);

  const handleClickOutside = (event: any) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setMobileMenu(false);
    }
  };

  return (
    <>
      <div className={styles.HeaderContainer}>
        <h1 className={styles.HeaderLogo}>
          <Link href={"/"}>Super Todo App</Link>
        </h1>

        <div>
          <ul className={styles.HeaderContent}>
            {/* <li>
              <Link href={"/about-us"}>About Us</Link>
            </li> */}
            {/* <li>
              <Link href={"/contact"}>Contact</Link>
            </li> */}
            <li>
              <Link href={"/account"}>Your Account</Link>
            </li>
            <li>
              <Link href={"/new-account"}>Sign in</Link>{" "}
            </li>
            |
            <li>
              <Link href={"/login"}>login</Link>
            </li>
          </ul>

          <div className={styles.HamburgerMenu}>
            {mobileLines.map((_: any, idx: number) => {
              return (
                <div
                  key={idx}
                  onClick={() => setMobileMenu(true)}
                  className={styles.MobileLines}
                />
              );
            })}
          </div>
        </div>
      </div>
      {mobileMenu && (
        <div
          className={styles.MobileContainer}
          onClick={(e) => handleClickOutside(e)}
        >
          <div className={styles.MobileMenu} ref={mobileMenuRef}>
            <ul>
              <li>
                <Link href={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link href={"/account"}>Your Account</Link>
              </li>
              <li>
                <Link href={"/new-account"}>Sign-in</Link>{" "}
              </li>
              <li>
                <Link href={"/login"}>login</Link>
              </li>
            </ul>

            <div onClick={() => setMobileMenu(false)}>
              <X />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
