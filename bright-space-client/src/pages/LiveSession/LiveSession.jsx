import { Box } from "@chakra-ui/react";
import { JaaSMeeting } from "@jitsi/react-sdk";

const LiveSession = () => {
    

    const handleAPI = api => {
        // api.executeCommand('toggleChat')
        // api.executeCommand('subject', roomName)
    }
    return (
        <Box maxW='1596px' mx='auto' pt='8' pb='16' className='h-[calc(100vh-101px)]'>
            <JaaSMeeting

                appId={`${import.meta.env.VITE_JITSI_API_KEY}`}
                // roomName={roomName}
                getIFrameRef={iframeRef => {
                    iframeRef.style.height = '100%';
                }}
                // jwt=''
                configOverwrite={{
                    // subject: roomName,
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