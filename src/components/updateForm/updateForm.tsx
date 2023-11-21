"use client";

import { FormEvent } from "react";
import styles from "./UpdateDate.module.scss";
import axios from "axios";
import { update } from "@/api/services/update.service";

export default async function UpdateForm() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const firstname: string = event.target[0].value;
    const secondname: string = event.target[1].value;
    const surname: string = event.target[2].value;
    const jobName: string = event.target[3].value;
    const description: string = event.target[4].value;
    const group: string = event.target[5].value;
    const cellNumber: string = event.target[6].value;

    console.log({
      firstname,
      secondname,
      surname,
      description,
      jobName,
      group,
      cellNumber,
    });

    update({
      firstname,
      secondname,
      surname,
      description,
      jobName,
      group,
      cellNumber,
    });
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputs}>
          <div>
            <h3 className={styles.name}>Firstname</h3>
            <input className={styles.input} type="text" />
          </div>

          <div>
            <h3 className={styles.name}>Secondname</h3>
            <input className={styles.input} type="text" />
          </div>

          <div>
            <h3 className={styles.name}>Surname</h3>
            <input className={styles.input} type="text" />
          </div>

          <div>
            <h3 className={styles.name}>jobName</h3>
            <input className={styles.input} type="text" />
          </div>

          <div>
            <h3 className={styles.name}>Description</h3>
            <input className={styles.input} type="text" />
          </div>

          <div>
            <h3 className={styles.name}>Group</h3>
            <input className={styles.input} type="text" />
          </div>
          <div>
            <h3 className={styles.name}>Cell number</h3>
            <input className={styles.input} type="text" />
          </div>

          <div>
            <h3 className={styles.name}>Profile photo</h3>
            <input className={styles.input} type="file" />
          </div>
        </div>
        <button className={styles.btn}>Update</button>
      </form>
    </div>
  );
}
