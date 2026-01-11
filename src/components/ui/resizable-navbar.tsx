"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import React, { useRef, useState } from "react";
import logo from "@/assets/nyaya-alamban-logo-transparent.png";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "none",
        boxShadow: visible
          ? "0 4px 30px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.05)"
          : "none",
        width: visible ? "85%" : "100%",
        y: visible ? 16 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-6 py-3 lg:flex",
        visible && "bg-background/95 border border-border/50",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-row items-center justify-center gap-1 text-sm font-medium lg:flex",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={cn(
            "relative px-4 py-2 rounded-lg transition-colors duration-200",
            isActive(item.link)
              ? "text-primary font-semibold"
              : "text-muted-foreground hover:text-foreground"
          )}
          key={`link-${idx}`}
        >
          {hovered === idx && (
            <motion.div
              layoutId="navbar-hovered"
              className="absolute inset-0 h-full w-full rounded-lg bg-muted"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          {isActive(item.link) && (
            <motion.div
              layoutId="navbar-active"
              className="absolute inset-0 h-full w-full rounded-lg bg-primary/10"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "none",
        boxShadow: visible
          ? "0 4px 30px rgba(0, 0, 0, 0.1)"
          : "none",
        width: visible ? "95%" : "100%",
        paddingRight: visible ? "16px" : "16px",
        paddingLeft: visible ? "16px" : "16px",
        borderRadius: visible ? "16px" : "0px",
        y: visible ? 12 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent py-3 lg:hidden",
        visible && "bg-background/95 border border-border/50",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between px-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          className={cn(
            "absolute inset-x-0 top-full z-50 mt-2 flex w-full flex-col items-start justify-start gap-2 rounded-2xl bg-card px-4 py-6 shadow-xl border border-border/50",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg hover:bg-muted transition-colors"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <X className="h-6 w-6 text-foreground" />
      ) : (
        <Menu className="h-6 w-6 text-foreground" />
      )}
    </button>
  );
};

export const NavbarLogo = ({ visible }: { visible?: boolean }) => {
  return (
    <Link
      to="/"
      className="relative z-20 flex items-center gap-3 group"
    >
      <motion.img
        src={logo}
        alt="Nyaya Alamban Logo"
        animate={{
          height: visible ? 40 : 52,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="w-auto"
      />
      <div className="hidden sm:flex flex-col">
        <span className="font-serif text-lg font-bold text-foreground leading-tight">
          Nyaya Alamban
        </span>
        <span className="text-[9px] text-muted-foreground font-medium tracking-[0.2em] uppercase leading-tight">
          In Law We Trust
        </span>
      </div>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = Link,
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
} & Record<string, any>) => {
  const baseStyles =
    "px-5 py-2.5 rounded-full text-sm font-semibold relative cursor-pointer transition-all duration-300 inline-flex items-center justify-center gap-2";

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary: 
      "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted",
    accent:
      "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
  };

  const linkProps = Tag === Link ? { to: href } : { href };

  return (
    <Tag
      {...linkProps}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};