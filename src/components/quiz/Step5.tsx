import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactSlider from "react-slider";
import { setStep, setPrice, setValidations } from "../../redux/quizReducer";
import "./../../index.css";
import styles from "./Quiz.module.css";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import henryV from "./../../images/henry-v.png";

const validations = ["חנייה", "מרפסת", "ממד"];

function validateNumber(value: string) {
  let error;
  if (!value) {
    error =
      "למה להתבייש? הגדרת התקציב חשובה למטרותינו. לא לדאוג - אני לא אספר לאיש";
  }
  return error;
}

const FourthStep = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full relative ">
      <Formik
        initialValues={{
          vals: [],
          minPrice: "",
          maxPrice: "",
        }}
        onSubmit={(values: any) => {
          console.log(values);
          dispatch<any>(setPrice([values.minPrice, values.maxPrice]));
          dispatch<any>(setValidations(values.vals));
          dispatch<any>(setStep(6));
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <div className="flex flex-col">
              <h1 className="text-center text-lg mb-5">תקציב</h1>
              <div className={styles.priceWrap}>
                <div className={styles.formPriceWrapper}>
                  <p className={styles.formPriceTitle}>מ</p>
                  <Field
                    className={styles.formPrice}
                    name="minPrice"
                    validate={validateNumber}
                  />
                </div>
                <div className={styles.formPriceWrapper}>
                  <p className={styles.formPriceTitle}>עד</p>
                  <Field
                    className={styles.formPrice}
                    name="maxPrice"
                    validate={validateNumber}
                  />
                </div>
              </div>
              <div className="text-regal-red md:text-lg text-sm text-center ">
                {(errors.maxPrice && touched.maxPrice && (
                  <div>{errors.minPrice}</div>
                )) ||
                  (errors.minPrice && touched.minPrice && (
                    <div>{errors.minPrice}</div>
                  ))}
              </div>
              <div className="flex">
                <div className="md:mt-16 mt-7 flex text-regal-blue justify-center w-1/2">
                  <div>
                    {validations.map((val) => (
                      <div>
                        <div className="md:text-lg text-md flex">
                          <Field
                            className="mr-5"
                            name="vals"
                            type="checkbox"
                            value={val}
                          />
                          <p className={styles.formCheckboxTitle}>{val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-1/2 flex justify-center">
                  <img
                    className="md:w-60 md:h-60 w-36 h-36"
                    src={henryV}
                    alt="henry-image5"
                  />
                </div>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.backButton}
                onClick={() => {
                  dispatch<any>(setStep(4));
                }}
              >
                <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                חזור
              </button>
              <button className={styles.button} type="submit">
                להמשיך
                <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FourthStep;
