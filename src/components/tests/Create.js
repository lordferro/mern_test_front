import axios from 'axios';
import Button from 'components/Button/Button';
import { Field, FieldArray, Formik } from 'formik';
import Notiflix from 'notiflix';
import { useNavigate } from 'react-router';

const initialValues = {
  title: '',
  description: '',
  questions: [{ question: '', answers: [{ variant: '', correct: '' }] }],
};

export const Create = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Create your test</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          await axios.post('/test', values);
          Notiflix.Notify.success('Test created');
          navigate('..', { relative: 'path' });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <label style={{ display: values.title ? 'block' : 'none' }}>
                Title
              </label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                name="description"
                placeholder="Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <label style={{ display: values.description ? 'block' : 'none' }}>
                Description
              </label>
            </div>
            <FieldArray name="questions">
              {({ insert, remove, push }) => (
                <div>
                  {console.log(values)}
                  {values.questions.length > 0 &&
                    values.questions.map((question, index) => (
                      <div key={index}>
                        <div>
                          <label htmlFor={`questions.${index}.question`}>
                            Question
                          </label>
                          <Field
                            name={`questions.${index}.question`}
                            type="text"
                          />
                        </div>
                        <FieldArray name={`questions.${index}.answers`}>
                          {({ insert, remove, push }) => (
                            <div
                              style={{ display: 'flex', alignItems: 'center' }}
                            >
                              {question.answers.length > 0 &&
                                question.answers.map((answer, subIndex) => (
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                    }}
                                    key={subIndex}
                                  >
                                    <div>
                                      <label
                                        htmlFor={`questions.${index}.answers.${subIndex}.variant`}
                                      >
                                        variant:
                                      </label>
                                      <Field
                                        name={`questions.${index}.answers.${subIndex}.variant`}
                                        type="text"
                                      />
                                    </div>
                                    <div>
                                      <label
                                        htmlFor={`questions.${index}.answers.${subIndex}.correct`}
                                      >
                                        is it correct: true or false
                                      </label>
                                      <Field
                                        name={`questions.${index}.answers.${subIndex}.correct`}
                                        type="text"
                                      />
                                    </div>

                                    <div>
                                      <Button
                                        type="button"
                                        onClick={() => remove(subIndex)}
                                      >
                                        X
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                              <Button
                                type="button"
                                onClick={() =>
                                  push({ variant: '', correct: '' })
                                }
                              >
                                Add variant
                              </Button>
                            </div>
                          )}
                        </FieldArray>
                        <div>
                          <Button type="button" onClick={() => remove(index)}>
                            X
                          </Button>
                        </div>
                      </div>
                    ))}
                  <Button
                    type="button"
                    onClick={() =>
                      push({
                        question: '',
                        answers: [{ variant: '', correct: '' }],
                      })
                    }
                  >
                    Add Question
                  </Button>
                </div>
              )}
            </FieldArray>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};
