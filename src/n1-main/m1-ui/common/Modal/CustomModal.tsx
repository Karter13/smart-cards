import React, {useState, FC} from "react";
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import styles from './CustomModal.module.css';
import {useFormik} from "formik";
import {registerTC} from "../../../../n2-faetures/f1-auth/a2-register/r2-bll/register-reducer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

type ModalDescriptionType = {
    title: string;
    value?: string;
}

type PropsType = {
    heading: string;
    fields: Array<ModalDescriptionType>;
    showModal: boolean;
    callback?: (a?: any, b?: any) => any;
    isEditFields?: boolean;
    isClientError?: boolean;
    isServerError?: boolean;
    packId?: string;
}

export const CustomModal: FC<PropsType> = ({
                                               showModal, heading, callback,
                                               fields, isClientError,
                                               isEditFields, isServerError, packId
                                           }) => {
    const initialValues: any = {};

    fields.forEach(({title, value}) => initialValues[title] = value)

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            console.log(values)
            if (callback) {
                packId ? callback(packId, values) : values? callback(values) : callback();
            }
        },
    });

    const classes = useStyles();
    const [open, setOpen] = useState(showModal);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                react-transition-group
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">{heading}</h2>

                        {!isEditFields ? fields.map(({title, value}) => <p><span>{title}</span> {value}</p>) :
                            <form onSubmit={formik.handleSubmit}>
                                {
                                    fields.map(({title, value}) => <p><span>{title}</span> <textarea
                                        id={title}
                                        name={title}
                                        value={formik.values[title]}
                                        onChange={formik.handleChange}
                                    /></p>)
                                }
                                <button type={"submit"} onClick={handleClose}>Save</button>
                            </form>
                        }
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
