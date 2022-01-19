import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { signIn } from '../../store/auth';
import Input from '../../ui/Input';
import Checkbox from '../../ui/Checkbox';
import Button from '../../ui/Button';
import s from './SignIn.module.css';

const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
}

const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(5),
    rememberMe: yup.boolean(),
});

const SignIn = () => {
    const signInRef = useRef(null);
    const dispatch = useDispatch();

    const onSubmit = async (values) => {
        await dispatch(signIn(values.email, values.password));
    };

    const formik = useFormik({ initialValues, onSubmit, validationSchema });
    const { values, errors, touched, getFieldProps, handleSubmit, handleChange, isSubmitting } = formik;

    const isValid = (fieldName) => {
        return !(touched[fieldName] && errors[fieldName]);
    }

    useEffect(() => {
        if (signInRef?.current?.focus) {
            signInRef.current.focus();
        }
    }, []);

    return (
        <main className={s.formSignIn}>
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating mb-3">
                    <Input
                        ref={signInRef}
                        valid={isValid('email')}
                        placeholder='name@example.com'
                        {...getFieldProps('email')}
                    />
                    <label>email</label>
                    {!isValid('email') && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="form-floating mb-3">
                    <Input
                        type="password"
                        placeholder="Password"
                        valid={isValid('password')}
                        {...getFieldProps('password')}
                    />
                    <label>password</label>
                    {!isValid('password') && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <div className="checkbox mb-3">
                    <Checkbox
                        name='rememberMe'
                        label='Remember me'
                        onChange={handleChange}
                        checked={values.rememberMe}
                    />
                </div>
                <Button type="submit" wide size='lg' disabled={isSubmitting}>
                    {isSubmitting
                        ? <span className='spinner-border spinner-border-sm'/>
                        : 'Sign in'
                    }
                </Button>
            </form>
        </main>
    )
};

export default SignIn;
