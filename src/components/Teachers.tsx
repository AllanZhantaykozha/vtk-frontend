"use client";

import { TeacherService } from "@/api/services/teacher.service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Loading from "./Loading/Loading";

const GetTeachers = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      return TeacherService.getAll();
    },
  });

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : data ? (
        data.map((obj: any) => (
          <div>
            <p>{obj.login}</p>
            <p>
              {obj.secondname} {obj.firstname} {obj.surname}
            </p>
            <Image
              src={`http://localhost:4200/api/media/${obj.profilePhoto}`}
              width={500}
              height={500}
              alt={obj.login}
            />
          </div>
        ))
      ) : (
        <div>teachers not found</div>
      )}
    </div>
  );
};

export default GetTeachers;
