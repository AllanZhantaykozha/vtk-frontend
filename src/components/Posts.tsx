"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Loading from "./Loading/Loading";
import { PostService } from "@/api/services/post.service";

const GetPosts = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return PostService.getAll();
    },
  });

  console.log(data);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : data ? (
        data.map((obj: any) => (
          <div>
            <h1>{obj.title}</h1>
            <p>{obj.content}</p>
            <p>
              {obj.teacher.secondname} {obj.teacher.firstname}{" "}
              {obj.teacher.surname}
            </p>
            <Image
              src={`http://localhost:4200/api/media/${obj.photos[0]}`}
              width={500}
              height={500}
              alt={obj.login}
            />
          </div>
        ))
      ) : (
        <div>Posts not found</div>
      )}
    </div>
  );
};

export default GetPosts;
