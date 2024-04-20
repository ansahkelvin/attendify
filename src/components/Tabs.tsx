"use client"
import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@tremor/react';
import PermissionRequest from "@/components/Admin/PermissionRequest";
import Employees from "@/components/Admin/Employees";

export default function CustomTab() {
    return (
            <TabGroup>
                <TabList className="mt-4">
                    <Tab>Employees</Tab>
                    <Tab>Permission Request</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                      <Employees/>
                    </TabPanel>
                    <TabPanel>
                       <PermissionRequest/>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
    );
}