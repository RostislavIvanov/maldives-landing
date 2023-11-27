import classes from './Excursions.module.css'
import BlockTitle from "../../components/UI/BlockTitle/BlockTitle.tsx";

const Excursions = () => {
    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <div className={classes.titleWrapper}>
                    <BlockTitle>Экскурсии</BlockTitle>
                </div>

                <div className={'flex justify-between'}>
                    <div>
                        <img src="" alt=""/>
                        <div>Lorem ipsum dolor</div>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <div>Lorem ipsum dolor</div>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <div>Lorem ipsum dolor</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Excursions;
