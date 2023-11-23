"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Loading from "./Loading/Loading";
import { PostService } from "@/api/services/post.service";

const GetDetailPost = ({ id }: { id: number }) => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      return PostService.byId(id);
    },
  });

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : data ? (
        <div>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
          <p>
            {data.teacher.secondname} {data.teacher.firstname}{" "}
            {data.teacher.surname}
          </p>
          <Image
            src={`http://localhost:4200/api/media/${data.photos[0]}`}
            width={500}
            height={500}
            alt={data.login}
          />
        </div>
      ) : (
        <div>teachers not found</div>
      )}
    </div>
  );
};

export default GetDetailPost;
