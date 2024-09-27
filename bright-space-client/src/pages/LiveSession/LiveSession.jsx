import { Box } from "@chakra-ui/react";
import { JaaSMeeting } from "@jitsi/react-sdk";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const LiveSession = () => {
    const [roomName, setRoomName] = useState('');
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    // console.log(id, 'room', roomName);

    const { data: meetCods = [], isSuccess: isMeetCodeSuccess } = useQuery({
        queryKey: ['meetCode'],
        queryFn: async () => {
            const res = await axiosPublic.get('/meetCode')
            return res.data;
        }
    });

    useEffect(() => {
        if (isMeetCodeSuccess && meetCods?.length > 0) {
            const meetingCode = meetCods.find(code => code.meetCode === id);
            setRoomName(meetingCode.meetCode);
        }
    }, [id, isMeetCodeSuccess, meetCods]);

    const handleAPI = api => {
        // api.executeCommand('toggleChat')
        // api.executeCommand('subject', roomName)
    }

    if (!isMeetCodeSuccess) {
        return <h1>Loading...</h1>
    }

    return (
        <Box maxW='1596px' mx='auto' px={{ base: '2', lg: 8 }} pt='8' pb='16' className='h-[calc(100vh-101px)]'>
            <JaaSMeeting

                appId={`${import.meta.env.VITE_JITSI_API_KEY}`}
                roomName={roomName}
                getIFrameRef={iframeRef => {
                    iframeRef.style.height = '100%';
                }}
                // jwt=''
                configOverwrite={{
                    subject: roomName,
                    disableThirdPartyRequests: true,
                    disableLocalVideoFlip: true,
                    backgroundAlpha: 0.5
                }}
                interfaceConfigOverwrite={{
                    VIDEO_LAYOUT_FIT: 'nocrop',
                    MOBILE_APP_PROMO: false,
                    TILE_VIEW_MAX_COLUMNS: 4
                }}
                // spinner={SpinnerView}
                onApiReady={handleAPI}
            />
        </Box>
    );
};

export default LiveSession;