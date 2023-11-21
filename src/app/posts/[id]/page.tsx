import { PostService } from "@/api/services/post.service";
import { Image } from "next/dist/client/image-component";
import Link from "next/link";
import styles from "./Detail.module.scss";

export default async function DetailPost({
  params,
}: {
  params: { id: number };
}) {
  const data = await PostService.byId(params.id);

  console.log(data.teacher.profilePhoto);

  return (
    <div className={styles.wrapper}>
      {data ? (
        <div className={styles.post}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.teacher}>
            <Image
              className={styles.teacher_image}
              src={`http://localhost:4200/api/media/${data.teacher.profilePhoto}`}
              width={31}
              height={31}
              alt={data.title}
            />
            <Link
              className={styles.fullname}
              href={`../teachers/${data.teacher.id}`}
            >
              {data.teacher.login}
            </Link>
          </div>

          <Image
            className={styles.image}
            src={`http://localhost:4200/api/media/${data.photos[0]}`}
            width={600}
            height={600}
            alt={data.title}
          />

          <div className={styles.content}>{data.content}</div>
        </div>
      ) : (
        <>Post is not exists</>
      )}
    </div>
  );
}
