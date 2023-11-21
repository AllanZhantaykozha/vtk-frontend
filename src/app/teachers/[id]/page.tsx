import { TeacherService } from "@/api/services/teacher.service";
import axios from "axios";
import { Image } from "next/dist/client/image-component";

export default async function DetailTeacher({
  params,
}: {
  params: { id: number };
}) {
  const data = await TeacherService.byId(params.id);

  return (
    <div>
      {data ? (
        <div>
          <Image
            src={`http://localhost:4200/api/media/${data.profilePhoto}`}
            width={200}
            height={200}
            alt={data.login}
          />
          <h1>
            {data.secondname} {data.firstname} {data.surname}
          </h1>
          <p>{data.description}</p>
          <p>{data.jobName}</p>
          <p>{data.group}</p>
          <div>
            {data.cellNumber
              ? data.cellNumber.map((obj: string) => <p>{obj}</p>)
              : null}
          </div>
          <div>
            {data.posts ? (
              data.posts.map((obj: any) => (
                <div>
                  <p>{obj.id}</p>
                  {obj.photos
                    ? obj.photos.map((photo: any) => (
                        <Image
                          src={`http://localhost:4200/api/media/${photo}`}
                          alt={"photo"}
                          width={500}
                          height={500}
                        />
                      ))
                    : null}
                  <p>{obj.title}</p>
                  <p>{obj.content}</p>
                </div>
              ))
            ) : (
              <div>Нет постов</div>
            )}
          </div>
        </div>
      ) : (
        <>Teacher is not exists</>
      )}
    </div>
  );
}
