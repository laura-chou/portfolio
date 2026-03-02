"use client";

import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { CaretUpIcon, CaretDownIcon } from "@radix-ui/react-icons";

type ExperienceItemProps = {
  company: string;
  department: string;
  role: string;
  period: string;
  details: React.ReactNode;
};

export const ExperienceItem = ({ company, department, role, period, details }: ExperienceItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center w-full mb-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <Collapsible.Root open={open} onOpenChange={setOpen}>
          <div className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {company}
                  {department && <span className="block text-sm font-normal text-gray-500">{department}</span>}
                </h3>
                <p className="mt-1 text-orange-600 font-medium text-sm">
                  {role} <span className="text-gray-400 mx-2">|</span> {period}
                </p>
              </div>
              <Collapsible.Trigger asChild>
                <button
                  className="p-2 rounded-full hover:bg-orange-50 text-orange-600 transition-colors"
                  aria-label={open ? "收起" : "展開"}
                >
                  {open ? <CaretUpIcon className="w-6 h-6" /> : <CaretDownIcon className="w-6 h-6" />}
                </button>
              </Collapsible.Trigger>
            </div>

            <Collapsible.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wider">工作內容：</h4>
                <div className="text-gray-600 space-y-2 max-w-none text-sm leading-relaxed">
                  {details}
                </div>
              </div>
            </Collapsible.Content>
          </div>
        </Collapsible.Root>
      </div>
    </div>
  );
};
