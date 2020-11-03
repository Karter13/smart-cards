import React from 'react'
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom';
import {AppRootStateType} from '../../../../../n1-main/m2-bll/store';
import {loginTC} from '../../l2-bll/auth-reducer';
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, TextField} from '@material-ui/core';
import style from './LoginForm.module.css';
import {RECOVER_PASSWORD, REGISTRATION} from '../../../../../n1-main/m1-ui/routes/Routes';
import styles from '../../../../../n1-main/m1-ui/header/Header.module.css';
import {RequestStatusType} from '../../../../../n1-main/m2-bll/app-reducer';
import {Preloader} from '../../../../../n1-main/m1-ui/common/Preloader/Preloader';

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = React.memo(() => {

    const error = useSelector<AppRootStateType, string | null>(state => state.auth.error);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);
     const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length <= 6) {
                errors.password = 'password must be more than 6 characters';
            }
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {
                dispatch(loginTC(values));
        },
    });

    if (status === 'loading') {
        return <Preloader/>
    }
    if (isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return <Grid container justify="center">
        <Grid item xs={4}>
            {error && <div style={{color: 'red'}}>{error.toString()}</div>}
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            {...formik.getFieldProps('password')}
                        />
                        {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox
                                {...formik.getFieldProps('rememberMe')}
                                checked={formik.values.rememberMe}
                            />}
                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                    </FormGroup>
                </FormControl>
            </form>
            <div className={style.link}>
                <NavLink to={RECOVER_PASSWORD} activeClassName={styles.activeLick}>fogot fassword?</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to={REGISTRATION} activeClassName={styles.activeLick}>register</NavLink>
            </div>
        </Grid>
    </Grid>
});
