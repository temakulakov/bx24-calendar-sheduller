import React from 'react';
import styles from './Sections.module.scss';
import {useRecoilValue} from "recoil";
import {sectionsAtom} from "../../../store/atoms";
import {ISectionObject} from "../../../types/ApiTypes";


const renderSections = (array: Array<number | ISectionObject> = Array.from({length: 8}, (_, i) => i)): React.JSX.Element => (
    <>
        {array.map((section, index) => (
            <div className={styles.root} key={index}>
                {typeof section === 'number' ? section : section.NAME}
            </div>
        ))}
    </>
);

export default function Sections() {
    const sections = useRecoilValue(sectionsAtom);
    return <>
        {renderSections(sections)}
    </>
};