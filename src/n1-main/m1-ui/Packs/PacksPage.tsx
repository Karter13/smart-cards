import React from 'react'
import styles from './PacksPage.module.css'
import {PacksContainer} from '../../../n2-faetures/f2-cardPacks/c1-packs/p1-ui/PacksContainer';

export const PacksPage = () => {
    return (
        <div>
            <div>PacksPage</div>
            <div className={styles.bodyTable}>
                <PacksContainer/>
            </div>
        </div>
    )
};
