import { TeacherService } from "@/api/services/teacher.service";
import Image from "next/image";

export default async function Teachers() {
  const data = await TeacherService.getAll();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {data ? (
        data.map((obj: any) => (
          <div
            style={{
              width: 400,
              height: 500,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "#a6a4a4",

              marginBottom: 30,
              paddingLeft: 30,
              paddingTop: 30,
            }}
          >
            <Image
              style={{ borderRadius: 30 }}
              src={`http://localhost:4200/api/media/${obj.profilePhoto}`}
              width={325}
              height={200}
              alt={obj.title}
            />
            <h1>
              {obj.secondname} {obj.firstname} {obj.surname}
            </h1>
            <p>{obj.login}</p>
          </div>
        ))
      ) : (
        <>Teachers not found</>
      )}
    </div>
  );
}
