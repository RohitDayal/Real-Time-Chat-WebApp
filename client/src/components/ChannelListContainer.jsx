import React from 'react';
import {ChannelList,useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import {ChannelSearch, TeamChannelList,TeamChannelPreview} from './';
import ChatIcon from '../assets/Chat_Icon.png'
import LogoutIcon from '../assets/Logout2.png'
const cookies = new Cookies();

const SideBar=({ logout })=>(
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon2__inner'>
                <img src={ChatIcon} alt ="ChatIcon" width="30" />
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon2__inner' onClick={logout}>
                <img src={LogoutIcon} alt ="Logout" width="30" />
            </div>
        </div>
    </div>
)
const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Chat Online</p>
    </div>
)
const ChannelListContainer = ({isCreating,setIsCreating,setCreateType,setIsEditing}) => {
    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
    }
  return (
<>
    <SideBar logout={logout} />
    <div className='channel-list__list__wrapper'>
        <CompanyHeader/>
        <ChannelSearch/>
        <ChannelList
        filters={{}}
        channelRenderFilterFn={()=>{}}
        List={(listProps)=>(
            <TeamChannelList
            {...listProps}
            type="team"
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
            />
        )}
        Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            // setIsCreating={setIsCreating}
                            // setIsEditing={setIsEditing}
                            // setToggleContainer={setToggleContainer}
                            type="team"
                        />
                    )}
        />
        <ChannelList
        filters={{}}
        channelRenderFilterFn={()=>{}}
        List={(listProps)=>(
            <TeamChannelList
            {...listProps}
            type="messaging"
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
            />
        )}
        Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            // setIsCreating={setIsCreating}
                            // setIsEditing={setIsEditing}
                            // setToggleContainer={setToggleContainer}
                            type="messaging"
                        />
                    )}
        />
    </div>

</>
  )
};

export default ChannelListContainer;