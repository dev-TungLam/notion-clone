import React from "react";
import { GlassCard } from "../../ui/GlassCard";

export function TeamCard() {
  return (
    <GlassCard className="rounded-3xl relative flex flex-col justify-between h-[180px] group transition-all duration-300 hover:bg-white/10 hover:border-white/20">
      <GlassCard.Header className="p-0 border-none">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-white">My Team</h3>
            <p className="text-xs text-gray-400 font-medium mt-1 group-hover:text-gray-300 transition-colors">
              +9 Members
            </p>
          </div>
        </div>
      </GlassCard.Header>

      <GlassCard.Content className="p-0 flex items-center justify-end mt-4">
        <div className="flex -space-x-3">
          <img
            alt="Team member"
            className="w-10 h-10 rounded-full border-2 border-gray-800 shadow-md"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXYev4am1uz-0ys_Dl2S4lDfqumtxlSiPPEp5VaoRigHS_WQmVHCuLdLnDg66y09Cp8a8NCoGlRzZxP5HMLSKVqycQ5cxGCne-I177-O-b06g2FMruTy6lyiP-cGrh0bE5oVltXbMhh3A1vCyZZ2Fg0YKxpezWSQtZCSB6bj4G_eCKUTDwb6Eg0_6UD7Z_wCNVlz4gj7Odxrfmjzd9mq1NBvViGdUGasiILkJakeNSGh8WLWBvZ0ZsT5CcWXEmmskp-yIPWUIcKyJE"
          />
          <img
            alt="Team member"
            className="w-10 h-10 rounded-full border-2 border-gray-800 shadow-md"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBop-29cD_d06Sd9aBzIQdlOh7J28d2kMABBZARo9tXtW8Zq4Wj-7HRXWUXlRPxS8G-JvGDVhsoLChRA2LexUBjbXHNjGgJq_LQV176c7xK1O0-uEtEfh-10S4ukqyY2WtRpDpIBeQmAEK6sCtEYbjK9xn4lj4UxZNn4gbaV9lzePeBLT_eE2_zEUvgPWSb3r2bEXfm0E3XOHkMH1BzHt91ev8w4xR7QbO-g2LqFJ25VrNmUZJudII_5L7C9CS7VoaaBFU5QTkOSJDJ"
          />
          <img
            alt="Team member"
            className="w-10 h-10 rounded-full border-2 border-gray-800 shadow-md"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKHFdpWox3DDoA17F98Pz4ueEGNuiYUXdhPOJ3tWW8DBvL1s-eKCyOLGOwVhC0DLU0ldBYKLRncqq_1NJDwJVYAtALAkace5DIIklmid1nyWxBSKrguEkhI1XCMxkk8WqA1i00hPEuSwR33DkR0uzphcJ5w1C8rqt1sxMwHRFbDXW5wZCnt6Q0_jRPYe_teC1RiJMgpD5H-Q0G6CXu-lYY9uL-zgg1sl4ZPrsKadieIcSCu5tMmkaFPkDkXAcYLeQIwJHYO73wy6G_"
          />
        </div>
      </GlassCard.Content>
    </GlassCard>
  );
}
