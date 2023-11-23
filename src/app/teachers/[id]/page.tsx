"use client";

import GetDetailTeacher from "@/components/DetailTeacher";

export default function DetailTeacher({ params }: { params: { id: number } }) {
  return (
    <div>
      <GetDetailTeacher id={params.id} />
    </div>
  );
}
