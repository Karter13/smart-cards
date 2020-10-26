import React from 'react'
import styles from './PacksPage.module.css'
import {SimpleAction} from '../../../n2-faetures/f2-cardPacks/c1-packs/p1-ui/Packs1';

export const PacksPage = () => {
    return (
        <div>
            <div>PacksPage</div>
            <div className={styles.bodyTable}>
                <SimpleAction/>
            </div>

        </div>

    )
};
