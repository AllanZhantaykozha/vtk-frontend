import axios from "axios";
import Link from "next/link";
import { cookies } from "next/headers";
import Image from "next/image";
import UpdateForm from "@/components/updateForm/updateForm";
import styles from "./Profile.module.scss";
import { ProfileService } from "@/api/services/profile.service";

export default async function Profile() {
  const data = await ProfileService.getMe();

  return (
    <>
      {data ? (
        <div>
          <div className={styles.profile}>
            <Image
              className={styles.profilePhoto}
              src={`http://localhost:4200/api/media/${data.profilePhoto}`}
              width={200}
              height={200}
              alt={data.login}
            />
            <div>
              <h1 className={styles.fullname}>
                {data.secondname} {data.firstname} {data.surname}
              </h1>
              <p>{data.description}</p>
              <p>{data.jobName}</p>
              <p>{data.group}</p>
              <div className={styles.cellNumbers}>
                {data.cellNumber
                  ? data.cellNumber.map((obj: string) => <p>{obj}</p>)
                  : null}
              </div>
            </div>
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
        <div>
          <h1>
            You don't <Link href={"/login"}>login</Link>
          </h1>
        </div>
      )}
    </>
  );
}
