"use client";

import GetDetailPost from "@/components/DetailPost";

export default function DetailPost({ params }: { params: { id: number } }) {
  return (
    <div>
      <GetDetailPost id={params.id} />
    </div>
  );
}
