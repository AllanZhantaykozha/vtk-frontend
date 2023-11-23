"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Loading from "./Loading/Loading";
import { ProfileService } from "@/api/services/profile.service";
import { TeacherService } from "@/api/services/teacher.service";

const GetDetailTeacher = ({ id }: { id: number }) => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      return TeacherService.byId(id);
    },
  });

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : data ? (
        <div>
          <p>{data.login}</p>
          <p>
            {data.secondname} {data.firstname} {data.surname}
          </p>
          <Image
            src={`http://localhost:4200/api/media/${data.profilePhoto}`}
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

export default GetDetailTeacher;
