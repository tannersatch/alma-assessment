"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Checkbox from "../_components/Checkbox";
import Header from "../_components/Header";
import Icon from "../_components/Icon";
import styles from "./page.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormTypes = {
  firstName: string;
  lastName: string;
  email: string;
  linkedIn: string;
  resume: string;
  visaInterestList: (string | null | undefined)[];
  additionalInfo: string;
};

const validationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  linkedIn: yup.string().required(),
  resume: yup.string().required(),
  visaInterestList: yup.array().of(yup.string().nullable()).required(),
  additionalInfo: yup.string().required(),
});

export default function Assessment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<FormTypes> = (data) => console.log(data);

  return (
    <div className={styles.page}>
      <Header text={["Get An Assessment", "Of Your Immigration Case"]} />
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Icon name="info" />
          <h3>Want to understand your visa options?</h3>
          <p style={{ marginBottom: "2rem" }}>
            Submit the form below and our team of experienced attorneys will
            review your information and send a preliminary assessment of your
            case based on your goals.
          </p>

          <input
            placeholder="First Name"
            {...register("firstName", {
              required: true,
            })}
          />
          {errors.firstName && <span className={styles.error}>First Name is a required field</span>}

          <input
            placeholder="Last Name"
            {...register("lastName", {
              required: true,
            })}
          />
          {errors.lastName && <span className={styles.error}>Last Name is a required field</span>}
          
          <input
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && <span className={styles.error}>Email is a required field</span>}

          <input
            placeholder="LinkedIn Profile"
            {...register("linkedIn", {
              required: true,
            })}
          />
          {errors.linkedIn && <span className={styles.error}>LinkedIn Profile is a required field</span>}

          <input
            placeholder="Resume"
            {...register("resume", {
              required: true,
            })}
          />
          {errors.resume && <span className={styles.error}>Resume is a required field</span>}

          <Icon name="dice" style={{ marginTop: "2rem" }} />
          <h3>Visa categories of interest?</h3>
          <Checkbox label="O-1" />
          <Checkbox label="EB-1A" />
          <Checkbox label="EB-2 NIW" />
          <Checkbox label="I don't know" />

          <Icon name="heart" style={{ marginTop: "2rem" }} />
          <h3>How can we help you?</h3>
          <textarea
            placeholder="Additional Information"
            {...register("additionalInfo", {
              required: true,
            })}
          />
          {errors.additionalInfo && <span className={styles.error}>Additional Information is a required field</span>}

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}
