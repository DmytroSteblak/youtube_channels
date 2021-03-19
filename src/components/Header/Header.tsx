import React, {useEffect, useState} from 'react';
import "./Header.scss"
import {IAdmin, ITag} from "../../models";
import {ETagGroup} from "../../enums";

const DATA_ADMINS: IAdmin[] = [
    {telegramId: "howdyho_official"},
    {telegramId: "proglibrary"},
    {telegramId: "nuancesprog"}

]

const Header: React.FC = () => {
    // const [items, setItems] = useState<IAdmin[]>([]);
    // let admins = null;
    // useEffect(() => {
    //     fetch("обещали API( но пока нет( ")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //
    //                 setItems(result);
    //             },
    //
    //         )
    // }, [])


    return (
        <div className="app_header">
            <div className="app_header_col_left">
                <h1>№ITYouTube</h1>
                <h2>Сообщество русскоязычных ютуберов </h2>
            </div>
            <div className="app_header_col_right">
                По вопросам вступления обращайтесь в телеграм: <br/>
                {
                    DATA_ADMINS.map((admin,index) => (
                        <React.Fragment key={admin.telegramId}>
                            <a className="link_admin"
                               target="_blank"
                               href={`https://tmtr.me/${admin.telegramId}`}>{`@${admin.telegramId}`}</a>
                            {index + 1 === DATA_ADMINS.length ? "" : ", "}
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
}

export default Header;
