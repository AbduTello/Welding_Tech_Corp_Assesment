"use client";

import { User } from "lucide-react";

import { ACCOUNT_LINKS } from "@/data/navigation";

import NavDropdown from "./NavDropdown";
import { BUTTON, BUTTON_PRIMARY } from "./styles";

// Shared by the account dropdown and the phone menu
export function AccountActions() {
  return (
    <div>
      <p className="font-heading text-lg font-medium">
        Get More with a WTC Account
      </p>
      <div className="mt-4 flex flex-col gap-2">
        <a href={ACCOUNT_LINKS.signIn} className={BUTTON_PRIMARY}>
          Sign in
        </a>
        <a
          href={ACCOUNT_LINKS.createAccount}
          className={`${BUTTON} text-brand ring-1 ring-brand hover:bg-brand/5 focus-visible:outline-navy`}
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
