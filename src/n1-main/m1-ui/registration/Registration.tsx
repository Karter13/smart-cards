import React from 'react';
import {useFormik} from "formik";
import {registerTC} from "../../m2-bll/registration-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import {Redirect} from 'react-router-dom';
import {Preloader} from "../common/Preloader/Preloader";

const validate = (values: any) => {
    const errors: any = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length <= 3) {
        errors.password = 'Must be at least 3 characters';
    } else if (values.password.length > 100) {
        errors.password = 'Must be not more than 100 characters';
    }

    return errors;
};



export const Registration = React.memo(() => {

    const dispatch = useDispatch();
    const isError = useSelector<AppRootStateType>(state => state.registration.isError);
    const isRegistered = useSelector<AppRootStateType>(state => state.registration.isRegistered);
    const isFetching = useSelector<AppRootStateType>(state => state.registration.isFetching);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            const {email, password} = values;
            dispatch(registerTC(email, password));
        },
    });
console.log(isFetching)
    debugger;
    if(isFetching && !isRegistered && !isError){
        return <Preloader/>;
    }
    if(isError && !isFetching) {
        return <div>Error!</div>;
    }

    if(isRegistered && !isFetching) {
        return <Redirect to={'login'}/>;
    }

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={formik.handleSubmit}>
                <ul>
                    <li><input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    /> <label htmlFor="email">Email Address</label>
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </li>
                    <li><input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    /> <label htmlFor="password">Password</label>
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                    </li>
                </ul>
                        <button type="submit" disabled={!!isFetching}>Submit</button>
            </form>
        </div>
    )
});
