import { Box } from "@chakra-ui/react";
import { JaaSMeeting } from "@jitsi/react-sdk";

const LiveSession = () => {
    const handleAPI = api => {
        // api.executeCommand('toggleChat')
    }
    return (
        <Box className='h-[calc(100vh-101px)]'>
            <JaaSMeeting

                appId={`${import.meta.env.VITE_JITSI_API_KEY}`}
                roomName="Development"
                getIFrameRef={iframeRef => {
                    iframeRef.style.height = 'calc(100vh - 101px)';
                }}
                // jwt=''
                configOverwrite={{
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