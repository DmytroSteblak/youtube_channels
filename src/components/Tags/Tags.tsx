import React from "react";
import "./Tags.scss"
import {ITag} from "../../models"
import {ETagGroup} from "../../enums";
import classnames from "classnames"

interface IProps {
    tags: ITag[];
    activeTags: ITag[];
    onSetActiveTags: (tags: ITag[]) => void
}


export const Tags: React.FC<IProps> = ({tags, activeTags, onSetActiveTags}) => {
    const frontendTags: React.ReactNodeArray = [];
    const backEndTags: React.ReactNodeArray = [];
    const designTags: React.ReactNodeArray = [];
    const commonTags: React.ReactNodeArray = [];

    const tagItem = (tag: ITag) => {
        const active = activeTags.indexOf(tag) > -1
        const onTagClick = () =>{
            if (active){
                const newValue = activeTags.filter((item)=>item.value !== tag.value)
                onSetActiveTags(newValue)
            }else {
                onSetActiveTags([
                    ...activeTags,
                    tag
                ])
            }
        }
        return (
            <div className="tag_item" key={tag.value}>
                <button className={classnames("tag_item_button",{"tag_item_button_active": active})} onClick={onTagClick}>
                    {tag.displayValue}
                </button>
            </div>
        )
    }


    tags.forEach((tag: ITag) => {
        switch (tag.group) {
            case ETagGroup.FRONTEND:
                frontendTags.push(tagItem(tag))
                break;
            case ETagGroup.BACKEND:
                backEndTags.push(tagItem(tag))
                break;
            case ETagGroup.DESIGN:
                designTags.push(tagItem(tag))
                break;
            case ETagGroup.COMMON:
                commonTags.push(tagItem(tag))
                break;
        }
    })
    return (
        <div className="tags_list">
            <div className="tags_list_group">
                <div className="tags_list_group_title">
                    Frontend
                </div>
                <div className="tags_list_group_content">
                    <div className="tag_item">
                        {frontendTags}
                    </div>
                </div>
            </div>
            <div className="tags_list_group">
                <div className="tags_list_group_title">
                    Backend
                </div>
                <div className="tags_list_group_content">
                    <div className="tag_item">
                        {backEndTags}
                    </div>
                </div>
            </div>
            <div className="tags_list_group">
                <div className="tags_list_group_title">
                    Designer
                </div>
                <div className="tags_list_group_content">
                    <div className="tag_item">
                        {designTags}
                    </div>
                </div>
            </div>
            <div className="tags_list_group">
                <div className="tags_list_group_title">
                    Common
                </div>
                <div className="tags_list_group_content">
                    <div className="tag_item">
                        {commonTags}
                    </div>
                </div>
            </div>
        </div>
    );
}