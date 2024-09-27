import { Box } from "@chakra-ui/react";
import { JaaSMeeting } from "@jitsi/react-sdk";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from 'sweetalert2'

const LiveSession = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { id } = useParams();

    const { data = {}, isSuccess: isMeetCodeSuccess, isLoading } = useQuery({
        queryKey: ['meetCode'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/meetCode/${id}`)
            return res.data;
        }
    });

    useEffect(() => {
        if (isMeetCodeSuccess && !data) {
            Swal.fire({
                icon: "error",
                title: "Invalid Code",
                text: "Please enter the valid classroom code!",
                // footer: '<a href="#">Why do I have this issue?</a>'
            });
            navigate('/classroom')
        }
    }, [data, isMeetCodeSuccess, navigate]);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const handleAPI = api => {
        // api.executeCommand('toggleChat')
        // api.executeCommand('subject', roomName)
    }

    return (
        <Box maxW='1596px' mx='auto' px={{ base: '2', lg: 8 }} pt='8' pb='16' className='h-[calc(100vh-101px)]'>
            <JaaSMeeting

                appId={`${import.meta.env.VITE_JITSI_API_KEY}`}
                roomName={data.meetCode}
                getIFrameRef={iframeRef => {
                    iframeRef.style.height = '100%';
                }}
                // jwt=''
                configOverwrite={{
                    subject: data.meetCode,
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