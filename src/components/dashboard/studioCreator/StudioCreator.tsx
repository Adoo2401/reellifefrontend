
import React from 'react'
import { createStore } from 'polotno/model/store'
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';


const StudioCreator = () => {

    const store = createStore();
    store.openSidePanel('resize');
    const page = store.addPage();
    
   

    return (
        <div className='w-screen h-screen bp4-dark '>
            <PolotnoContainer style={{ width: '100vw', height: '100vh' }}>
                <SidePanelWrap>
                    <SidePanel store={store} />
                </SidePanelWrap>
                <WorkspaceWrap>
                    <Toolbar store={store} downloadButtonEnabled />
                    <Workspace bleedColor='red' backgroundColor='#040408' store={store} />
                    <ZoomButtons store={store} />
                </WorkspaceWrap>
            </PolotnoContainer>
        </div>
    )
}

export default StudioCreator