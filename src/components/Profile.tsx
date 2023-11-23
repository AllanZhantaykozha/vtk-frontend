"use client";

import { TeacherService } from "@/api/services/teacher.service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Loading from "./Loading/Loading";
import { ProfileService } from "@/api/services/profile.service";

const Profile = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      return ProfileService.getMe();
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
          {data.isAdmin ? <>YOU ARE ADMIN</> : null}
        </div>
      ) : (
        <div>teachers not found</div>
      )}
    </div>
  );
};

export default Profile;
