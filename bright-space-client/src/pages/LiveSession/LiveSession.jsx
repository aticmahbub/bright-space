import { Box, Button, Text } from "@chakra-ui/react";
import { JaaSMeeting } from "@jitsi/react-sdk";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import Swal from 'sweetalert2'
import { SocketContext } from "../../providers/SocketProvider";

const LiveSession = () => {
    const { socket } = useContext(SocketContext);
    console.log(socket);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { id } = useParams();
    const meetingToken = localStorage.getItem('meetToken');

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
            });
            localStorage.removeItem('meetToken');
            navigate('/classroom');
        }
    }, [data, isMeetCodeSuccess, navigate]);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const handleSendClassCode = () => {
        socket.emit('sendNotification', `You are invited to the class. Classroom Code: ${data?.meetCode}`)
    }

    const handleAPI = api => {
        // api.executeCommand('toggleChat')
        // api.executeCommand('subject', roomName)
        api.addListener('readyToClose', () => {
            navigate('/classroom');
            localStorage.removeItem('meetToken');
        });
    };

    return (
        <Box maxW='1596px' mx='auto' display='flex' alignItems='center' px={{ base: '2', lg: 8, '2xl': 0 }} py='4' className='min-h-screen'>
            <Box w='full'>
                <Box rounded='lg' overflow='hidden'>
                    <JaaSMeeting
                        jwt={meetingToken}
                        appId={`${import.meta.env.VITE_JITSI_APP_ID}`}
                        roomName={data.meetCode}
                        getIFrameRef={iframeRef => {
                            iframeRef.style.height = '80vh';
                        }}
                        // jwt=''
                        configOverwrite={{
                            subject: data.meetCode,
                            disableThirdPartyRequests: true,
                            disableLocalVideoFlip: true,
                            backgroundAlpha: 0.5,
                        }}
                        interfaceConfigOverwrite={{
                            VIDEO_LAYOUT_FIT: 'nocrop',
                            MOBILE_APP_PROMO: false,
                            TILE_VIEW_MAX_COLUMNS: 4,
                        }}
                        // spinner={SpinnerView}
                        onApiReady={handleAPI}
                    />
                </Box>
                {
                    data?.meetCode && <Box display='flex' alignItems='center' justifyContent='center' gap='3' p='5' mt='5' rounded='lg' border='1px' borderColor='#F1F1F3' bg='#FCFCFD'>
                        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight='600'>Share this meeting code: <span className='base:text-base md:text-lg italic'>{data.meetCode}</span></Text>
                        <Button colorScheme='primary' onClick={handleSendClassCode}>Share</Button>
                    </Box>
                }
            </Box>
        </Box>
    );
};

export default LiveSession;