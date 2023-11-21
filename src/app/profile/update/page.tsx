import UpdateForm from "@/components/updateForm/updateForm";
import styles from "./Update.module.scss";

export default async function Profile() {
  return (
    <>
      <div className={styles.update}>
        <UpdateForm />
      </div>
    </>
  );
}
