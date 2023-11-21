import { PostService } from "@/api/services/post.service";
import { Image } from "next/dist/client/image-component";

export default async function Posts() {
  const data = await PostService.getAll();

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
          <div>
            <Image
              src={`http://localhost:4200/api/media/${obj.photos[0]}`}
              width={600}
              height={600}
              alt={obj.title}
            />
            <h1 style={{ fontSize: 25 }}>{obj.title}</h1>
            <p>{obj.content}</p>
            <p>{obj.teacher.login}</p>
          </div>
        ))
      ) : (
        <>Posts not found</>
      )}
    </div>
  );
}
