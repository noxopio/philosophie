/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './TextSidebar.module.scss';

const TextSidebar = () => {


    return (
        <>
            <aside className={`${styles.sidebar}`}>
                <h1 className={styles.title}>

                    PHILOSOPHIE
                </h1>
            </aside>
        </>
    );
};

export { TextSidebar };
