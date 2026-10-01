"use client";

import { User } from "lucide-react";

import { ACCOUNT_LINKS } from "@/data/navigation";

import NavDropdown from "./NavDropdown";

// Shared by the account dropdown and the phone menu
export function AccountActions() {
  return (
    <div>
      <p className="text-base font-semibold">Get More with a WTC Account</p>
      <div className="mt-4 flex flex-col gap-2">
        <a
          href={ACCOUNT_LINKS.signIn}
          className="rounded-lg bg-brand py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Sign in
        </a>
        <a
          href={ACCOUNT_LINKS.createAccount}
          className="rounded-lg py-2.5 text-center text-sm font-medium text-brand ring-1 ring-brand transition-colors hover:bg-brand/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Create account
        </a>
      </div>
    </div>
  );
}

type AccountMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
};

export default function AccountMenu(props: AccountMenuProps) {
  return (
    <NavDropdown
      {...props}
      id="account-menu"
      label="Account"
      Icon={User}
      panelClassName="p-5 sm:w-72"
    >
      <AccountActions />
    </NavDropdown>
  );
}
