"use client";
import { ArrowDownIcon, ArrowUpIcon } from "@/icons";
import { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
interface CustomDropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  classname?: string;
}
export default function CustomDropdown({
  trigger,
  classname,
  children,
}: CustomDropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (open) setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 text-text1 hover:text-primary whitespace-nowrap"
      >
        {trigger}
        {open ? (
          <ArrowUpIcon />
        ) : (
          <ArrowDownIcon />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 1 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3}}
            className={clsx("absolute mt-[18px] z-50 shadow-custom-1 w-fit rounded-b-lg" ,classname) }
            onClick={() => setOpen(false)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
