import { useAppSelector } from '@hooks/app';
import style from './HeadingTitle.module.css';
import { ReactNode } from 'react';
const { headingContainer, arabic } = style;
const HeadingTitle = ({ children }: { children: ReactNode }) => {
    const { language } = useAppSelector(state => state.language);
    return (
        <div className={language === 'English' ? `${headingContainer}` : `${headingContainer} ${arabic}`}>
            <h2>{children}</h2>
        </div>
    )
}

export default HeadingTitle
