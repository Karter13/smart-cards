import React, {memo} from "react";

import styles from './RecoverPasswordPage.module.css';
import {useFormik} from "formik";
import {registerTC} from "../../../a2-register/r2-bll/register-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../n1-main/m2-bll/store";
import {recoverTC} from "../../rec2-bll/recover-password-reducer";
import {Preloader} from "../../../a2-register/r1-ui/Preloader/Preloader";
import {Redirect} from "react-router-dom";

const validate = (values: any) => {
    const errors: any = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};


export const RecoverPasswordPage = memo(() => {

    const dispatch = useDispatch();
    const isError = useSelector<AppRootStateType>(state => state.recoverPassword.isError);
    const isFetching = useSelector<AppRootStateType>(state => state.recoverPassword.isFetching);
    const isAccepted = useSelector<AppRootStateType>(state => state.recoverPassword.isAccepted);

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate,
        onSubmit: values => {
            const {email} = values;
            dispatch(recoverTC(email));
        },
    });

    if(isFetching && !isAccepted && !isError){
        return <Preloader/>;
    }
    if(isError && !isFetching) {
        return <div>Error!</div>;
    }

    if(isAccepted && !isFetching) {
        return <Redirect to={'newPass'}/>;
    }

        return (
            <>
                <h1>Recover Password</h1>
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
                    </ul>
                    <button type="submit" disabled={!!isFetching}>Submit</button>
                </form>
            </>
        )
    }
)
