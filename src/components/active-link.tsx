"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../helpers";

export interface ActiveLinkProps extends React.ComponentProps<typeof Link> {
  activeClassName?: string;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  activeClassName,
  href,
  ...props
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      {...props}
      href={href}
      className={cn(props.className, isActive && activeClassName)}
    />
  );
};
