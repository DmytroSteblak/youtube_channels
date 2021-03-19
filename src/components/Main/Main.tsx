import React, {useState} from 'react';
import {ETagGroup} from "../../enums"
import {Tags} from "../Tags/Tags";
import {Channels} from "../Channels/Channels";
import {IChannel, ITag} from "../../models";



const DATA_TAGS:ITag[] = [
    {
        group: ETagGroup.FRONTEND,
        value: "html",
        displayValue: "HTML"
    },
    {
        group: ETagGroup.FRONTEND,
        value: "css",
        displayValue: "CSS"
    },
    {
        group: ETagGroup.FRONTEND,
        value: "javascript",
        displayValue: "JavaScript"
    },
    {
        group: ETagGroup.DESIGN,
        value: "sketch",
        displayValue: "Sketch"
    },
    {
        group: ETagGroup.BACKEND,
        value: "java",
        displayValue: "Java"
    },
    {
        group: ETagGroup.COMMON,
        value: "interview",
        displayValue: "Interview"
    }
]
const DATA_CHANNELS: IChannel[] = [
    {
        name: "Просто разработка",
        link: "http://www.google.com",
        tags: [
            {
                group: ETagGroup.FRONTEND,
                value: "html",
                displayValue: "HTML"
            },
            {
                group: ETagGroup.FRONTEND,
                value: "css",
                displayValue: "CSS"
            },
            {
                group: ETagGroup.FRONTEND,
                value: "javascript",
                displayValue: "JavaScript"
            },
        ],
    },
    {
        name: "senior software vlogger",
        link: "http://www.google.com",
        tags: [
            {
                group: ETagGroup.FRONTEND,
                value: "javascript",
                displayValue: "JavaScript"
            },
        ],
    },
    {
        name: "АйТиБорода",
        link: "http://www.google.com",
        tags: [
            {
                group: ETagGroup.COMMON,
                value: "interview",
                displayValue: "Interview"
            }
        ],
    },
]


const Main: React.FC = () => {

    const [activeTags, setActiveTags] = useState<ITag[]>([])

    const filterData = (channelsArray: IChannel[]) =>{
        return channelsArray.filter((channel) =>{
            return activeTags.every((activeTag)=>{
                return channel.tags.some((channelTag)=>{
                    return JSON.stringify(activeTag) === JSON.stringify(channelTag)
                })
            })
        })
    }
    const channels = activeTags.length ? filterData(DATA_CHANNELS) : DATA_CHANNELS;
  return (
    <div className="App">
          <Tags tags={DATA_TAGS}
                activeTags={activeTags}
                onSetActiveTags={setActiveTags}/>
          <Channels channels={channels}/>
    </div>
  );
}

export default Main;
