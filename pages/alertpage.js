import { userService } from "services";
import { Link } from "components";

import React, { useState } from "react";
import Image from "next/image";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import Modal from "react-modal";
// Tabs
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


import { Form, TextArea } from 'semantic-ui-react'
import { Icon, Popup, Grid } from "semantic-ui-react";
import { Checkbox } from 'semantic-ui-react';

const DollarPopUpStyle = {
    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    padding: "16px",
    color: '#545454',
    fontSize: '14px',
    width: '95px',
    height: '66px'
};

const ExclamationPopUpStyle = {
    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    padding: "16px",
    color: '#545454',
    fontSize: '14px',
    width: '167px',
    height: '66px'
};


const customStylesSamuel = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        padding: '64px',
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "631px",
        overflow: 'hidden'
    },
    overlay: {
        position: "fixed",
        inset: "0px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
};

const customStylesElina = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        padding: '64px',
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "631px",
        overflow: 'hidden'
    },
    overlay: {
        position: "fixed",
        inset: "0px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
};

const customStylesDamon = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        padding: '64px',
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "631px",
        overflow: 'hidden'
    },
    overlay: {
        position: "fixed",
        inset: "0px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
};

const customStylesStephen = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        padding: '64px',
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "631px",
        overflow: 'hidden'
    },
    overlay: {
        position: "fixed",
        inset: "0px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
};

const customStylesJulie = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        padding: '64px',
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "631px",
        overflow: 'hidden'
    },
    overlay: {
        position: "fixed",
        inset: "0px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
};




const customStyles1 = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "835px",
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
};

const customStyleForAssigningChris = {
    content: {
        top: "553px",
        left: "240px",
        width: "400px",
        height: "338px",
        padding: "24px",
        overflow: 'hidden',
        offset: '10px 30px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.04)',
    },
    myoverlayForAssigningChris: {
    },
};

const customStyles2 = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "835px",
    },
    myoverlay2: {
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
};

const customStylesForPaulViewButton = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "835px",
        padding: '0% !important',
        overflow: 'hidden'
    },
    overlay: {
        position: "fixed",
        inset: "0px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// Tabs start
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div sx={{ p: 3 }}>
                    <div>{children}</div>
                </div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
// Tabs End

export default Alertpage;

function Alertpage() {
    // Tabs start
    const [tabsValue, setTabsValue] = React.useState(0);

    const handleTabsChange = (event, newValue) => {
        setTabsValue(newValue);
    };
    // Tabs end

    const [isOpen, setIsOpen] = useState(false);
    const [age, setAge] = React.useState("");
    const [isSamuelOrder, setSamuelOrder] = useState(false);
    const [isElinaOrder, setElinaOrder] = useState(false);
    const [isDamonOrder, setDamonOrder] = useState(false);
    const [isStephenOrder, setStephenOrder] = useState(false);
    const [isJulieOrder, setJulieOrder] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }
    const handleChange = (SelectChangeEvent) => {
        setAge(SelectChangeEvent.target.value);
    };

    function toggleSamuelOrder() {
        setSamuelOrder(!isSamuelOrder);
    }

    function toggleElinaOrder() {
        setElinaOrder(!isElinaOrder);
    }

    function toggleDamonOrder() {
        setDamonOrder(!isDamonOrder);
    }

    function toggleStephenOrder() {
        setStephenOrder(!isStephenOrder);
    }

    function toggleJulieOrder() {
        setJulieOrder(!isJulieOrder)
    }

    //   Team View Functions
    const [isChrisAssignmentOpen1, setIsChrisAssignmentOpen1] = useState(false);
    // --------------------------------------------------------------------------------------------------------------------
    const [isMyViewJulieViewDetailsOpen, setMyViewJulieViewDetailsOpen] = useState(false);
    const [isMyViewStephenViewDetailsOpen, setMyViewStephenViewDetailsOpen] = useState(false);
    const [isMyViewDamonViewDetailsOpen, setMyViewDamonViewDetailsOpen] = useState(false);
    const [isMyViewElinaViewDetailsOpen, setMyViewElinaViewDetailsOpen] = useState(false);
    const [isMyViewSamuelViewDetailsOpen, setMyViewSamuelViewDetailsOpen] = useState(false);
    const [isTeamViewStephenViewDetailsOpen, setTeamViewStephenViewDetailsOpen] = useState(false);
    const [isTeamViewDamonViewDetailsOpen, setTeamViewDamonViewDetailsOpen] = useState(false);
    const [isTeamViewElinaViewDetailsOpen, setTeamViewElinaViewDetailsOpen] = useState(false);
    const [isTeamViewSamuelViewDetailsOpen, setTeamViewSamuelViewDetailsOpen] = useState(false);
    const [isTeamViewPaulViewDetailsOpen, setTeamViewPaulViewDetailsOpen] = useState(false);
    const [isTeamViewNinaViewDetailsOpen, setTeamViewNinaViewDetailsOpen] = useState(false);
    const [isTeamViewJamesViewDetailsOpen, setTeamViewJamesViewDetailsOpen] = useState(false);
    const [isTeamViewIanViewDetailsOpen, setTeamViewIanViewDetailsOpen] = useState(false);
    const [isTeamViewJulieViewDetailsOpen, setTeamViewJulieViewDetailsOpen] = useState(false);
    function toggleMyViewJulieOrderStatusModal() {
        setMyViewJulieViewDetailsOpen(!isMyViewJulieViewDetailsOpen);
    }

    function toggleMyViewStephenOrderStatusModal() {
        setMyViewStephenViewDetailsOpen(!isMyViewStephenViewDetailsOpen);
    }

    function toggleMyViewDamonOrderStatusModal() {
        setMyViewDamonViewDetailsOpen(!isMyViewDamonViewDetailsOpen);
    }

    function toggleMyViewElinaOrderStatusModal() {
        setMyViewElinaViewDetailsOpen(!isMyViewElinaViewDetailsOpen);
    }

    function toggleMyViewSamuelOrderStatusModal() {
        setMyViewSamuelViewDetailsOpen(!isMyViewSamuelViewDetailsOpen);
    }

    function toggleTeamViewStephenViewDetailsOpen() {
        setTeamViewStephenViewDetailsOpen(!isTeamViewStephenViewDetailsOpen);
    }

    function toggleTeamViewJulieOrderStatusModal() {
        setTeamViewJulieViewDetailsOpen(!isTeamViewJulieViewDetailsOpen);
    }

    function toggleTeamViewStephenOrderStatusModal() {
        setTeamViewStephenViewDetailsOpen(!isTeamViewStephenViewDetailsOpen);
    }

    function toggleTeamViewDamonViewDetailsOpen() {
        setTeamViewDamonViewDetailsOpen(!isTeamViewDamonViewDetailsOpen);
    }

    function toggleTeamViewSamuelViewDetailsOpen() {
        setTeamViewSamuelViewDetailsOpen(!isTeamViewSamuelViewDetailsOpen);
    }

    function toggleTeamViewPaulViewDetailsOpen() {
        setTeamViewPaulViewDetailsOpen(!isTeamViewPaulViewDetailsOpen);
    }

    function toggleTeamViewElinaViewDetailsOpen() {
        setTeamViewElinaViewDetailsOpen(!isTeamViewElinaViewDetailsOpen);
    }
    function toggleTeamViewDamonOrderStatusModal() {
        setTeamViewDamonViewDetailsOpen(!isTeamViewDamonViewDetailsOpen);
    }

    function toggleTeamViewElinaOrderStatusModal() {
        setTeamViewElinaViewDetailsOpen(!isTeamViewElinaViewDetailsOpen);
    }

    function toggleTeamViewSamuelOrderStatusModal() {
        setTeamViewSamuelViewDetailsOpen(!isTeamViewSamuelViewDetailsOpen);
    }

    function toggleTeamViewPaulOrderStatusModal() {
        setTeamViewPaulViewDetailsOpen(!isTeamViewPaulViewDetailsOpen);
    }

    function toggleTeamViewNinaViewDetailsOpen() {
        setTeamViewNinaViewDetailsOpen(!isTeamViewNinaViewDetailsOpen);
    }

    function toggleTeamViewJamesViewDetailsOpen() {
        setTeamViewJamesViewDetailsOpen(!isTeamViewJamesViewDetailsOpen);
    }
    function toggleTeamViewIanViewDetailsOpen() {
        setTeamViewIanViewDetailsOpen(!isTeamViewIanViewDetailsOpen);
    }

    function toggleTeamViewJulieViewDetailsOpen() {
        setTeamViewJulieViewDetailsOpen(!isTeamViewJulieViewDetailsOpen);
    }


    // -------------------------------------------------------------------------------------------------------------------
    function toggleViewChrisAssignment1() {
        setIsChrisAssignmentOpen1(!isChrisAssignmentOpen1);
    }
    // Team View Functions Ends

    // PopOver 1
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleExclamationOpenPopOver = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleExclamationClosePopOver = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    // PopOver 2

    const [anchorEl1, setAnchorEl1] = React.useState(null);

    const handleDollarOpenPopOver = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleDollarClosePopOver = () => {
        setAnchorEl1(null);
    };
    const open1 = Boolean(anchorEl1);

    return (
        <>
            <div className="secondHalfBodyStyling2">
                <div className="innerDivMargin">
                    <div
                        className="notification-center"
                        style={{
                            width: '1286px',
                            height: '152px',
                            marginTop: '40px',
                            backgroundColor: '#FFFFFF',
                            borderLeft: '4px solid #F04438'
                        }}>
                        <div 
                            style={{
                                marginLeft: '32px',
                                paddingTop: '32px',
                                marginBottom: '32px',
                                width: '500px',
                                height: '88px',
                                float: 'left'
                            }}>
                            <div className="parent">
                                <div
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        lineHeight: '24px',
                                        float: 'left'
                                    }}
                                >
                                    Julie Jefferson
                                </div>
                                <div
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: '300',
                                        lineHeight: '24px',
                                        paddingLeft: '3px',
                                        float: 'left'
                                    }}
                                >
                                    <span style= {{paddingLeft: '3px'}}>
                                    has arrived and is waiting at
                                    </span>
                                </div>
                                <div
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        lineHeight: '24px',
                                        
                                    }}
                                >
                                    <span style= {{paddingLeft: '3px'}}>
                                    counter 07
                                    </span>
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '16px'}}>
                            <Link href="/acknowledgealert" passHref>
                                <button
                                    style={{
                                        height: '48px',
                                        width: '118px',
                                        backgroundColor: '#000000',
                                        color: 'white',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    ACCEPT
                                </button>
                            </Link>
                            </div>
                        </div>
                        <div
                            style={{
                                float: 'right',
                                width: '109.08',
                                height: '72px',
                                marginRight: '31.92px',
                                marginTop: '40px'
                            }}
                        >
                            <Image
                                alt="Image Alt"
                                src="/alert-logo.png"
                                width={109}
                                height={72}
                            />
                        </div>
                    </div>
                    <div className="tabSection">
                        <Tabs
                            style={{ width: "1286px", fontFamily: "Lato !important" }}
                            TabIndicatorProps={{ style: { background: 'black' } }}
                            value={tabsValue}
                            onChange={handleTabsChange}
                            aria-label="basic tabs example"
                        >
                            <Tab style={{ fontFamily: "Lato !important", textTransform: 'none', minWidth: 68, padding: '0px' }}
                                sx={{
                                    color: '#545454',
                                    '&.Mui-selected': {
                                        outline: 'none',
                                        color: 'black'
                                    }
                                }}
                                label={
                                    <span
                                        style={{
                                            color: "black",
                                            textAlign: "left",
                                            fontFamily: "Lato !important",
                                            fontWeight: "700",
                                            fontSize: "16px",
                                            lineHeight: "19.2px",
                                            color: "#545454 !important",
                                        }}
                                    >
                                        My View
                                    </span>
                                }
                                {...a11yProps(0)}
                            />
                            <Tab style={{ fontFamily: "Lato !important", textTransform: 'none', minWidth: 82, padding: '0px', marginLeft: '24px' }}
                                sx={{
                                    color: '#545454',
                                    '&.Mui-selected': {
                                        outline: 'none',
                                        color: 'black'
                                    }
                                }}
                                label={
                                    <span
                                        style={{
                                            color: "black",
                                            fontFamily: "Lato !important",
                                            fontWeight: "700",
                                            fontSize: "16px",
                                            lineHeight: "19.2px",
                                            color: "#545454 !important",
                                        }}
                                    >
                                        Team View
                                    </span>
                                }
                                {...a11yProps(1)}
                            />
                        </Tabs>
                    </div>
                    <div>
                        <TabPanel value={tabsValue} index={0}>
                            <div style={{ marginTop: "40px" }}>
                                <div
                                    className="tabheadlingStyle"
                                    style={{ marginBottom: "40px" }}
                                >
                                    Today's in-store pickup orders.
                                </div>
                                <Table>
                                    <thead
                                        style={{ backgroundColor: "#F0F0F0", lineHeight: "50px" }}
                                    >
                                        <tr
                                            className="tableHeadingStyling">
                                            <th className="firstColumnPadding">PICKUP SCHEDULE</th>
                                            <th>CUSTOMER NAME</th>
                                            <th>ORDER ID</th>
                                            <th>AISLE DETAILS</th>
                                            <th>ORDER STATUS</th>
                                            <th>DETAILS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="tableRowStyling">
                                            <td className="firstColumnPadding">Mar 8, 10 am</td>
                                            <td className="trCustomerColumnStyling highlightedItems">
                                                Julie Jefferson
                                            </td>
                                            <td>#33655</td>
                                            <td>Rack #1 - 13</td>
                                            <td style={{ fontFamily: 'Lato !important' }}>
                                                <div className="row">
                                                    <div style={{ display: "flex", fontFamily: 'Lato !important' }}>
                                                        <div className="viewButton">
                                                            <button
                                                                type="button"
                                                                style={{
                                                                    backgroundColor: "#FFFAEB",
                                                                    color: "#B54708",
                                                                    border: "1px solid #DC6803",
                                                                    lineHeight: "19.2px",
                                                                    height: "32px",
                                                                    fontFamily: 'Lato !important'
                                                                }}
                                                            >
                                                                <span className='readyForPickupButtonStyle'>
                                                                    Ready For Pickup
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div className="viewIconStyling">
                                                            <Image
                                                                alt="update-icon"
                                                                src="/update-icon.svg"
                                                                width={24}
                                                                height={24}
                                                                onClick={toggleJulieOrder}
                                                            />
                                                            <Modal
                                                                // transparent={false}
                                                                isOpen={isJulieOrder}
                                                                ariaHideApp={false}
                                                                onRequestClose={toggleJulieOrder}
                                                                contentLabel="My dialog"
                                                                style={customStylesJulie}
                                                                overlayClassName="myoverlay"
                                                            >
                                                                <div className="pickupWidth"
                                                                >
                                                                    <div className="row pickupWidth" style={{ height: "37px !important" }}>
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "31px",
                                                                                lineHeight: "37px",
                                                                            }}
                                                                        >
                                                                            UPDATE ORDER STATUS
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        className="row orderModalRow pickupWidth"
                                                                        style={{ marginTop: "15px", height: '24px' }}
                                                                    >
                                                                        <div className="row" style={{ width: '265px', height: '24px' }}>
                                                                            <div className="col">
                                                                                <span
                                                                                    style={{
                                                                                        fontWeight: '600',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '24px'
                                                                                    }}>
                                                                                    Julie Jefferson
                                                                                </span>
                                                                            </div>
                                                                            <div className="col">
                                                                                <span
                                                                                    style={{
                                                                                        fontWeight: '300',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '24px',
                                                                                        marginLeft: '10px'
                                                                                    }}
                                                                                >
                                                                                    #33655
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow"
                                                                        style={{ marginTop: '25px', height: '17px' }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "14px",
                                                                                LineHeight: "17px",
                                                                                fontWeight: "Bold",
                                                                                height: '17px'
                                                                            }}
                                                                        >
                                                                            Order Status
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow" style={{ marginTop: '8px' }}
                                                                    >
                                                                        <FormControl sx={{ minWidth: 472, height: 42 }} size="md">
                                                                            <Select
                                                                                sx={{ minWidth: 472, height: 42 }}
                                                                                labelId="demo-simple-select-label"
                                                                                id="demo-simple-select"
                                                                                value={age}
                                                                                label="Age"
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value="">
                                                                                    <em>None</em>
                                                                                </MenuItem>
                                                                                <MenuItem value={10}>Picked Up</MenuItem>
                                                                                <MenuItem value={20}>
                                                                                    Ready For Pickup
                                                                                </MenuItem>
                                                                                <MenuItem value={30}>No Show</MenuItem>
                                                                            </Select>
                                                                        </FormControl>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow" style={{ marginTop: '14px' }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "14px",
                                                                                LineHeight: "16.65px",
                                                                                fontWeight: "700",
                                                                                color: '#000000'
                                                                            }}
                                                                        >
                                                                            Add comments
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        style={{ padding: "0px !important", marginTop: '7.83px' }}
                                                                    >
                                                                        <TextArea
                                                                            placeholder='Comments from sales associate'
                                                                            style={{
                                                                                minHeight: 117,
                                                                                width: 472,
                                                                                paddingLeft: 16,
                                                                                paddingTop: 16,
                                                                                color: "#545454",
                                                                                fontSize: 14,
                                                                            }} />
                                                                    </div>
                                                                    <div className="orderModalRow multiSelectCheckboxes">
                                                                        <div className='block' style={{ width: '472px', height: '42px' }}>
                                                                            <div>
                                                                                <Checkbox
                                                                                    label='Customer signed up for Loyalty program'
                                                                                />
                                                                                <br />

                                                                                <Checkbox
                                                                                    label='Customer used coupon to place another order'
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row orderModalRow" style={{ marginTop: '46px', width: '278px' }}>
                                                                        <div className="col orderModalRow">
                                                                            <button
                                                                                type="button"
                                                                                onClick={toggleJulieOrder}
                                                                                style={{
                                                                                    backgroundColor: "#FFFFFF",
                                                                                    width: "125px",
                                                                                    height: "48px",
                                                                                    color: "black !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                        fontWeight: "bold",
                                                                                    }}
                                                                                >
                                                                                    Cancel
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                        <div className="col">
                                                                            <button
                                                                                type="button"
                                                                                className="submitButton"
                                                                                onClick={toggleJulieOrder}
                                                                                style={{
                                                                                    backgroundColor: "black",
                                                                                    width: "125px",
                                                                                    height: "48px",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                        fontWeight: "bold",
                                                                                    }}
                                                                                >
                                                                                    Submit
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ width: "190px" }}>
                                                <div style={{ display: "flex" }}>
                                                    <div className="viewButton">
                                                        <Button
                                                            variant="outline-dark"
                                                            className="viewButtonStyling"
                                                            onClick={toggleMyViewJulieOrderStatusModal}
                                                        >
                                                            <span className="spanViewButtonStyle"
                                                            >View
                                                            </span>
                                                        </Button>
                                                        {/* MODEL STARTS HERE */}
                                                        <Modal
                                                            transparent={false}
                                                            isOpen={isMyViewJulieViewDetailsOpen}
                                                            onRequestClose={toggleMyViewJulieOrderStatusModal}
                                                            ariaHideApp={false}
                                                            contentLabel="My dialog1"
                                                            overlayclassName="overlay"
                                                            style={customStylesForPaulViewButton}
                                                        >
                                                            <div
                                                                style={{
                                                                    margin: '64px',
                                                                    width: "-webkit-fill-available",
                                                                    paddingLeft: '0% !important',
                                                                    paddingRight: '0% !important'
                                                                }}
                                                            >
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                    style={{ margin: "0% !important" }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontSize: "31px",
                                                                            lineHeight: "37.2px",
                                                                            color: "#000000",
                                                                        }}
                                                                    >
                                                                        ORDER DETAILS
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                    style={{ paddingTop: "20px", paddingLeft: '0% !important' }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontSize: "20px",
                                                                            lineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        <b>Julie Jefferson</b> #33655
                                                                    </span>

                                                                    <div
                                                                        style={{
                                                                            paddingTop: "10px",
                                                                            paddingBottom: "10px",
                                                                            width: "100%",
                                                                            paddingLeft: "0% !important",
                                                                            marginLeft: "0% !important",
                                                                            marginTop: "0% !important",
                                                                            marginBottom: "0% !important",
                                                                        }}
                                                                    >
                                                                        <hr
                                                                            style={{
                                                                                width: "472px",
                                                                                float: "none",
                                                                                marginLeft: "0% !important",
                                                                                marginTop: "0% !important",
                                                                                marginBottom: "0% !important",
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    {/* ORDER DETAILS SECTION */}
                                                                    <div
                                                                        className="row orderDetailsContentWidth"
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            Items(2)
                                                                        </span>
                                                                    </div>
                                                                    {/* product column */}
                                                                    {/* product1 */}
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "24px",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col-4"
                                                                            style={{ paddingLeft: "0% !important" }}
                                                                        >
                                                                            <Image
                                                                                alt="item1"
                                                                                src="/item1.svg"
                                                                                width={125}
                                                                                height={125}
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#exampleModal"
                                                                                data-bs-whatever="@mdo"
                                                                            />
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="row itemsStyling" style={{ marginLeft: '24px !important' }}>
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "700",
                                                                                        fontStyle: "bold",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                    }}
                                                                                >
                                                                                    Le Creuset Signature Oval Dutch Oven, 8 qt.
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row itemsStyling"
                                                                                style={{
                                                                                    paddingTop: "10px",
                                                                                    marginLeft: "24px !important",
                                                                                    marginRight: "0% !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "400",
                                                                                        fontStyle: "normal",
                                                                                        fontSize: "14px",
                                                                                        LineHeight: "16.8px",
                                                                                        color: '#545454'
                                                                                    }}
                                                                                >
                                                                                    SKU: 6823835 <br></br>
                                                                                    Qty: 1
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row"
                                                                                style={{
                                                                                    paddingTop: "25px",
                                                                                    textAlign: "right",
                                                                                    float: "right",
                                                                                    marginRight: '0px'
                                                                                }}
                                                                            >
                                                                                <span style={{
                                                                                    fontWeight: '700',
                                                                                    fontSize: '16px',
                                                                                    lineHeight: '19.2px',
                                                                                }}>$299.96</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr
                                                                        className="horizontalLineStyle"
                                                                    />
                                                                    {/* product2 */}
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "40px",
                                                                            paddingLeft: "0% !important",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col-4"
                                                                            style={{ paddingLeft: "0% !important" }}
                                                                        >
                                                                            <Image
                                                                                alt="item2"
                                                                                src="/item2.svg"
                                                                                width={125}
                                                                                height={125}
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#exampleModal"
                                                                                data-bs-whatever="@mdo"
                                                                            />
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="row>">
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "700",
                                                                                        fontStyle: "bold",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                    }}
                                                                                >
                                                                                    Le Creuset Multifunction Pan, 2.5 qt.
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row skuRow"
                                                                                style={{
                                                                                    paddingTop: "10px",
                                                                                    marginLeft: "0% !important",
                                                                                    marginRight: "0% !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "400",
                                                                                        fontStyle: "normal",
                                                                                        fontSize: "14px",
                                                                                        LineHeight: "16.8px",
                                                                                        color: '#545454'
                                                                                    }}
                                                                                >
                                                                                    SKU: 6825137 <br></br>
                                                                                    Qty: 1
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row"
                                                                                style={{
                                                                                    paddingTop: "25px",
                                                                                    textAlign: "right",
                                                                                    float: "right",
                                                                                    marginRight: '0px'
                                                                                }}
                                                                            >
                                                                                <span style={{
                                                                                    fontWeight: '700',
                                                                                    fontSize: '16px',
                                                                                    lineHeight: '19.2px',
                                                                                }}>$299.96</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr
                                                                        className="horizontalLineStyle"
                                                                    />
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "38px",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col"
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "600",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "20px",
                                                                                    LineHeight: "24px",
                                                                                }}
                                                                            >
                                                                                Total
                                                                            </span>
                                                                        </div>
                                                                        <div className="col" style={{ textAlign: "right" }}>
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "600",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "20px",
                                                                                    LineHeight: "24px",
                                                                                }}
                                                                            >
                                                                                $599.91
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="row"
                                                                        style={{ width: "-webkit-fill-available", marginTop: '35px' }}
                                                                    >
                                                                        <button
                                                                            onClick={toggleMyViewJulieOrderStatusModal}
                                                                            style={{
                                                                                width: "125px",
                                                                                height: "48px",
                                                                                backgroundColor: "#FFFFFF",
                                                                                color: "black !important",
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}
                                                                        >
                                                                            CLOSE
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Modal>
                                                        {/* MODAL CLOSED */}
                                                    </div>
                                                    <div className="printerIconStyling">
                                                        <Image
                                                            alt="printer-icon"
                                                            src="/printer-icon.svg"
                                                            width={24}
                                                            height={24}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="tableRowStyling ">
                                            <td className="firstColumnPadding">
                                                Mar 8, 11 am
                                            </td>
                                            <td className="trCustomerColumnStyling highlightedItems">
                                                Stephen Salvator &nbsp;
                                                <Popup
                                                    style={ExclamationPopUpStyle}
                                                    trigger={
                                                        <Image
                                                            alt="exclamatory-mark-icon"
                                                            src="/exclamatory-mark-icon.svg"
                                                            width={20}
                                                            height={20}
                                                        />
                                                    }
                                                    content="Marko is nominated to pick up this order"
                                                    position="right center"
                                                />
                                            </td>
                                            <td>#95492</td>
                                            <td>Rack #8 - 23</td>
                                            <td style={{ width: "255px" }}>
                                                <div className="row">
                                                    <div style={{ display: "flex" }}>
                                                        <div className="viewButton">
                                                            <button
                                                                type="button"
                                                                style={{
                                                                    backgroundColor: "#FFFAEB",
                                                                    color: "#B54708",
                                                                    border: "1px solid #DC6803",
                                                                    lineHeight: "19.2px",
                                                                    height: "32px",
                                                                }}
                                                            >
                                                                <span className='readyForPickupButtonStyle'>
                                                                    Ready For Pickup
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div className="viewIconStyling">
                                                            <Image
                                                                alt="update-icon"
                                                                src="/update-icon.svg"
                                                                width={24}
                                                                height={24}
                                                                onClick={toggleStephenOrder}
                                                            />
                                                            <Modal
                                                                // transparent={false}
                                                                isOpen={isStephenOrder}
                                                                ariaHideApp={false}
                                                                onRequestClose={toggleStephenOrder}
                                                                contentLabel="My dialog"
                                                                style={customStylesStephen}
                                                                overlayClassName="myoverlay"
                                                            >
                                                                <div className="pickupWidth"
                                                                >
                                                                    <div className="row pickupWidth" style={{ height: "37px !important" }}>
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "31px",
                                                                                lineHeight: "37px",
                                                                            }}
                                                                        >
                                                                            UPDATE ORDER STATUS
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        className="row orderModalRow pickupWidth"
                                                                        style={{ marginTop: "15px", height: '24px' }}
                                                                    >
                                                                        <div className="row" style={{ width: '310px', height: '24px' }}>
                                                                            <div className="col">
                                                                                <span
                                                                                    style={{
                                                                                        fontWeight: '600',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '24px'
                                                                                    }}>
                                                                                    Stephen Salvator
                                                                                </span>
                                                                            </div>
                                                                            <div className="col">
                                                                                <span
                                                                                    style={{
                                                                                        fontWeight: '300',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '24px',
                                                                                        marginLeft: '10px'
                                                                                    }}
                                                                                >
                                                                                    #95492
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow"
                                                                        style={{ marginTop: '25px', height: '17px' }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "14px",
                                                                                LineHeight: "17px",
                                                                                fontWeight: "Bold",
                                                                                height: '17px'
                                                                            }}
                                                                        >
                                                                            Order Status
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow" style={{ marginTop: '8px' }}
                                                                    >
                                                                        <FormControl sx={{ minWidth: 472, height: 42 }} size="md">
                                                                            <Select
                                                                                sx={{ minWidth: 472, height: 42 }}
                                                                                labelId="demo-simple-select-label"
                                                                                id="demo-simple-select"
                                                                                value={age}
                                                                                label="Age"
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value="">
                                                                                    <em>None</em>
                                                                                </MenuItem>
                                                                                <MenuItem value={10}>Picked Up</MenuItem>
                                                                                <MenuItem value={20}>
                                                                                    Ready For Pickup
                                                                                </MenuItem>
                                                                                <MenuItem value={30}>No Show</MenuItem>
                                                                            </Select>
                                                                        </FormControl>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow" style={{ marginTop: '14px' }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "14px",
                                                                                LineHeight: "16.65px",
                                                                                fontWeight: "700",
                                                                            }}
                                                                        >
                                                                            Add comments
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        style={{ padding: "0px !important", marginTop: '7.83px' }}
                                                                    >
                                                                        <TextArea
                                                                            placeholder='Comments from sales associate'
                                                                            style={{
                                                                                minHeight: 117,
                                                                                width: 472,
                                                                                paddingLeft: 16,
                                                                                paddingTop: 16,
                                                                                color: "#545454",
                                                                                fontSize: 14,
                                                                            }} />
                                                                    </div>
                                                                    <div className="orderModalRow multiSelectCheckboxes">
                                                                        <div className='block' style={{ width: '472px', height: '42px' }}>
                                                                            <div>
                                                                                <Checkbox
                                                                                    label='Customer signed up for Loyalty program'
                                                                                />
                                                                                <br />

                                                                                <Checkbox
                                                                                    label='Customer used coupon to place another order'
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row orderModalRow" style={{ marginTop: '46px', width: '278px' }}>
                                                                        <div className="col orderModalRow">
                                                                            <button
                                                                                type="button"
                                                                                onClick={toggleStephenOrder}
                                                                                style={{
                                                                                    backgroundColor: "#FFFFFF",
                                                                                    width: "125px",
                                                                                    height: "48px",
                                                                                    color: "black !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                        fontWeight: "bold",
                                                                                    }}
                                                                                >
                                                                                    Cancel
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                        <div className="col">
                                                                            <button
                                                                                type="button"
                                                                                className="submitButton"
                                                                                onClick={toggleStephenOrder}
                                                                                style={{
                                                                                    backgroundColor: "black",
                                                                                    width: "125px",
                                                                                    height: "48px",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                        fontWeight: "bold",
                                                                                    }}
                                                                                >
                                                                                    Submit
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ width: "190px" }}>
                                                <div style={{ display: "flex" }}>
                                                    <div className="viewButton">
                                                        <Button
                                                            variant="outline-dark"
                                                            className="viewButtonStyling"
                                                            onClick={toggleMyViewStephenOrderStatusModal}
                                                        >
                                                            <span className="spanViewButtonStyle"
                                                            >View</span>
                                                        </Button>
                                                        {/* MODEL STARTS HERE */}
                                                        <Modal
                                                            transparent={false}
                                                            isOpen={isMyViewStephenViewDetailsOpen}
                                                            onRequestClose={toggleMyViewStephenOrderStatusModal}
                                                            ariaHideApp={false}
                                                            contentLabel="My dialog1"
                                                            overlayclassName="overlay"
                                                            style={customStylesForPaulViewButton}
                                                        >
                                                            <div
                                                                style={{
                                                                    margin: '64px',
                                                                    width: "-webkit-fill-available",
                                                                    paddingLeft: '0% !important',
                                                                    paddingRight: '0% !important'
                                                                }}
                                                            >
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                    style={{ margin: "0% !important" }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontSize: "31px",
                                                                            lineHeight: "37.2px",
                                                                            color: "#000000",
                                                                        }}
                                                                    >
                                                                        ORDER DETAILS
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                    style={{ paddingTop: "20px", paddingLeft: '0% !important' }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontSize: "20px",
                                                                            lineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        <b>Stephen Salvator</b> #95492
                                                                    </span>

                                                                    <div
                                                                        style={{
                                                                            paddingTop: "10px",
                                                                            paddingBottom: "10px",
                                                                            width: "100%",
                                                                            paddingLeft: "0% !important",
                                                                            marginLeft: "0% !important",
                                                                            marginTop: "0% !important",
                                                                            marginBottom: "0% !important",
                                                                        }}
                                                                    >
                                                                        <hr
                                                                            style={{
                                                                                width: "472px",
                                                                                float: "none",
                                                                                marginLeft: "0% !important",
                                                                                marginTop: "0% !important",
                                                                                marginBottom: "0% !important",
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    {/* ORDER DETAILS SECTION */}
                                                                    <div
                                                                        className="row orderDetailsContentWidth"
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            Items(2)
                                                                        </span>
                                                                    </div>
                                                                    {/* product column */}
                                                                    {/* product1 */}
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "24px",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col-4"
                                                                            style={{ paddingLeft: "0% !important" }}
                                                                        >
                                                                            <Image
                                                                                alt="item1"
                                                                                src="/item1.svg"
                                                                                width={125}
                                                                                height={125}
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#exampleModal"
                                                                                data-bs-whatever="@mdo"
                                                                            />
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="row itemsStyling" style={{ marginLeft: '24px !important' }}>
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "700",
                                                                                        fontStyle: "bold",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                    }}
                                                                                >
                                                                                    Le Creuset Signature Oval Dutch Oven,
                                                                                    8 qt.1
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row itemsStyling"
                                                                                style={{
                                                                                    paddingTop: "10px",
                                                                                    marginLeft: "24px !important",
                                                                                    marginRight: "0% !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "400",
                                                                                        fontStyle: "normal",
                                                                                        fontSize: "14px",
                                                                                        LineHeight: "16.8px",
                                                                                        color: '#545454'
                                                                                    }}
                                                                                >
                                                                                    SKU: 6823835 <br></br>
                                                                                    Qty: 1
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row"
                                                                                style={{
                                                                                    paddingTop: "25px",
                                                                                    textAlign: "right",
                                                                                    float: "right",
                                                                                    marginRight: '0px'
                                                                                }}
                                                                            >
                                                                                <span style={{
                                                                                    fontWeight: '700',
                                                                                    fontSize: '16px',
                                                                                    lineHeight: '19.2px',
                                                                                }}>$299.96</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr
                                                                        className="horizontalLineStyle"
                                                                    />
                                                                    {/* product2 */}
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "40px",
                                                                            paddingLeft: "0% !important",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col-4"
                                                                            style={{ paddingLeft: "0% !important" }}
                                                                        >
                                                                            <Image
                                                                                alt="item2"
                                                                                src="/item2.svg"
                                                                                width={125}
                                                                                height={125}
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#exampleModal"
                                                                                data-bs-whatever="@mdo"
                                                                            />
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="row>">
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "700",
                                                                                        fontStyle: "bold",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                    }}
                                                                                >
                                                                                    Le Creuset Multifunction Pan, 2.5 qt.
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row skuRow"
                                                                                style={{
                                                                                    paddingTop: "10px",
                                                                                    marginLeft: "0% !important",
                                                                                    marginRight: "0% !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "400",
                                                                                        fontStyle: "normal",
                                                                                        fontSize: "14px",
                                                                                        LineHeight: "16.8px",
                                                                                        color: '#545454'
                                                                                    }}
                                                                                >
                                                                                    SKU: 6825137 <br></br>
                                                                                    Qty: 1
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row"
                                                                                style={{
                                                                                    paddingTop: "25px",
                                                                                    textAlign: "right",
                                                                                    float: "right",
                                                                                    marginRight: '0px'
                                                                                }}
                                                                            >
                                                                                <span style={{
                                                                                    fontWeight: '700',
                                                                                    fontSize: '16px',
                                                                                    lineHeight: '19.2px',
                                                                                }}>$299.96</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr
                                                                        className="horizontalLineStyle"
                                                                    />
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "38px",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col"
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "600",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "20px",
                                                                                    LineHeight: "24px",
                                                                                }}
                                                                            >
                                                                                Total
                                                                            </span>
                                                                        </div>
                                                                        <div className="col" style={{ textAlign: "right" }}>
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "600",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "20px",
                                                                                    LineHeight: "24px",
                                                                                }}
                                                                            >
                                                                                $599.91
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="row"
                                                                        style={{ width: "-webkit-fill-available", marginTop: '35px' }}
                                                                    >
                                                                        <button
                                                                            onClick={toggleMyViewStephenOrderStatusModal}
                                                                            style={{
                                                                                width: "125px",
                                                                                height: "48px",
                                                                                backgroundColor: "#FFFFFF",
                                                                                color: "black !important",
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}
                                                                        >
                                                                            CLOSE
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Modal>
                                                        {/* MODAL CLOSED */}
                                                    </div>
                                                    <div className="printerIconStyling">
                                                        <Image
                                                            alt="printer-icon"
                                                            src="/printer-icon.svg"
                                                            width={24}
                                                            height={24}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="tableRowStyling">
                                            <td className="firstColumnPadding">Mar 8, 1 pm</td>
                                            <td className="trCustomerColumnStyling highlightedItems">Damon Gilbert</td>
                                            <td className="highlightedItems">
                                                <span

                                                >#64578 &nbsp;</span>
                                                <Popup
                                                    style={DollarPopUpStyle}
                                                    trigger={
                                                        <Image
                                                            alt="dollar"
                                                            src="/dollar-logo.svg"
                                                            width={20}
                                                            height={20}
                                                        />
                                                    }
                                                    content="Payment pending"
                                                    position="right center"
                                                />
                                            </td>
                                            <td>Rack #2 - 10</td>
                                            <td style={{ width: "255px" }}>
                                                <div className="row">
                                                    <div style={{ display: "flex" }}>
                                                        <div className="viewButton">
                                                            <button
                                                                type="button"
                                                                style={{
                                                                    backgroundColor: "#FFFAEB",
                                                                    color: "#B54708",
                                                                    border: "1px solid #DC6803",
                                                                    lineHeight: "19.2px",
                                                                    height: "32px",
                                                                }}
                                                            >
                                                                <span className='readyForPickupButtonStyle'>
                                                                    Ready For Pickup
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div className="viewIconStyling">
                                                            <Image
                                                                alt="update-icon"
                                                                src="/update-icon.svg"
                                                                width={24}
                                                                height={24}
                                                                onClick={toggleDamonOrder}
                                                            />
                                                            <Modal
                                                                isOpen={isDamonOrder}
                                                                ariaHideApp={false}
                                                                onRequestClose={toggleDamonOrder}
                                                                contentLabel="My dialog"
                                                                style={customStylesDamon}
                                                                overlayClassName="myoverlay"
                                                            >
                                                                <div className="pickupWidth"
                                                                >
                                                                    <div className="row pickupWidth" style={{ height: "37px !important" }}>
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "31px",
                                                                                lineHeight: "37px",
                                                                            }}
                                                                        >
                                                                            UPDATE ORDER STATUS
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        className="block"
                                                                        style={{ marginTop: "15px", height: '24px' }}
                                                                    >
                                                                        <div style={{ float: 'left' }}>
                                                                            <span
                                                                                style={{
                                                                                    fontWeight: '600',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '24px',
                                                                                }}>
                                                                                Damon Gilbert
                                                                            </span>
                                                                        </div>
                                                                        <div style={{ float: 'left' }}>
                                                                            <span
                                                                                style={{
                                                                                    fontWeight: '300',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '24px',
                                                                                    marginLeft: '10px'
                                                                                }}
                                                                            >
                                                                                #64578
                                                                            </span>
                                                                        </div>
                                                                        <div>
                                                                            <button
                                                                                type="button"
                                                                                style={{
                                                                                    marginLeft: '26px',
                                                                                    backgroundColor: "#FEF3F2",
                                                                                    color: "#D92D20",
                                                                                    border: "1px solid #D92D20",
                                                                                    fontWeight: '400',
                                                                                    fontSize: '16px',
                                                                                    lineHeight: "19.2px",
                                                                                    height: "32px",
                                                                                    width: '146px'
                                                                                }}
                                                                            >
                                                                                <span>
                                                                                    Payment Pending
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow"
                                                                        style={{ marginTop: '25px', height: '17px' }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "14px",
                                                                                LineHeight: "17px",
                                                                                fontWeight: "Bold",
                                                                                height: '17px'
                                                                            }}
                                                                        >
                                                                            Order Status
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow" style={{ marginTop: '8px' }}
                                                                    >
                                                                        <FormControl sx={{ minWidth: 472, height: 42 }} size="md">
                                                                            <Select
                                                                                sx={{ minWidth: 472, height: 42 }}
                                                                                labelId="demo-simple-select-label"
                                                                                id="demo-simple-select"
                                                                                value={age}
                                                                                label="Age"
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value="">
                                                                                    <em>None</em>
                                                                                </MenuItem>
                                                                                <MenuItem value={10}>Picked Up</MenuItem>
                                                                                <MenuItem value={20}>
                                                                                    Ready For Pickup
                                                                                </MenuItem>
                                                                                <MenuItem value={30}>No Show</MenuItem>
                                                                            </Select>
                                                                        </FormControl>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow" style={{ marginTop: '14px' }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "14px",
                                                                                LineHeight: "16.65px",
                                                                                fontWeight: "700",
                                                                            }}
                                                                        >
                                                                            Add comments
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        style={{ padding: "0px !important", marginTop: '7.83px' }}
                                                                    >
                                                                        <TextArea
                                                                            placeholder='Comments from sales associate'
                                                                            style={{
                                                                                minHeight: 117,
                                                                                width: 472,
                                                                                paddingLeft: 16,
                                                                                paddingTop: 16,
                                                                                color: "#545454",
                                                                                fontSize: 14,
                                                                            }} />
                                                                    </div>
                                                                    <div className="orderModalRow multiSelectCheckboxes">
                                                                        <div className='block' style={{ width: '472px', height: '20px' }}>
                                                                            <div>
                                                                                <Checkbox
                                                                                    label='Customer signed up for Loyalty program'
                                                                                />
                                                                                <br />

                                                                                <Checkbox
                                                                                    label='Customer used coupon to place another order'
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row orderModalRow" style={{ marginTop: '46px', width: '278px' }}>
                                                                        <div className="col orderModalRow">
                                                                            <button
                                                                                type="button"
                                                                                onClick={toggleDamonOrder}
                                                                                style={{
                                                                                    backgroundColor: "#FFFFFF",
                                                                                    width: "125px",
                                                                                    height: "48px",
                                                                                    color: "black !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                        fontWeight: "bold",
                                                                                    }}
                                                                                >
                                                                                    Cancel
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                        <div className="col">
                                                                            <button
                                                                                type="button"
                                                                                className="submitButton"
                                                                                onClick={toggleDamonOrder}
                                                                                style={{
                                                                                    backgroundColor: "black",
                                                                                    width: "125px",
                                                                                    height: "48px",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                        fontWeight: "bold",
                                                                                    }}
                                                                                >
                                                                                    Submit
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ width: "190px" }}>
                                                <div style={{ display: "flex" }}>
                                                    <div className="viewButton">
                                                        <Button
                                                            variant="outline-dark"
                                                            className="viewButtonStyling"
                                                            onClick={toggleMyViewDamonOrderStatusModal}
                                                        >
                                                            <span className="spanViewButtonStyle"
                                                            >View</span>
                                                        </Button>
                                                        {/* MODEL STARTS HERE */}
                                                        <Modal
                                                            transparent={false}
                                                            isOpen={isMyViewDamonViewDetailsOpen}
                                                            onRequestClose={toggleMyViewDamonOrderStatusModal}
                                                            ariaHideApp={false}
                                                            contentLabel="My dialog1"
                                                            overlayclassName="overlay"
                                                            style={customStylesForPaulViewButton}
                                                        >
                                                            <div
                                                                style={{
                                                                    margin: '64px',
                                                                    width: "-webkit-fill-available",
                                                                    paddingLeft: '0% !important',
                                                                    paddingRight: '0% !important'
                                                                }}
                                                            >
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                    style={{ margin: "0% !important" }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontSize: "31px",
                                                                            lineHeight: "37.2px",
                                                                            color: "#000000",
                                                                        }}
                                                                    >
                                                                        ORDER DETAILS
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    className="block row orderDetailsContentWidth"
                                                                    style={{ paddingTop: "20px", paddingLeft: '0% !important' }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontSize: "20px",
                                                                            lineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        <b>Damon Gilbert</b> #64578
                                                                        <button
                                                                            type="button"
                                                                            style={{
                                                                                marginLeft: '26px',
                                                                                backgroundColor: "#FEF3F2",
                                                                                color: "#D92D20",
                                                                                border: "1px solid #D92D20",
                                                                                fontWeight: '400',
                                                                                fontSize: '16px',
                                                                                lineHeight: "19.2px",
                                                                                height: "32px",
                                                                                width: '146px'
                                                                            }}
                                                                        >
                                                                            <span>
                                                                                Payment Pending
                                                                            </span>
                                                                        </button>
                                                                    </span>

                                                                    <div
                                                                        style={{
                                                                            paddingTop: "10px",
                                                                            paddingBottom: "10px",
                                                                            width: "100%",
                                                                            paddingLeft: "0% !important",
                                                                            marginLeft: "0% !important",
                                                                            marginTop: "0% !important",
                                                                            marginBottom: "0% !important",
                                                                        }}
                                                                    >
                                                                        <hr
                                                                            style={{
                                                                                width: "472px",
                                                                                float: "none",
                                                                                marginLeft: "0% !important",
                                                                                marginTop: "0% !important",
                                                                                marginBottom: "0% !important",
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    {/* ORDER DETAILS SECTION */}
                                                                    <div
                                                                        className="row orderDetailsContentWidth"
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            Items(2)
                                                                        </span>
                                                                    </div>
                                                                    {/* product column */}
                                                                    {/* product1 */}
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "24px",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col-4"
                                                                            style={{ paddingLeft: "0% !important" }}
                                                                        >
                                                                            <Image
                                                                                alt="item1"
                                                                                src="/item1.svg"
                                                                                width={125}
                                                                                height={125}
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#exampleModal"
                                                                                data-bs-whatever="@mdo"
                                                                            />
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="row itemsStyling" style={{ marginLeft: '24px !important' }}>
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "700",
                                                                                        fontStyle: "bold",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                    }}
                                                                                >
                                                                                    Le Creuset Signature Oval Dutch Oven,
                                                                                    8 qt.1
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row itemsStyling"
                                                                                style={{
                                                                                    paddingTop: "10px",
                                                                                    marginLeft: "24px !important",
                                                                                    marginRight: "0% !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "400",
                                                                                        fontStyle: "normal",
                                                                                        fontSize: "14px",
                                                                                        LineHeight: "16.8px",
                                                                                        color: '#545454'
                                                                                    }}
                                                                                >
                                                                                    SKU: 6823835 <br></br>
                                                                                    Qty: 1
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row"
                                                                                style={{
                                                                                    paddingTop: "25px",
                                                                                    textAlign: "right",
                                                                                    float: "right",
                                                                                    marginRight: '0px'
                                                                                }}
                                                                            >
                                                                                <span style={{
                                                                                    fontWeight: '700',
                                                                                    fontSize: '16px',
                                                                                    lineHeight: '19.2px',
                                                                                }}>$299.96</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr
                                                                        className="horizontalLineStyle"
                                                                    />
                                                                    {/* product2 */}
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "40px",
                                                                            paddingLeft: "0% !important",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col-4"
                                                                            style={{ paddingLeft: "0% !important" }}
                                                                        >
                                                                            <Image
                                                                                alt="item2"
                                                                                src="/item2.svg"
                                                                                width={125}
                                                                                height={125}
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#exampleModal"
                                                                                data-bs-whatever="@mdo"
                                                                            />
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="row>">
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "700",
                                                                                        fontStyle: "bold",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                    }}
                                                                                >
                                                                                    Le Creuset Multifunction Pan, 2.5 qt.
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row skuRow"
                                                                                style={{
                                                                                    paddingTop: "10px",
                                                                                    marginLeft: "0% !important",
                                                                                    marginRight: "0% !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "400",
                                                                                        fontStyle: "normal",
                                                                                        fontSize: "14px",
                                                                                        LineHeight: "16.8px",
                                                                                        color: '#545454'
                                                                                    }}
                                                                                >
                                                                                    SKU: 6825137 <br></br>
                                                                                    Qty: 1
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row"
                                                                                style={{
                                                                                    paddingTop: "25px",
                                                                                    textAlign: "right",
                                                                                    float: "right",
                                                                                    marginRight: '0px'
                                                                                }}
                                                                            >
                                                                                <span style={{
                                                                                    fontWeight: '700',
                                                                                    fontSize: '16px',
                                                                                    lineHeight: '19.2px',
                                                                                }}>$299.96</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr
                                                                        className="horizontalLineStyle"
                                                                    />
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "38px",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col"
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "600",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "20px",
                                                                                    LineHeight: "24px",
                                                                                }}
                                                                            >
                                                                                Total
                                                                            </span>
                                                                        </div>
                                                                        <div className="col" style={{ textAlign: "right" }}>
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "600",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "20px",
                                                                                    LineHeight: "24px",
                                                                                }}
                                                                            >
                                                                                $599.91
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="row"
                                                                        style={{ width: "-webkit-fill-available", marginTop: '35px' }}
                                                                    >
                                                                        <button
                                                                            onClick={toggleMyViewDamonOrderStatusModal}
                                                                            style={{
                                                                                width: "125px",
                                                                                height: "48px",
                                                                                backgroundColor: "#FFFFFF",
                                                                                color: "black !important",
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}
                                                                        >
                                                                            CLOSE
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Modal>
                                                        {/* MODAL CLOSED */}
                                                    </div>
                                                    <div className="printerIconStyling">
                                                        <Image
                                                            alt="printer-icon"
                                                            src="/printer-icon.svg"
                                                            width={24}
                                                            height={24}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="tableRowStyling">
                                            <td className="firstColumnPadding">Mar 8, 2 pm</td>
                                            <td className="trCustomerColumnStyling highlightedItems">
                                                Elina Rockwood
                                            </td>
                                            <td>#85892</td>
                                            <td>Rack #5 - 14</td>
                                            <td style={{ width: "255px" }}>
                                                <div className="row">
                                                    <div style={{ display: "flex" }}>
                                                        <div className="viewButton">
                                                            <button
                                                                type="button"
                                                                style={{
                                                                    backgroundColor: "#FFFAEB",
                                                                    color: "#B54708",
                                                                    border: "1px solid #DC6803",
                                                                    lineHeight: "19.2px",
                                                                    height: "32px",
                                                                }}
                                                            >
                                                                <span className='readyForPickupButtonStyle'>
                                                                    Ready For Pickup
                                                                </span>
                                                            </button>

                                                        </div>
                                                        <div className="viewIconStyling">
                                                            <Image
                                                                alt="update-icon"
                                                                src="/update-icon.svg"
                                                                width={24}
                                                                height={24}
                                                                onClick={toggleElinaOrder}
                                                            />
                                                            <Modal
                                                                // transparent={false}
                                                                isOpen={isElinaOrder}
                                                                ariaHideApp={false}
                                                                onRequestClose={toggleElinaOrder}
                                                                contentLabel="My dialog"
                                                                style={customStylesElina}
                                                                overlayClassName="myoverlay"
                                                            >
                                                                <div className="pickupWidth"
                                                                >
                                                                    <div className="row pickupWidth" style={{ height: "37px !important" }}>
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "31px",
                                                                                lineHeight: "37px",
                                                                            }}
                                                                        >
                                                                            UPDATE ORDER STATUS
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        className="row orderModalRow pickupWidth"
                                                                        style={{ marginTop: "15px", height: '24px' }}
                                                                    >
                                                                        <div className="row" style={{ width: '290px', height: '24px' }}>
                                                                            <div className="col">
                                                                                <span
                                                                                    style={{
                                                                                        fontWeight: '600',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '24px'
                                                                                    }}>
                                                                                    Elina Rockwood
                                                                                </span>
                                                                            </div>
                                                                            <div className="col">
                                                                                <span
                                                                                    style={{
                                                                                        fontWeight: '300',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '24px',
                                                                                        marginLeft: '10px'
                                                                                    }}
                                                                                >
                                                                                    #85892
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow"
                                                                        style={{ marginTop: '25px', height: '17px' }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "14px",
                                                                                LineHeight: "17px",
                                                                                fontWeight: "Bold",
                                                                                height: '17px'
                                                                            }}
                                                                        >
                                                                            Order Status
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow" style={{ marginTop: '8px' }}
                                                                    >
                                                                        <FormControl sx={{ minWidth: 472, height: 42 }} size="md">
                                                                            <Select
                                                                                sx={{ minWidth: 472, height: 42 }}
                                                                                labelId="demo-simple-select-label"
                                                                                id="demo-simple-select"
                                                                                value={age}
                                                                                label="Age"
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value="">
                                                                                    <em>None</em>
                                                                                </MenuItem>
                                                                                <MenuItem value={10}>Picked Up</MenuItem>
                                                                                <MenuItem value={20}>
                                                                                    Ready For Pickup
                                                                                </MenuItem>
                                                                                <MenuItem value={30}>No Show</MenuItem>
                                                                            </Select>
                                                                        </FormControl>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow" style={{ marginTop: '14px' }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "14px",
                                                                                LineHeight: "16.65px",
                                                                                fontWeight: "700",
                                                                            }}
                                                                        >
                                                                            Add comments
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        style={{ padding: "0px !important", marginTop: '7.83px' }}
                                                                    >
                                                                        <TextArea
                                                                            placeholder='Comments from sales associate'
                                                                            style={{
                                                                                minHeight: 117,
                                                                                width: 472,
                                                                                paddingLeft: 16,
                                                                                paddingTop: 16,
                                                                                color: "#545454",
                                                                                fontSize: 14,
                                                                            }} />
                                                                    </div>
                                                                    <div className="orderModalRow multiSelectCheckboxes">
                                                                        <div className='block' style={{ width: '472px', height: '42px' }}>
                                                                            <div>
                                                                                <Checkbox
                                                                                    label='Customer signed up for Loyalty program'
                                                                                />
                                                                                <br />

                                                                                <Checkbox
                                                                                    label='Customer used coupon to place another order'
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row orderModalRow" style={{ marginTop: '46px', width: '278px' }}>
                                                                        <div className="col orderModalRow">
                                                                            <button
                                                                                type="button"
                                                                                onClick={toggleElinaOrder}
                                                                                style={{
                                                                                    backgroundColor: "#FFFFFF",
                                                                                    width: "125px",
                                                                                    height: "48px",
                                                                                    color: "black !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                        fontWeight: "bold",
                                                                                    }}
                                                                                >
                                                                                    Cancel
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                        <div className="col">
                                                                            <button
                                                                                type="button"
                                                                                className="submitButton"
                                                                                onClick={toggleElinaOrder}
                                                                                style={{
                                                                                    backgroundColor: "black",
                                                                                    width: "125px",
                                                                                    height: "48px",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                        fontWeight: "bold",
                                                                                    }}
                                                                                >
                                                                                    Submit
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ width: "190px" }}>
                                                <div style={{ display: "flex" }}>
                                                    <div className="viewButton">
                                                        <Button
                                                            variant="outline-dark"
                                                            className="viewButtonStyling"
                                                            onClick={toggleMyViewElinaOrderStatusModal}
                                                        >
                                                            <span className="spanViewButtonStyle"
                                                            >View</span>
                                                        </Button>
                                                        {/* MODEL STARTS HERE */}
                                                        <Modal
                                                            transparent={false}
                                                            isOpen={isMyViewElinaViewDetailsOpen}
                                                            onRequestClose={toggleMyViewElinaOrderStatusModal}
                                                            ariaHideApp={false}
                                                            contentLabel="My dialog1"
                                                            overlayclassName="overlay"
                                                            style={customStylesForPaulViewButton}
                                                        >
                                                            <div
                                                                style={{
                                                                    margin: '64px',
                                                                    width: "-webkit-fill-available",
                                                                    paddingLeft: '0% !important',
                                                                    paddingRight: '0% !important'
                                                                }}
                                                            >
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                    style={{ margin: "0% !important" }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontSize: "31px",
                                                                            lineHeight: "37.2px",
                                                                            color: "#000000",
                                                                        }}
                                                                    >
                                                                        ORDER DETAILS
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                    style={{ paddingTop: "20px", paddingLeft: '0% !important' }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontSize: "20px",
                                                                            lineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        <b>Elina Rockwood</b> #85892
                                                                    </span>

                                                                    <div
                                                                        style={{
                                                                            paddingTop: "10px",
                                                                            paddingBottom: "10px",
                                                                            width: "100%",
                                                                            paddingLeft: "0% !important",
                                                                            marginLeft: "0% !important",
                                                                            marginTop: "0% !important",
                                                                            marginBottom: "0% !important",
                                                                        }}
                                                                    >
                                                                        <hr
                                                                            style={{
                                                                                width: "472px",
                                                                                float: "none",
                                                                                marginLeft: "0% !important",
                                                                                marginTop: "0% !important",
                                                                                marginBottom: "0% !important",
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    {/* ORDER DETAILS SECTION */}
                                                                    <div
                                                                        className="row orderDetailsContentWidth"
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            Items(2)
                                                                        </span>
                                                                    </div>
                                                                    {/* product column */}
                                                                    {/* product1 */}
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "24px",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col-4"
                                                                            style={{ paddingLeft: "0% !important" }}
                                                                        >
                                                                            <Image
                                                                                alt="item1"
                                                                                src="/item1.svg"
                                                                                width={125}
                                                                                height={125}
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#exampleModal"
                                                                                data-bs-whatever="@mdo"
                                                                            />
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="row itemsStyling" style={{ marginLeft: '24px !important' }}>
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "700",
                                                                                        fontStyle: "bold",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                    }}
                                                                                >
                                                                                    Le Creuset Signature Oval Dutch Oven,
                                                                                    8 qt.1
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row itemsStyling"
                                                                                style={{
                                                                                    paddingTop: "10px",
                                                                                    marginLeft: "24px !important",
                                                                                    marginRight: "0% !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "400",
                                                                                        fontStyle: "normal",
                                                                                        fontSize: "14px",
                                                                                        LineHeight: "16.8px",
                                                                                        color: '#545454'
                                                                                    }}
                                                                                >
                                                                                    SKU: 6823835 <br></br>
                                                                                    Qty: 1
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row"
                                                                                style={{
                                                                                    paddingTop: "25px",
                                                                                    textAlign: "right",
                                                                                    float: "right",
                                                                                    marginRight: '0px'
                                                                                }}
                                                                            >
                                                                                <span style={{
                                                                                    fontWeight: '700',
                                                                                    fontSize: '16px',
                                                                                    lineHeight: '19.2px',
                                                                                }}>$299.96</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr
                                                                        className="horizontalLineStyle"
                                                                    />
                                                                    {/* product2 */}
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "40px",
                                                                            paddingLeft: "0% !important",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col-4"
                                                                            style={{ paddingLeft: "0% !important" }}
                                                                        >
                                                                            <Image
                                                                                alt="item2"
                                                                                src="/item2.svg"
                                                                                width={125}
                                                                                height={125}
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#exampleModal"
                                                                                data-bs-whatever="@mdo"
                                                                            />
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="row>">
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "700",
                                                                                        fontStyle: "bold",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                    }}
                                                                                >
                                                                                    Le Creuset Multifunction Pan, 2.5 qt.
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row skuRow"
                                                                                style={{
                                                                                    paddingTop: "10px",
                                                                                    marginLeft: "0% !important",
                                                                                    marginRight: "0% !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "400",
                                                                                        fontStyle: "normal",
                                                                                        fontSize: "14px",
                                                                                        LineHeight: "16.8px",
                                                                                        color: '#545454'
                                                                                    }}
                                                                                >
                                                                                    SKU: 6825137 <br></br>
                                                                                    Qty: 1
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row"
                                                                                style={{
                                                                                    paddingTop: "25px",
                                                                                    textAlign: "right",
                                                                                    float: "right",
                                                                                    marginRight: '0px'
                                                                                }}
                                                                            >
                                                                                <span style={{
                                                                                    fontWeight: '700',
                                                                                    fontSize: '16px',
                                                                                    lineHeight: '19.2px',
                                                                                }}>$299.96</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr
                                                                        className="horizontalLineStyle"
                                                                    />
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "38px",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col"
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "600",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "20px",
                                                                                    LineHeight: "24px",
                                                                                }}
                                                                            >
                                                                                Total
                                                                            </span>
                                                                        </div>
                                                                        <div className="col" style={{ textAlign: "right" }}>
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "600",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "20px",
                                                                                    LineHeight: "24px",
                                                                                }}
                                                                            >
                                                                                $599.91
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="row"
                                                                        style={{ width: "-webkit-fill-available", marginTop: '35px' }}
                                                                    >
                                                                        <button
                                                                            onClick={toggleMyViewElinaOrderStatusModal}
                                                                            style={{
                                                                                width: "125px",
                                                                                height: "48px",
                                                                                backgroundColor: "#FFFFFF",
                                                                                color: "black !important",
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}
                                                                        >
                                                                            CLOSE
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Modal>
                                                        {/* MODAL CLOSED */}
                                                    </div>
                                                    <div className="printerIconStyling">
                                                        <Image
                                                            alt="printer-icon"
                                                            src="/printer-icon.svg"
                                                            width={24}
                                                            height={24}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="tableRowStyling">
                                            <td className="firstColumnPadding">Mar 8, 4 pm</td>
                                            <td className="trCustomerColumnStyling highlightedItems">Samuel Gomes</td>
                                            <td>#98771</td>
                                            <td>Rack 5 - 18</td>
                                            <td style={{ width: "255px" }}>
                                                <div className="row">
                                                    <div style={{ display: "flex" }}>
                                                        <div className="viewButton">
                                                            <button
                                                                type="button"
                                                                style={{
                                                                    backgroundColor: "#FFFAEB",
                                                                    color: "#B54708",
                                                                    border: "1px solid #DC6803",
                                                                    lineHeight: "19.2px",
                                                                    height: "32px",
                                                                }}
                                                            >
                                                                <span className='readyForPickupButtonStyle'>
                                                                    Ready For Pickup
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div className="viewIconStyling">
                                                            <Image
                                                                alt="update-icon"
                                                                src="/update-icon.svg"
                                                                width={24}
                                                                height={24}
                                                                onClick={toggleSamuelOrder}
                                                            />
                                                            <Modal
                                                                // transparent={false}
                                                                isOpen={isSamuelOrder}
                                                                ariaHideApp={false}
                                                                onRequestClose={toggleSamuelOrder}
                                                                contentLabel="My dialog"
                                                                style={customStylesSamuel}
                                                                overlayClassName="myoverlay"
                                                            >
                                                                <div className="pickupWidth"
                                                                >
                                                                    <div className="row pickupWidth" style={{ height: "37px !important" }}>
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "31px",
                                                                                lineHeight: "37px",
                                                                            }}
                                                                        >
                                                                            UPDATE ORDER STATUS
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        className="row orderModalRow pickupWidth"
                                                                        style={{ marginTop: "15px", height: '24px' }}
                                                                    >
                                                                        <div className="row" style={{ width: '265px', height: '24px' }}>
                                                                            <div className="col">
                                                                                <span
                                                                                    style={{
                                                                                        fontWeight: '600',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '24px'
                                                                                    }}>
                                                                                    Julie Jefferson
                                                                                </span>
                                                                            </div>
                                                                            <div className="col">
                                                                                <span
                                                                                    style={{
                                                                                        fontWeight: '300',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '24px',
                                                                                        marginLeft: '10px'
                                                                                    }}
                                                                                >
                                                                                    #33655
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow"
                                                                        style={{ marginTop: '25px', height: '17px' }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "14px",
                                                                                LineHeight: "17px",
                                                                                fontWeight: "Bold",
                                                                                height: '17px'
                                                                            }}
                                                                        >
                                                                            Order Status
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow" style={{ marginTop: '8px' }}
                                                                    >
                                                                        <FormControl sx={{ minWidth: 472, height: 42 }} size="md">
                                                                            <Select
                                                                                sx={{ minWidth: 472, height: 42 }}
                                                                                labelId="demo-simple-select-label"
                                                                                id="demo-simple-select"
                                                                                value={age}
                                                                                label="Age"
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value="">
                                                                                    <em>None</em>
                                                                                </MenuItem>
                                                                                <MenuItem value={10}>Picked Up</MenuItem>
                                                                                <MenuItem value={20}>
                                                                                    Ready For Pickup
                                                                                </MenuItem>
                                                                                <MenuItem value={30}>No Show</MenuItem>
                                                                            </Select>
                                                                        </FormControl>
                                                                    </div>
                                                                    <div
                                                                        className="col orderModalRow" style={{ marginTop: '14px' }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontSize: "14px",
                                                                                LineHeight: "16.65px",
                                                                                fontWeight: "700",
                                                                            }}
                                                                        >
                                                                            Add comments
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        style={{ padding: "0px !important", marginTop: '7.83px' }}
                                                                    >
                                                                        <TextArea
                                                                            placeholder='Comments from sales associate'
                                                                            style={{
                                                                                minHeight: 117,
                                                                                width: 472,
                                                                                paddingLeft: 16,
                                                                                paddingTop: 16,
                                                                                color: "#545454",
                                                                                fontSize: 14,
                                                                            }} />
                                                                    </div>
                                                                    <div className="orderModalRow multiSelectCheckboxes" >
                                                                        <div style={{ width: '472px' }}>
                                                                            <div>
                                                                                <Checkbox
                                                                                    label='Customer signed up for Loyalty program'
                                                                                />
                                                                                <br />

                                                                                <Checkbox
                                                                                    label='Customer used coupon to place another order'
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row orderModalRow" style={{ marginTop: '46px', width: '278px' }}>
                                                                        <div className="col orderModalRow">
                                                                            <button
                                                                                type="button"
                                                                                onClick={toggleSamuelOrder}
                                                                                style={{
                                                                                    backgroundColor: "#FFFFFF",
                                                                                    width: "125px",
                                                                                    height: "48px",
                                                                                    color: "black !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                        fontWeight: "bold",
                                                                                    }}
                                                                                >
                                                                                    Cancel
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                        <div className="col">
                                                                            <button
                                                                                type="button"
                                                                                className="submitButton"
                                                                                onClick={toggleModal}
                                                                                style={{
                                                                                    backgroundColor: "black",
                                                                                    width: "125px",
                                                                                    height: "48px",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                        fontWeight: "bold",
                                                                                    }}
                                                                                >
                                                                                    Submit
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ width: "190px" }}>
                                                <div style={{ display: "flex" }}>
                                                    <div className="viewButton">
                                                        <Button
                                                            variant="outline-dark"
                                                            className="viewButtonStyling"
                                                            onClick={toggleMyViewSamuelOrderStatusModal}
                                                        >
                                                            <span className="spanViewButtonStyle"
                                                            >View
                                                            </span>
                                                        </Button>
                                                        {/* MODEL STARTS HERE */}
                                                        <Modal
                                                            transparent={false}
                                                            isOpen={isMyViewSamuelViewDetailsOpen}
                                                            onRequestClose={toggleMyViewSamuelOrderStatusModal}
                                                            ariaHideApp={false}
                                                            contentLabel="My dialog1"
                                                            overlayclassName="overlay"
                                                            style={customStylesForPaulViewButton}
                                                        >
                                                            <div
                                                                style={{
                                                                    margin: '64px',
                                                                    width: "-webkit-fill-available",
                                                                    paddingLeft: '0% !important',
                                                                    paddingRight: '0% !important'
                                                                }}
                                                            >
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                    style={{ margin: "0% !important" }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontSize: "31px",
                                                                            lineHeight: "37.2px",
                                                                            color: "#000000",
                                                                        }}
                                                                    >
                                                                        ORDER DETAILS
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                    style={{ paddingTop: "20px", paddingLeft: '0% !important' }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontSize: "20px",
                                                                            lineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        <b>Samuel Gomes</b> #98771
                                                                    </span>

                                                                    <div
                                                                        style={{
                                                                            paddingTop: "10px",
                                                                            paddingBottom: "10px",
                                                                            width: "100%",
                                                                            paddingLeft: "0% !important",
                                                                            marginLeft: "0% !important",
                                                                            marginTop: "0% !important",
                                                                            marginBottom: "0% !important",
                                                                        }}
                                                                    >
                                                                        <hr
                                                                            style={{
                                                                                width: "472px",
                                                                                float: "none",
                                                                                marginLeft: "0% !important",
                                                                                marginTop: "0% !important",
                                                                                marginBottom: "0% !important",
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    {/* ORDER DETAILS SECTION */}
                                                                    <div
                                                                        className="row orderDetailsContentWidth"
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            Items(2)
                                                                        </span>
                                                                    </div>
                                                                    {/* product column */}
                                                                    {/* product1 */}
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "24px",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col-4"
                                                                            style={{ paddingLeft: "0% !important" }}
                                                                        >
                                                                            <Image
                                                                                alt="item1"
                                                                                src="/item1.svg"
                                                                                width={125}
                                                                                height={125}
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#exampleModal"
                                                                                data-bs-whatever="@mdo"
                                                                            />
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="row itemsStyling" style={{ marginLeft: '24px !important' }}>
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "700",
                                                                                        fontStyle: "bold",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                    }}
                                                                                >
                                                                                    Le Creuset Signature Oval Dutch Oven,
                                                                                    8 qt.1
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row itemsStyling"
                                                                                style={{
                                                                                    paddingTop: "10px",
                                                                                    marginLeft: "24px !important",
                                                                                    marginRight: "0% !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "400",
                                                                                        fontStyle: "normal",
                                                                                        fontSize: "14px",
                                                                                        LineHeight: "16.8px",
                                                                                        color: '#545454'
                                                                                    }}
                                                                                >
                                                                                    SKU: 6823835 <br></br>
                                                                                    Qty: 1
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row"
                                                                                style={{
                                                                                    paddingTop: "25px",
                                                                                    textAlign: "right",
                                                                                    float: "right",
                                                                                    marginRight: '0px'
                                                                                }}
                                                                            >
                                                                                <span style={{
                                                                                    fontWeight: '700',
                                                                                    fontSize: '16px',
                                                                                    lineHeight: '19.2px',
                                                                                }}>$299.96</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr
                                                                        className="horizontalLineStyle"
                                                                    />
                                                                    {/* product2 */}
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "40px",
                                                                            paddingLeft: "0% !important",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col-4"
                                                                            style={{ paddingLeft: "0% !important" }}
                                                                        >
                                                                            <Image
                                                                                alt="item2"
                                                                                src="/item2.svg"
                                                                                width={125}
                                                                                height={125}
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#exampleModal"
                                                                                data-bs-whatever="@mdo"
                                                                            />
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="row>">
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "700",
                                                                                        fontStyle: "bold",
                                                                                        fontSize: "16px",
                                                                                        LineHeight: "19.2px",
                                                                                    }}
                                                                                >
                                                                                    Le Creuset Multifunction Pan, 2.5 qt.
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row skuRow"
                                                                                style={{
                                                                                    paddingTop: "10px",
                                                                                    marginLeft: "0% !important",
                                                                                    marginRight: "0% !important",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontFamily: "Lato",
                                                                                        fontWeight: "400",
                                                                                        fontStyle: "normal",
                                                                                        fontSize: "14px",
                                                                                        LineHeight: "16.8px",
                                                                                        color: '#545454'
                                                                                    }}
                                                                                >
                                                                                    SKU: 6825137 <br></br>
                                                                                    Qty: 1
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="row"
                                                                                style={{
                                                                                    paddingTop: "25px",
                                                                                    textAlign: "right",
                                                                                    float: "right",
                                                                                    marginRight: '0px'
                                                                                }}
                                                                            >
                                                                                <span style={{
                                                                                    fontWeight: '700',
                                                                                    fontSize: '16px',
                                                                                    lineHeight: '19.2px',
                                                                                }}>$299.96</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr
                                                                        className="horizontalLineStyle"
                                                                    />
                                                                    <div
                                                                        className="row"
                                                                        style={{
                                                                            marginTop: "38px",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="col"
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "600",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "20px",
                                                                                    LineHeight: "24px",
                                                                                }}
                                                                            >
                                                                                Total
                                                                            </span>
                                                                        </div>
                                                                        <div className="col" style={{ textAlign: "right" }}>
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "600",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "20px",
                                                                                    LineHeight: "24px",
                                                                                }}
                                                                            >
                                                                                $599.91
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="row"
                                                                        style={{ width: "-webkit-fill-available", marginTop: '35px' }}
                                                                    >
                                                                        <button
                                                                            onClick={toggleMyViewSamuelOrderStatusModal}
                                                                            style={{
                                                                                width: "125px",
                                                                                height: "48px",
                                                                                backgroundColor: "#FFFFFF",
                                                                                color: "black !important",
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}
                                                                        >
                                                                            CLOSE
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Modal>
                                                        {/* MODAL CLOSED */}
                                                    </div>
                                                    <div className="printerIconStyling">
                                                        <Image
                                                            alt="printer-icon"
                                                            src="/printer-icon.svg"
                                                            width={24}
                                                            height={24}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </TabPanel>
                        <TabPanel value={tabsValue} index={1}>
                            <div
                                style={{
                                    paddingTop: "40px",
                                    paddingBottom: "30px",
                                    paddingRight: "40px",
                                }}
                            >
                                <span
                                    className="teamViewFontColor"
                                    style={{
                                        fontFamily: "Lato",
                                        fontSize: "20px",
                                        lineHeight: "24px",
                                        fontWeight: "400",
                                    }}
                                >
                                    Today's in-store pickup orders.
                                </span>
                            </div>
                            <Table className='teamViewFontColor' style={{ marginTop: '9px' }}>
                                <thead
                                    style={{ backgroundColor: "#F0F0F0", lineHeight: "50px" }}
                                >
                                    <tr className="tableHeadingStyling">
                                        <th>SALES ASSOCIATE</th>
                                        <th>ASSIGN</th>
                                        <th>PICKUP SCHEDULE</th>
                                        <th>CUSTOMER NAME</th>
                                        <th>ORDER ID</th>
                                        <th>AISLE DETAILS</th>
                                        <th>ORDER STATUS</th>
                                        <th className='spaceBetweenPrinterIcon'>DETAILS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* first row */}
                                    <tr className="tableRowStyling">
                                        <td className="salesAssociateColumn">Martha Williams</td>
                                        <td className="trCustomerColumnStyling">
                                            <Image
                                                alt="assign-icon"
                                                src="/assign-icon.svg"
                                                width={24}
                                                height={24}
                                                onClick={toggleViewChrisAssignment1}
                                            />
                                            {/* MODEL STARTS HERE */}
                                            <Modal
                                                isOpen={isChrisAssignmentOpen1}
                                                ariaHideApp={false}
                                                onRequestClose={toggleViewChrisAssignment1}
                                                contentLabel="dialogForAssigningChris"
                                                overlayClassName="myoverlayForAssigningChris"
                                                style={customStyleForAssigningChris}
                                            >
                                                <div className="container">
                                                    <div style={{ width: "352px" }}>
                                                        <div style={{ padding: "0% !important" }}>
                                                            <div className='block'>
                                                                <div>
                                                                    <label style-htmlFor="radioA"></label>
                                                                    <input type="radio" name="radio1" value="Chris" />
                                                                    <span className='name'>Chris</span>
                                                                </div>
                                                                <div className='spacingBetweenRadios'>
                                                                    <label htmlFor="radioB"></label>
                                                                    <input type="radio" name="radio1" value="James" />
                                                                    <span className='name'>James </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{
                                                                paddingTop: "19px",
                                                                paddingLeft: "12px",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    fontFamily: "Lato",
                                                                    fontWeight: "700",
                                                                    fontSize: "14px",
                                                                    lineHeight: "16.8px",
                                                                }}
                                                            >
                                                                Add comments
                                                            </span>
                                                        </div>
                                                        <div
                                                            className="container textAreaColumn"
                                                        >
                                                            <TextArea
                                                                placeholder='Comments from sales associate'
                                                                style={{
                                                                    minHeight: 120,
                                                                    width: 352,
                                                                    paddingLeft: 16,
                                                                    paddingTop: 16,
                                                                    color: "#545454",
                                                                    fontSize: 14,
                                                                }} />
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{ paddingTop: "19px" }}
                                                        >
                                                            <button
                                                                onClick={toggleViewChrisAssignment1}
                                                                style={{
                                                                    width: "115px",
                                                                    height: "48px",
                                                                    marginLeft: "10px",
                                                                    backgroundColor: "#000000",
                                                                    color: "#FFFFFF",
                                                                }}
                                                            >
                                                                ASSIGN
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>
                                            {/* MODAL CLOSED */}
                                        </td>
                                        <td className="pickupScheduleColumn">
                                            Mar 8, 10 am
                                        </td>
                                        <td className="customerNameColumn">
                                            Julie Jefferson
                                        </td>
                                        <td className="normalColumn">
                                            #33655
                                        </td>
                                        <td className="normalColumn">
                                            Rack #1 - 13
                                        </td>
                                        <td>
                                            <div className="viewButton">
                                                <button
                                                    type="button"
                                                    style={{
                                                        backgroundColor: "#FFFAEB",
                                                        color: "#B54708",
                                                        border: "1px solid #DC6803",
                                                        lineHeight: "19.2px",
                                                        height: "32px",
                                                        fontFamily: 'Lato !important'
                                                    }}
                                                >
                                                    <span className='readyForPickupButtonStyle'>
                                                        Ready For Pickup
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='row'>
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <button
                                                        className="thFontColor"
                                                        type="button"
                                                        onClick={toggleTeamViewJulieViewDetailsOpen}
                                                        style={{
                                                            backgroundColor: "#FFFFFF",
                                                            border: "1px solid black",
                                                            width: "70px",
                                                            height: "32px",
                                                            textAlign: "center",
                                                            lineHeight: '31px'
                                                        }}
                                                    >
                                                        View
                                                    </button>
                                                    {/* MODEL STARTS HERE */}
                                                    <Modal
                                                        transparent={false}
                                                        isOpen={isTeamViewJulieViewDetailsOpen}
                                                        onRequestClose={toggleTeamViewJulieViewDetailsOpen}
                                                        ariaHideApp={false}
                                                        contentLabel="My dialog1"
                                                        overlayclassName="overlay"
                                                        style={customStylesForPaulViewButton}
                                                    >
                                                        <div
                                                            style={{
                                                                margin: '64px',
                                                                width: "-webkit-fill-available",
                                                                paddingLeft: '0% !important',
                                                                paddingRight: '0% !important'
                                                            }}
                                                        >
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ margin: "0% !important" }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily: "Lato",
                                                                        fontSize: "31px",
                                                                        lineHeight: "37.2px",
                                                                        color: "#000000",
                                                                    }}
                                                                >
                                                                    ORDER DETAILS
                                                                </span>
                                                            </div>
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ paddingTop: "20px", paddingLeft: '0% !important' }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily: "Lato",
                                                                        fontSize: "20px",
                                                                        lineHeight: "24px",
                                                                    }}
                                                                >
                                                                    <b>Julie Jefferson</b> #33655
                                                                </span>

                                                                <div
                                                                    style={{
                                                                        paddingTop: "10px",
                                                                        paddingBottom: "10px",
                                                                        width: "100%",
                                                                        paddingLeft: "0% !important",
                                                                        marginLeft: "0% !important",
                                                                        marginTop: "0% !important",
                                                                        marginBottom: "0% !important",
                                                                    }}
                                                                >
                                                                    <hr
                                                                        style={{
                                                                            width: "472px",
                                                                            float: "none",
                                                                            marginLeft: "0% !important",
                                                                            marginTop: "0% !important",
                                                                            marginBottom: "0% !important",
                                                                        }}
                                                                    />
                                                                </div>
                                                                {/* ORDER DETAILS SECTION */}
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontWeight: "600",
                                                                            fontStyle: "normal",
                                                                            fontSize: "20px",
                                                                            LineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        Items(2)
                                                                    </span>
                                                                </div>
                                                                {/* product column */}
                                                                {/* product1 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "24px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item1"
                                                                            src="/item1.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row itemsStyling" style={{ marginLeft: '24px !important' }}>
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Signature Oval Dutch Oven,
                                                                                8 qt.1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row itemsStyling"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "24px !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6823835 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                {/* product2 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "40px",
                                                                        paddingLeft: "0% !important",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item2"
                                                                            src="/item2.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row>">
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Multifunction Pan, 2.5 qt.
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row skuRow"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "0% !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6825137 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "38px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col"
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            Total
                                                                        </span>
                                                                    </div>
                                                                    <div className="col" style={{ textAlign: "right" }}>
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            $599.91
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="row"
                                                                    style={{ width: "-webkit-fill-available", marginTop: '42px' }}
                                                                >
                                                                    <button
                                                                        onClick={toggleTeamViewJulieViewDetailsOpen}
                                                                        style={{
                                                                            width: "125px",
                                                                            height: "48px",
                                                                            backgroundColor: "#FFFFFF",
                                                                            color: "black !important",
                                                                            fontWeight: '700',
                                                                            fontSize: '16px',
                                                                            lineHeight: '19.2px',
                                                                        }}
                                                                    >
                                                                        CLOSE
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Modal>
                                                    {/* MODAL CLOSED */}
                                                </div>
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <Image
                                                        alt="printer-icon"
                                                        src="/printer-icon.svg"
                                                        width={24}
                                                        height={24}
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        data-bs-whatever="@mdo"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* second row */}
                                    <tr className="tableRowStyling">
                                        <td className="salesAssociateColumn">Martha Williams</td>
                                        <td className="trCustomerColumnStyling">
                                            <Image
                                                alt="assign-icon"
                                                src="/assign-icon.svg"
                                                width={24}
                                                height={24}
                                                onClick={toggleViewChrisAssignment1}
                                            />
                                            {/* MODEL STARTS HERE */}
                                            <Modal
                                                isOpen={isChrisAssignmentOpen1}
                                                ariaHideApp={false}
                                                onRequestClose={toggleViewChrisAssignment1}
                                                contentLabel="dialogForAssigningChris"
                                                overlayClassName="myoverlayForAssigningChris"
                                                style={customStyleForAssigningChris}
                                            >
                                                <div className="container">
                                                    <div style={{ width: "352px" }}>
                                                        <div style={{ padding: "0% !important" }}>
                                                            <div className='block'>
                                                                <div>
                                                                    <label style-htmlFor="radioA"></label>
                                                                    <input type="radio" name="radio1" value="Chris" />
                                                                    <span className='name'>Chris</span>
                                                                </div>
                                                                <div className='spacingBetweenRadios'>
                                                                    <label htmlFor="radioB"></label>
                                                                    <input type="radio" name="radio1" value="James" />
                                                                    <span className='name'>James </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{
                                                                paddingTop: "19px",
                                                                paddingLeft: "12px",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    fontFamily: "Lato",
                                                                    fontWeight: "700",
                                                                    fontSize: "14px",
                                                                    lineHeight: "16.8px",
                                                                }}
                                                            >
                                                                Add comments
                                                            </span>
                                                        </div>
                                                        <div
                                                            className="textAreaColumn"

                                                        >
                                                            <TextArea
                                                                placeholder='Comments from sales associate'
                                                                style={{
                                                                    minHeight: 120,
                                                                    width: 352,
                                                                    paddingLeft: 16,
                                                                    paddingTop: 16,
                                                                    color: "#545454",
                                                                    fontSize: 14,
                                                                }} />
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{ paddingTop: "19px" }}
                                                        >
                                                            <button
                                                                onClick={toggleViewChrisAssignment1}
                                                                style={{
                                                                    width: "115px",
                                                                    height: "48px",
                                                                    marginLeft: "10px",
                                                                    backgroundColor: "#000000",
                                                                    color: "#FFFFFF",
                                                                }}
                                                            >
                                                                ASSIGN
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>
                                            {/* MODAL CLOSED */}
                                        </td>
                                        <td className="pickupScheduleColumn">
                                            Mar 8, 11 am
                                        </td>
                                        <td className="customerNameColumn">
                                            Stephen Salvator &nbsp;
                                            <Popup
                                                style={ExclamationPopUpStyle}
                                                trigger={
                                                    <Image
                                                        alt="exclamatory-mark-icon"
                                                        src="/exclamatory-mark-icon.svg"
                                                        width={20}
                                                        height={20}
                                                    />
                                                }
                                                content="Marko is nominated to pick up this order"
                                                position="right center"
                                            />
                                        </td>
                                        <td className="normalColumn">
                                            #95492
                                        </td>
                                        <td className="normalColumn">
                                            Rack #8 - 23
                                        </td>
                                        <td>
                                            <div className="viewButton">
                                                <button
                                                    type="button"
                                                    style={{
                                                        backgroundColor: "#FFFAEB",
                                                        color: "#B54708",
                                                        border: "1px solid #DC6803",
                                                        lineHeight: "19.2px",
                                                        height: "32px",
                                                        fontFamily: 'Lato !important'
                                                    }}
                                                >
                                                    <span className='readyForPickupButtonStyle'>
                                                        Ready For Pickup
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='row'>
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <button
                                                        className="thFontColor"
                                                        type="button"
                                                        onClick={toggleTeamViewStephenViewDetailsOpen}
                                                        style={{
                                                            backgroundColor: "#FFFFFF",
                                                            border: "1px solid black",
                                                            width: "70px",
                                                            height: "32px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        View
                                                    </button>
                                                    {/* MODEL STARTS HERE */}
                                                    <Modal
                                                        transparent={false}
                                                        isOpen={isTeamViewStephenViewDetailsOpen}
                                                        onRequestClose={toggleTeamViewStephenViewDetailsOpen}
                                                        ariaHideApp={false}
                                                        contentLabel="My dialog1"
                                                        overlayclassName="overlay"
                                                        style={customStylesForPaulViewButton}
                                                    >
                                                        <div
                                                            style={{
                                                                margin: '64px',
                                                                width: "-webkit-fill-available",
                                                                paddingLeft: '0% !important',
                                                                paddingRight: '0% !important'
                                                            }}
                                                        >
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ margin: "0% !important" }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily: "Lato",
                                                                        fontSize: "31px",
                                                                        lineHeight: "37.2px",
                                                                        color: "#000000",
                                                                    }}
                                                                >
                                                                    ORDER DETAILS
                                                                </span>
                                                            </div>
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ paddingTop: "20px", paddingLeft: '0% !important' }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily: "Lato",
                                                                        fontSize: "20px",
                                                                        lineHeight: "24px",
                                                                    }}
                                                                >
                                                                    <b>Stephen Salvator</b> #95492
                                                                </span>

                                                                <div
                                                                    style={{
                                                                        paddingTop: "10px",
                                                                        paddingBottom: "10px",
                                                                        width: "100%",
                                                                        paddingLeft: "0% !important",
                                                                        marginLeft: "0% !important",
                                                                        marginTop: "0% !important",
                                                                        marginBottom: "0% !important",
                                                                    }}
                                                                >
                                                                    <hr
                                                                        style={{
                                                                            width: "472px",
                                                                            float: "none",
                                                                            marginLeft: "0% !important",
                                                                            marginTop: "0% !important",
                                                                            marginBottom: "0% !important",
                                                                        }}
                                                                    />
                                                                </div>
                                                                {/* ORDER DETAILS SECTION */}
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontWeight: "600",
                                                                            fontStyle: "normal",
                                                                            fontSize: "20px",
                                                                            LineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        Items(2)
                                                                    </span>
                                                                </div>
                                                                {/* product column */}
                                                                {/* product1 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "24px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item1"
                                                                            src="/item1.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row itemsStyling" style={{ marginLeft: '24px !important' }}>
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Signature Oval Dutch Oven,
                                                                                8 qt.1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row itemsStyling"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "24px !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6823835 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                {/* product2 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "40px",
                                                                        paddingLeft: "0% !important",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item2"
                                                                            src="/item2.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row>">
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Multifunction Pan, 2.5 qt.
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row skuRow"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "0% !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6825137 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "38px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col"
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            Total
                                                                        </span>
                                                                    </div>
                                                                    <div className="col" style={{ textAlign: "right" }}>
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            $599.91
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="row"
                                                                    style={{ width: "-webkit-fill-available", marginTop: '42px' }}
                                                                >
                                                                    <button
                                                                        onClick={toggleTeamViewStephenViewDetailsOpen}
                                                                        style={{
                                                                            width: "125px",
                                                                            height: "48px",
                                                                            backgroundColor: "#FFFFFF",
                                                                            color: "black !important",
                                                                            fontWeight: '700',
                                                                            fontSize: '16px',
                                                                            lineHeight: '19.2px',
                                                                        }}
                                                                    >
                                                                        CLOSE
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Modal>
                                                    {/* MODAL CLOSED */}
                                                </div>
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <Image
                                                        alt="printer-icon"
                                                        src="/printer-icon.svg"
                                                        width={24}
                                                        height={24}
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        data-bs-whatever="@mdo"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* third row */}
                                    <tr className="tableRowStyling">
                                        <td className="salesAssociateColumn">Martha Williams</td>
                                        <td className="trCustomerColumnStyling">
                                            <Image
                                                alt="assign-icon"
                                                src="/assign-icon.svg"
                                                width={24}
                                                height={24}
                                                onClick={toggleViewChrisAssignment1}
                                            />
                                            {/* MODEL STARTS HERE */}
                                            <Modal
                                                isOpen={isChrisAssignmentOpen1}
                                                ariaHideApp={false}
                                                onRequestClose={toggleViewChrisAssignment1}
                                                contentLabel="dialogForAssigningChris"
                                                overlayClassName="myoverlayForAssigningChris"
                                                style={customStyleForAssigningChris}
                                            >
                                                <div className="container">
                                                    <div style={{ width: "352px" }}>
                                                        <div style={{ padding: "0% !important" }}>
                                                            <div className='block'>
                                                                <div>
                                                                    <label style-htmlFor="radioA"></label>
                                                                    <input type="radio" name="radio1" value="Chris" />
                                                                    <span className='name'>Chris</span>
                                                                </div>
                                                                <div className='spacingBetweenRadios'>
                                                                    <label htmlFor="radioB"></label>
                                                                    <input type="radio" name="radio1" value="James" />
                                                                    <span className='name'>James </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{
                                                                paddingTop: "19px",
                                                                paddingLeft: "12px",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    fontFamily: "Lato",
                                                                    fontWeight: "700",
                                                                    fontSize: "14px",
                                                                    lineHeight: "16.8px",
                                                                }}
                                                            >
                                                                Add comments
                                                            </span>
                                                        </div>
                                                        <div
                                                            className="textAreaColumn"
                                                        >
                                                            <TextArea
                                                                placeholder='Comments from sales associate'
                                                                style={{
                                                                    minHeight: 120,
                                                                    width: 352,
                                                                    paddingLeft: 16,
                                                                    paddingTop: 16,
                                                                    color: "#545454",
                                                                    fontSize: 14,
                                                                }} />
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{ paddingTop: "19px" }}
                                                        >
                                                            <button
                                                                onClick={toggleViewChrisAssignment1}
                                                                style={{
                                                                    width: "115px",
                                                                    height: "48px",
                                                                    marginLeft: "10px",
                                                                    backgroundColor: "#000000",
                                                                    color: "#FFFFFF",
                                                                }}
                                                            >
                                                                ASSIGN
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>
                                            {/* MODAL CLOSED */}
                                        </td>
                                        <td className="pickupScheduleColumn">
                                            Mar 8, 1 pm
                                        </td>
                                        <td className="customerNameColumn">
                                            Damon Gilbert
                                        </td>
                                        <td className="normalColumn highlightedItems">
                                            <span>#64578 &nbsp;</span>
                                            <Popup
                                                style={DollarPopUpStyle}
                                                trigger={
                                                    <Image
                                                        alt="dollar"
                                                        src="/dollar-logo.svg"
                                                        width={20}
                                                        height={20}
                                                    />
                                                }
                                                content="Payment pending"
                                                position="right center"
                                            />
                                        </td>
                                        <td className="normalColumn">
                                            Rack #2 - 10
                                        </td>
                                        <td>
                                            <div className="viewButton">
                                                <button
                                                    type="button"
                                                    style={{
                                                        backgroundColor: "#FFFAEB",
                                                        color: "#B54708",
                                                        border: "1px solid #DC6803",
                                                        lineHeight: "19.2px",
                                                        height: "32px",
                                                        fontFamily: 'Lato !important'
                                                    }}
                                                >
                                                    <span className='readyForPickupButtonStyle'>
                                                        Ready For Pickup
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="row">
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <button
                                                        className="thFontColor"
                                                        type="button"
                                                        onClick={toggleTeamViewDamonViewDetailsOpen}
                                                        style={{
                                                            backgroundColor: "#FFFFFF",
                                                            border: "1px solid black",
                                                            width: "70px",
                                                            height: "32px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        View
                                                    </button>
                                                    {/* MODEL STARTS HERE */}
                                                    <Modal
                                                        transparent={false}
                                                        isOpen={isTeamViewDamonViewDetailsOpen}
                                                        onRequestClose={toggleTeamViewDamonViewDetailsOpen}
                                                        ariaHideApp={false}
                                                        contentLabel="My dialog1"
                                                        overlayclassName="overlay"
                                                        style={customStylesForPaulViewButton}
                                                    >
                                                        <div
                                                            style={{
                                                                margin: '64px',
                                                                width: "-webkit-fill-available",
                                                                paddingLeft: '0% !important',
                                                                paddingRight: '0% !important'
                                                            }}
                                                        >
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ margin: "0% !important" }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily: "Lato",
                                                                        fontSize: "31px",
                                                                        lineHeight: "37.2px",
                                                                        color: "#000000",
                                                                    }}
                                                                >
                                                                    ORDER DETAILS
                                                                </span>
                                                            </div>
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ paddingTop: "20px", paddingLeft: '0% !important' }}
                                                            >
                                                                <div className="block">
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontSize: "20px",
                                                                            lineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        <b>Damon Gilbert</b> #64578
                                                                    </span>
                                                                    <button
                                                                        type="button"
                                                                        style={{
                                                                            marginLeft: '26px',
                                                                            backgroundColor: "#FEF3F2",
                                                                            color: "#D92D20",
                                                                            border: "1px solid #D92D20",
                                                                            fontWeight: '400',
                                                                            fontSize: '16px',
                                                                            lineHeight: "19.2px",
                                                                            height: "32px",
                                                                            width: '146px'
                                                                        }}
                                                                    >
                                                                        <span>
                                                                            Payment Pending
                                                                        </span>
                                                                    </button>
                                                                </div>


                                                                <div
                                                                    style={{
                                                                        paddingTop: "10px",
                                                                        paddingBottom: "10px",
                                                                        width: "100%",
                                                                        paddingLeft: "0% !important",
                                                                        marginLeft: "0% !important",
                                                                        marginTop: "0% !important",
                                                                        marginBottom: "0% !important",
                                                                    }}
                                                                >
                                                                    <hr
                                                                        style={{
                                                                            width: "472px",
                                                                            float: "none",
                                                                            marginLeft: "0% !important",
                                                                            marginTop: "0% !important",
                                                                            marginBottom: "0% !important",
                                                                        }}
                                                                    />
                                                                </div>
                                                                {/* ORDER DETAILS SECTION */}
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontWeight: "600",
                                                                            fontStyle: "normal",
                                                                            fontSize: "20px",
                                                                            LineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        Items(2)
                                                                    </span>
                                                                </div>
                                                                {/* product column */}
                                                                {/* product1 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "24px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item1"
                                                                            src="/item1.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row itemsStyling" style={{ marginLeft: '24px !important' }}>
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Signature Oval Dutch Oven,
                                                                                8 qt.1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row itemsStyling"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "24px !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6823835 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                {/* product2 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "40px",
                                                                        paddingLeft: "0% !important",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item2"
                                                                            src="/item2.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row>">
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Multifunction Pan, 2.5 qt.
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row skuRow"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "0% !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6825137 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "38px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col"
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            Total
                                                                        </span>
                                                                    </div>
                                                                    <div className="col" style={{ textAlign: "right" }}>
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            $599.91
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="row"
                                                                    style={{ width: "-webkit-fill-available", marginTop: '42px' }}
                                                                >
                                                                    <button
                                                                        onClick={toggleTeamViewDamonViewDetailsOpen}
                                                                        style={{
                                                                            width: "125px",
                                                                            height: "48px",
                                                                            backgroundColor: "#FFFFFF",
                                                                            color: "black !important",
                                                                            fontWeight: '700',
                                                                            fontSize: '16px',
                                                                            lineHeight: '19.2px',
                                                                        }}
                                                                    >
                                                                        CLOSE
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Modal>
                                                    {/* MODAL CLOSED */}
                                                </div>
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <Image
                                                        alt="printer-icon"
                                                        src="/printer-icon.svg"
                                                        width={24}
                                                        height={24}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="tableRowStyling">
                                        <td className="salesAssociateColumn">Martha Williams</td>
                                        <td className="trCustomerColumnStyling">
                                            <Image
                                                alt="assign-icon"
                                                src="/assign-icon.svg"
                                                width={24}
                                                height={24}
                                                onClick={toggleViewChrisAssignment1}
                                            />
                                            {/* MODEL STARTS HERE */}
                                            <Modal
                                                isOpen={isChrisAssignmentOpen1}
                                                ariaHideApp={false}
                                                onRequestClose={toggleViewChrisAssignment1}
                                                contentLabel="dialogForAssigningChris"
                                                overlayClassName="myoverlayForAssigningChris"
                                                style={customStyleForAssigningChris}
                                            >
                                                <div className="container">
                                                    <div style={{ width: "352px" }}>
                                                        <div style={{ padding: "0% !important" }}>
                                                            <div className='block'>
                                                                <div>
                                                                    <label style-htmlFor="radioA"></label>
                                                                    <input type="radio" name="radio1" value="Chris" />
                                                                    <span className='name'>Chris</span>
                                                                </div>
                                                                <div className='spacingBetweenRadios'>
                                                                    <label htmlFor="radioB"></label>
                                                                    <input type="radio" name="radio1" value="James" />
                                                                    <span className='name'>James </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{
                                                                paddingTop: "19px",
                                                                paddingLeft: "12px",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    fontFamily: "Lato",
                                                                    fontWeight: "700",
                                                                    fontSize: "14px",
                                                                    lineHeight: "16.8px",
                                                                }}
                                                            >
                                                                Add comments
                                                            </span>
                                                        </div>
                                                        <div
                                                            className="textAreaColumn"
                                                        >
                                                            <TextArea
                                                                placeholder='Comments from sales associate'
                                                                style={{
                                                                    minHeight: 120,
                                                                    width: 352,
                                                                    paddingLeft: 16,
                                                                    paddingTop: 16,
                                                                    color: "#545454",
                                                                    fontSize: 14,
                                                                }} />
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{ paddingTop: "19px" }}
                                                        >
                                                            <button
                                                                onClick={toggleViewChrisAssignment1}
                                                                style={{
                                                                    width: "115px",
                                                                    height: "48px",
                                                                    marginLeft: "10px",
                                                                    backgroundColor: "#000000",
                                                                    color: "#FFFFFF",
                                                                }}
                                                            >
                                                                ASSIGN
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>
                                            {/* MODAL CLOSED */}
                                        </td>
                                        <td className="pickupScheduleColumn">
                                            Mar 8, 2 pm
                                        </td>
                                        <td className="customerNameColumn">
                                            Elina Rockwood
                                        </td>
                                        <td className="normalColumn">
                                            #85892 &nbsp;
                                        </td>
                                        <td className="normalColumn">
                                            Rack #5 - 14
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                className="noShowDeclinedButtonStyle"
                                                style={{
                                                    width: '87px',
                                                    height: '32px'
                                                }}
                                            >
                                                No Show
                                            </button>{" "}
                                        </td>
                                        <td>
                                            <div className="row">
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <button
                                                        className="thFontColor"
                                                        type="button"
                                                        onClick={toggleTeamViewElinaViewDetailsOpen}
                                                        style={{
                                                            backgroundColor: "#FFFFFF",
                                                            border: "1px solid black",
                                                            width: "70px",
                                                            height: "32px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        View
                                                    </button>
                                                    {/* MODEL STARTS HERE */}
                                                    <Modal
                                                        transparent={false}
                                                        isOpen={isTeamViewElinaViewDetailsOpen}
                                                        onRequestClose={toggleTeamViewElinaViewDetailsOpen}
                                                        ariaHideApp={false}
                                                        contentLabel="My dialog1"
                                                        overlayclassName="overlay"
                                                        style={customStylesForPaulViewButton}
                                                    >
                                                        <div
                                                            style={{
                                                                margin: '64px',
                                                                width: "-webkit-fill-available",
                                                                paddingLeft: '0% !important',
                                                                paddingRight: '0% !important'
                                                            }}
                                                        >
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ margin: "0% !important" }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily: "Lato",
                                                                        fontSize: "31px",
                                                                        lineHeight: "37.2px",
                                                                        color: "#000000",
                                                                    }}
                                                                >
                                                                    ORDER DETAILS
                                                                </span>
                                                            </div>
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ paddingTop: "20px", paddingLeft: '0% !important' }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily: "Lato",
                                                                        fontSize: "20px",
                                                                        lineHeight: "24px",
                                                                    }}
                                                                >
                                                                    <b>Elina Rockwood</b> #85892
                                                                </span>

                                                                <div
                                                                    style={{
                                                                        paddingTop: "10px",
                                                                        paddingBottom: "10px",
                                                                        width: "100%",
                                                                        paddingLeft: "0% !important",
                                                                        marginLeft: "0% !important",
                                                                        marginTop: "0% !important",
                                                                        marginBottom: "0% !important",
                                                                    }}
                                                                >
                                                                    <hr
                                                                        style={{
                                                                            width: "472px",
                                                                            float: "none",
                                                                            marginLeft: "0% !important",
                                                                            marginTop: "0% !important",
                                                                            marginBottom: "0% !important",
                                                                        }}
                                                                    />
                                                                </div>
                                                                {/* ORDER DETAILS SECTION */}
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontWeight: "600",
                                                                            fontStyle: "normal",
                                                                            fontSize: "20px",
                                                                            LineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        Items(2)
                                                                    </span>
                                                                </div>
                                                                {/* product column */}
                                                                {/* product1 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "24px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item1"
                                                                            src="/item1.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row itemsStyling" style={{ marginLeft: '24px !important' }}>
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Signature Oval Dutch Oven,
                                                                                8 qt.1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row itemsStyling"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "24px !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6823835 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                {/* product2 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "40px",
                                                                        paddingLeft: "0% !important",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item2"
                                                                            src="/item2.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row>">
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Multifunction Pan, 2.5 qt.
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row skuRow"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "0% !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6825137<br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "38px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col"
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            Total
                                                                        </span>
                                                                    </div>
                                                                    <div className="col" style={{ textAlign: "right" }}>
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            $599.91
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="row"
                                                                    style={{ width: "-webkit-fill-available", marginTop: '42px' }}
                                                                >
                                                                    <button
                                                                        onClick={toggleTeamViewElinaViewDetailsOpen}
                                                                        style={{
                                                                            width: "125px",
                                                                            height: "48px",
                                                                            backgroundColor: "#FFFFFF",
                                                                            color: "black !important",
                                                                            fontWeight: '700',
                                                                            fontSize: '16px',
                                                                            lineHeight: '19.2px',
                                                                        }}
                                                                    >
                                                                        CLOSE
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Modal>
                                                    {/* MODAL CLOSED */}
                                                </div>
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <Image
                                                        alt="printer-icon"
                                                        src="/printer-icon.svg"
                                                        width={24}
                                                        height={24}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                    </tr >
                                    <tr className="tableRowStyling">
                                        <td className="salesAssociateColumn">Martha Williams</td>
                                        <td className="trCustomerColumnStyling">
                                            <Image
                                                alt="assign-icon"
                                                src="/assign-icon.svg"
                                                width={24}
                                                height={24}
                                                onClick={toggleViewChrisAssignment1}
                                            />
                                            {/* MODEL STARTS HERE */}
                                            <Modal
                                                isOpen={isChrisAssignmentOpen1}
                                                ariaHideApp={false}
                                                onRequestClose={toggleViewChrisAssignment1}
                                                contentLabel="dialogForAssigningChris"
                                                overlayClassName="myoverlayForAssigningChris"
                                                style={customStyleForAssigningChris}
                                            >
                                                <div className="container">
                                                    <div style={{ width: "352px" }}>
                                                        <div style={{ padding: "0% !important" }}>
                                                            <div className='block'>
                                                                <div>
                                                                    <label style-htmlFor="radioA"></label>
                                                                    <input type="radio" name="radio1" value="Chris" />
                                                                    <span className='name'>Chris</span>
                                                                </div>
                                                                <div className='spacingBetweenRadios'>
                                                                    <label htmlFor="radioB"></label>
                                                                    <input type="radio" name="radio1" value="James" />
                                                                    <span className='name'>James </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{
                                                                paddingTop: "19px",
                                                                paddingLeft: "12px",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    fontFamily: "Lato",
                                                                    fontWeight: "700",
                                                                    fontSize: "14px",
                                                                    lineHeight: "16.8px",
                                                                }}
                                                            >
                                                                Add comments
                                                            </span>
                                                        </div>
                                                        <div
                                                            className="textAreaColumn"
                                                        >
                                                            <TextArea
                                                                placeholder='Comments from sales associate'
                                                                style={{
                                                                    minHeight: 120,
                                                                    width: 352,
                                                                    paddingLeft: 16,
                                                                    paddingTop: 16,
                                                                    color: "#545454",
                                                                    fontSize: 14,
                                                                }} />
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{ paddingTop: "19px" }}
                                                        >
                                                            <button
                                                                onClick={toggleViewChrisAssignment1}
                                                                style={{
                                                                    width: "115px",
                                                                    height: "48px",
                                                                    marginLeft: "10px",
                                                                    backgroundColor: "#000000",
                                                                    color: "#FFFFFF",
                                                                }}
                                                            >
                                                                ASSIGN
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>
                                            {/* MODAL CLOSED */}
                                        </td>
                                        <td className="pickupScheduleColumn">
                                            Mar 8, 4 pm
                                        </td>
                                        <td className="customerNameColumn">
                                            Samuel Gomes
                                        </td>
                                        <td className="normalColumn">
                                            #98771 &nbsp;
                                        </td>
                                        <td className="normalColumn">
                                            Rack #5 - 18
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                className="noShowDeclinedButtonStyle"
                                                style={{
                                                    width: '87px',
                                                    height: '32px'
                                                }}
                                            >
                                                Declined
                                            </button>{" "}
                                        </td>
                                        <td>
                                            <div className="row">
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <button
                                                        className="thFontColor"
                                                        type="button"
                                                        onClick={toggleTeamViewSamuelViewDetailsOpen}
                                                        style={{
                                                            backgroundColor: "#FFFFFF",
                                                            border: "1px solid black",
                                                            width: "70px",
                                                            height: "32px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        View
                                                    </button>
                                                    {/* MODEL STARTS HERE */}
                                                    <Modal
                                                        transparent={false}
                                                        isOpen={isTeamViewSamuelViewDetailsOpen}
                                                        onRequestClose={toggleTeamViewSamuelViewDetailsOpen}
                                                        ariaHideApp={false}
                                                        contentLabel="My dialog1"
                                                        overlayclassName="overlay"
                                                        style={customStylesForPaulViewButton}
                                                    >
                                                        <div
                                                            style={{
                                                                margin: '64px',
                                                                width: "-webkit-fill-available",
                                                                paddingLeft: '0% !important',
                                                                paddingRight: '0% !important'
                                                            }}
                                                        >
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ margin: "0% !important" }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily: "Lato",
                                                                        fontSize: "31px",
                                                                        lineHeight: "37.2px",
                                                                        color: "#000000",
                                                                    }}
                                                                >
                                                                    ORDER DETAILS
                                                                </span>
                                                            </div>
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ paddingTop: "20px", paddingLeft: '0% !important' }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily: "Lato",
                                                                        fontSize: "20px",
                                                                        lineHeight: "24px",
                                                                    }}
                                                                >
                                                                    <b>Samuel Gomes</b> #98771
                                                                </span>

                                                                <div
                                                                    style={{
                                                                        paddingTop: "10px",
                                                                        paddingBottom: "10px",
                                                                        width: "100%",
                                                                        paddingLeft: "0% !important",
                                                                        marginLeft: "0% !important",
                                                                        marginTop: "0% !important",
                                                                        marginBottom: "0% !important",
                                                                    }}
                                                                >
                                                                    <hr
                                                                        style={{
                                                                            width: "472px",
                                                                            float: "none",
                                                                            marginLeft: "0% !important",
                                                                            marginTop: "0% !important",
                                                                            marginBottom: "0% !important",
                                                                        }}
                                                                    />
                                                                </div>
                                                                {/* ORDER DETAILS SECTION */}
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontWeight: "600",
                                                                            fontStyle: "normal",
                                                                            fontSize: "20px",
                                                                            LineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        Items(2)
                                                                    </span>
                                                                </div>
                                                                {/* product column */}
                                                                {/* product1 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "24px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item1"
                                                                            src="/item1.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row itemsStyling" style={{ marginLeft: '24px !important' }}>
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Signature Oval Dutch Oven,
                                                                                8 qt.1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row itemsStyling"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "24px !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6823835 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                {/* product2 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "40px",
                                                                        paddingLeft: "0% !important",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item2"
                                                                            src="/item2.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row>">
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Multifunction Pan, 2.5 qt.
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row skuRow"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "0% !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6825137 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "38px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col"
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            Total
                                                                        </span>
                                                                    </div>
                                                                    <div className="col" style={{ textAlign: "right" }}>
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            $599.91
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="row"
                                                                    style={{ width: "-webkit-fill-available", marginTop: '42px' }}
                                                                >
                                                                    <button
                                                                        onClick={toggleTeamViewSamuelViewDetailsOpen}
                                                                        style={{
                                                                            width: "125px",
                                                                            height: "48px",
                                                                            backgroundColor: "#FFFFFF",
                                                                            color: "black !important",
                                                                            fontWeight: '700',
                                                                            fontSize: '16px',
                                                                            lineHeight: '19.2px',
                                                                        }}
                                                                    >
                                                                        CLOSE
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Modal>
                                                    {/* MODAL CLOSED */}
                                                </div>
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <Image
                                                        alt="printer-icon"
                                                        src="/printer-icon.svg"
                                                        width={24}
                                                        height={24}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="tableRowStyling">
                                        <td className="salesAssociateColumn">Chris Neo</td>
                                        <td className="trCustomerColumnStyling">
                                            <Image
                                                alt="assign-icon"
                                                src="/assign-icon.svg"
                                                width={24}
                                                height={24}
                                                onClick={toggleViewChrisAssignment1}
                                            />
                                            {/* MODEL STARTS HERE */}
                                            <Modal
                                                isOpen={isChrisAssignmentOpen1}
                                                ariaHideApp={false}
                                                onRequestClose={toggleViewChrisAssignment1}
                                                contentLabel="dialogForAssigningChris"
                                                overlayClassName="myoverlayForAssigningChris"
                                                style={customStyleForAssigningChris}
                                            >
                                                <div className="container">
                                                    <div style={{ width: "352px" }}>
                                                        <div style={{ padding: "0% !important" }}>
                                                            <div className='block'>
                                                                <div>
                                                                    <label style-htmlFor="radioA"></label>
                                                                    <input type="radio" name="radio1" value="Chris" />
                                                                    <span className='name'>Chris</span>
                                                                </div>
                                                                <div className='spacingBetweenRadios'>
                                                                    <label htmlFor="radioB"></label>
                                                                    <input type="radio" name="radio1" value="James" />
                                                                    <span className='name'>James </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{
                                                                paddingTop: "19px",
                                                                paddingLeft: "12px",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    fontFamily: "Lato",
                                                                    fontWeight: "700",
                                                                    fontSize: "14px",
                                                                    lineHeight: "16.8px",
                                                                }}
                                                            >
                                                                Add comments
                                                            </span>
                                                        </div>
                                                        <div
                                                            className="textAreaColumn"
                                                        >
                                                            <TextArea
                                                                placeholder='Comments from sales associate'
                                                                style={{
                                                                    minHeight: 120,
                                                                    width: 352,
                                                                    paddingLeft: 16,
                                                                    paddingTop: 16,
                                                                    color: "#545454",
                                                                    fontSize: 14,
                                                                }} />
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{ paddingTop: "19px" }}
                                                        >
                                                            <button
                                                                onClick={toggleViewChrisAssignment1}
                                                                style={{
                                                                    width: "115px",
                                                                    height: "48px",
                                                                    marginLeft: "10px",
                                                                    backgroundColor: "#000000",
                                                                    color: "#FFFFFF",
                                                                }}
                                                            >
                                                                ASSIGN
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>
                                            {/* MODAL CLOSED */}
                                        </td>
                                        <td className="pickupScheduleColumn">
                                            Mar 8, 1 pm
                                        </td>
                                        <td className="customerNameColumn ">
                                            Paul Wesley
                                        </td>
                                        <td className="normalColumn highlightedItems">
                                            <span>#96865 &nbsp;</span>
                                            <Popup
                                                style={DollarPopUpStyle}
                                                trigger={
                                                    <Image
                                                        alt="dollar"
                                                        src="/dollar-logo.svg"
                                                        width={20}
                                                        height={20}
                                                    />
                                                }
                                                content="Payment pending"
                                                position="right center"
                                            />
                                        </td>
                                        <td className="normalColumn">
                                            Rack #2 - 17
                                        </td>
                                        <td>
                                            <div className="viewButton">
                                                <button
                                                    type="button"
                                                    style={{
                                                        backgroundColor: "#FFFAEB",
                                                        color: "#B54708",
                                                        border: "1px solid #DC6803",
                                                        lineHeight: "19.2px",
                                                        height: "32px",
                                                        fontFamily: 'Lato !important'
                                                    }}
                                                >
                                                    <span className='readyForPickupButtonStyle'>
                                                        Ready For Pickup
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="row">
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <button
                                                        className="thFontColor"
                                                        type="button"
                                                        onClick={toggleTeamViewPaulViewDetailsOpen}
                                                        style={{
                                                            backgroundColor: "#FFFFFF",
                                                            border: "1px solid black",
                                                            width: "70px",
                                                            height: "32px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        View
                                                    </button>
                                                    {/* MODEL STARTS HERE */}
                                                    <Modal
                                                        transparent={false}
                                                        isOpen={isTeamViewPaulViewDetailsOpen}
                                                        onRequestClose={toggleTeamViewPaulViewDetailsOpen}
                                                        ariaHideApp={false}
                                                        contentLabel="My dialog1"
                                                        overlayclassName="overlay"
                                                        style={customStylesForPaulViewButton}
                                                    >
                                                        <div
                                                            style={{
                                                                margin: '64px',
                                                                width: "-webkit-fill-available",
                                                                paddingLeft: '0% !important',
                                                                paddingRight: '0% !important'
                                                            }}
                                                        >
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ margin: "0% !important" }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily: "Lato",
                                                                        fontSize: "31px",
                                                                        lineHeight: "37.2px",
                                                                        color: "#000000",
                                                                    }}
                                                                >
                                                                    ORDER DETAILS
                                                                </span>
                                                            </div>
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ paddingTop: "20px", paddingLeft: '0% !important' }}
                                                            >
                                                                <div className='block'>

                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontSize: "20px",
                                                                            lineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        <b>Paul Wesley</b> #96865
                                                                    </span>
                                                                    <button
                                                                        type="button"
                                                                        style={{
                                                                            marginLeft: '26px',
                                                                            backgroundColor: "#FEF3F2",
                                                                            color: "#D92D20",
                                                                            border: "1px solid #D92D20",
                                                                            fontWeight: '400',
                                                                            fontSize: '16px',
                                                                            lineHeight: "19.2px",
                                                                            height: "32px",
                                                                            width: '146px'
                                                                        }}
                                                                    >
                                                                        <span>
                                                                            Payment Pending
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        paddingTop: "10px",
                                                                        paddingBottom: "10px",
                                                                        width: "100%",
                                                                        paddingLeft: "0% !important",
                                                                        marginLeft: "0% !important",
                                                                        marginTop: "0% !important",
                                                                        marginBottom: "0% !important",
                                                                    }}
                                                                >
                                                                    <hr
                                                                        style={{
                                                                            width: "472px",
                                                                            float: "none",
                                                                            marginLeft: "0% !important",
                                                                            marginTop: "0% !important",
                                                                            marginBottom: "0% !important",
                                                                        }}
                                                                    />
                                                                </div>
                                                                {/* ORDER DETAILS SECTION */}
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontWeight: "600",
                                                                            fontStyle: "normal",
                                                                            fontSize: "20px",
                                                                            LineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        Items(2)
                                                                    </span>
                                                                </div>
                                                                {/* product column */}
                                                                {/* product1 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "24px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item1"
                                                                            src="/item1.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row itemsStyling" style={{ marginLeft: '24px !important' }}>
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Signature Oval Dutch Oven,
                                                                                8 qt.1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row itemsStyling"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "24px !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6823835 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                {/* product2 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "40px",
                                                                        paddingLeft: "0% !important",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item2"
                                                                            src="/item2.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row>">
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Multifunction Pan, 2.5 qt.
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row skuRow"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "0% !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6825137 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "38px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col"
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            Total
                                                                        </span>
                                                                    </div>
                                                                    <div className="col" style={{ textAlign: "right" }}>
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            $599.91
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="row"
                                                                    style={{ width: "-webkit-fill-available", marginTop: '42px' }}
                                                                >
                                                                    <button
                                                                        onClick={toggleTeamViewPaulViewDetailsOpen}
                                                                        style={{
                                                                            width: "125px",
                                                                            height: "48px",
                                                                            backgroundColor: "#FFFFFF",
                                                                            color: "black !important",
                                                                            fontWeight: '700',
                                                                            fontSize: '16px',
                                                                            lineHeight: '19.2px',
                                                                        }}
                                                                    >
                                                                        CLOSE
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Modal>
                                                    {/* MODAL CLOSED */}
                                                </div>
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <Image
                                                        alt="printer-icon"
                                                        src="/printer-icon.svg"
                                                        width={24}
                                                        height={24}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="tableRowStyling">
                                        <td className="salesAssociateColumn">Chris Neo</td>
                                        <td className="trCustomerColumnStyling">
                                            <Image
                                                alt="assign-icon"
                                                src="/assign-icon.svg"
                                                width={24}
                                                height={24}
                                                onClick={toggleViewChrisAssignment1}
                                            />
                                            {/* MODEL STARTS HERE */}
                                            <Modal
                                                isOpen={isChrisAssignmentOpen1}
                                                ariaHideApp={false}
                                                onRequestClose={toggleViewChrisAssignment1}
                                                contentLabel="dialogForAssigningChris"
                                                overlayClassName="myoverlayForAssigningChris"
                                                style={customStyleForAssigningChris}
                                            >
                                                <div className="container">
                                                    <div style={{ width: "352px" }}>
                                                        <div style={{ padding: "0% !important" }}>
                                                            <div className='block'>
                                                                <div>
                                                                    <label style-htmlFor="radioA"></label>
                                                                    <input type="radio" name="radio1" value="Chris" />
                                                                    <span className='name'>Chris</span>
                                                                </div>
                                                                <div className='spacingBetweenRadios'>
                                                                    <label htmlFor="radioB"></label>
                                                                    <input type="radio" name="radio1" value="James" />
                                                                    <span className='name'>James </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{
                                                                paddingTop: "19px",
                                                                paddingLeft: "12px",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    fontFamily: "Lato",
                                                                    fontWeight: "700",
                                                                    fontSize: "14px",
                                                                    lineHeight: "16.8px",
                                                                }}
                                                            >
                                                                Add comments
                                                            </span>
                                                        </div>
                                                        <div
                                                            className="textAreaColumn"
                                                        >
                                                            <TextArea
                                                                placeholder='Comments from sales associate'
                                                                style={{
                                                                    minHeight: 120,
                                                                    width: 352,
                                                                    paddingLeft: 16,
                                                                    paddingTop: 16,
                                                                    color: "#545454",
                                                                    fontSize: 14,
                                                                }} />
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{ paddingTop: "19px" }}
                                                        >
                                                            <button
                                                                onClick={toggleViewChrisAssignment1}
                                                                style={{
                                                                    width: "115px",
                                                                    height: "48px",
                                                                    marginLeft: "10px",
                                                                    backgroundColor: "#000000",
                                                                    color: "#FFFFFF",
                                                                }}
                                                            >
                                                                ASSIGN
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>
                                            {/* MODAL CLOSED */}
                                        </td>
                                        <td className="pickupScheduleColumn">
                                            Mar 8, 2 pm
                                        </td>
                                        <td className="customerNameColumn">
                                            Nina Dobrey
                                        </td>
                                        <td className="normalColumn">
                                            <span>#74060 &nbsp;</span>
                                        </td>
                                        <td className="normalColumn">
                                            Rack #5 - 09
                                        </td>
                                        <td>
                                            <div className="viewButton">
                                                <button
                                                    type="button"
                                                    style={{
                                                        backgroundColor: "#FFFAEB",
                                                        color: "#B54708",
                                                        border: "1px solid #DC6803",
                                                        lineHeight: "19.2px",
                                                        height: "32px",
                                                        fontFamily: 'Lato !important'
                                                    }}
                                                >
                                                    <span className='readyForPickupButtonStyle'>
                                                        Ready For Pickup
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="row">
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <button
                                                        className="thFontColor"
                                                        type="button"
                                                        onClick={toggleTeamViewNinaViewDetailsOpen}
                                                        style={{
                                                            backgroundColor: "#FFFFFF",
                                                            border: "1px solid black",
                                                            width: "70px",
                                                            height: "32px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        View
                                                    </button>
                                                    {/* MODEL STARTS HERE */}
                                                    <Modal
                                                        transparent={false}
                                                        isOpen={isTeamViewNinaViewDetailsOpen}
                                                        onRequestClose={toggleTeamViewNinaViewDetailsOpen}
                                                        ariaHideApp={false}
                                                        contentLabel="My dialog1"
                                                        overlayclassName="overlay"
                                                        style={customStylesForPaulViewButton}
                                                    >
                                                        <div
                                                            style={{
                                                                margin: '64px',
                                                                width: "-webkit-fill-available",
                                                                paddingLeft: '0% !important',
                                                                paddingRight: '0% !important'
                                                            }}
                                                        >
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ margin: "0% !important" }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily: "Lato",
                                                                        fontSize: "31px",
                                                                        lineHeight: "37.2px",
                                                                        color: "#000000",
                                                                    }}
                                                                >
                                                                    ORDER DETAILS
                                                                </span>
                                                            </div>
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ paddingTop: "20px", paddingLeft: '0% !important' }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily: "Lato",
                                                                        fontSize: "20px",
                                                                        lineHeight: "24px",
                                                                    }}
                                                                >
                                                                    <b>Nina Dobrey</b> #74060
                                                                </span>

                                                                <div
                                                                    style={{
                                                                        paddingTop: "10px",
                                                                        paddingBottom: "10px",
                                                                        width: "100%",
                                                                        paddingLeft: "0% !important",
                                                                        marginLeft: "0% !important",
                                                                        marginTop: "0% !important",
                                                                        marginBottom: "0% !important",
                                                                    }}
                                                                >
                                                                    <hr
                                                                        style={{
                                                                            width: "472px",
                                                                            float: "none",
                                                                            marginLeft: "0% !important",
                                                                            marginTop: "0% !important",
                                                                            marginBottom: "0% !important",
                                                                        }}
                                                                    />
                                                                </div>
                                                                {/* ORDER DETAILS SECTION */}
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontWeight: "600",
                                                                            fontStyle: "normal",
                                                                            fontSize: "20px",
                                                                            LineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        Items(2)
                                                                    </span>
                                                                </div>
                                                                {/* product column */}
                                                                {/* product1 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "24px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item1"
                                                                            src="/item1.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row itemsStyling" style={{ marginLeft: '24px !important' }}>
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Signature Oval Dutch Oven,
                                                                                8 qt.1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row itemsStyling"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "24px !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6823835 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                {/* product2 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "40px",
                                                                        paddingLeft: "0% !important",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item2"
                                                                            src="/item2.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row>">
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Multifunction Pan, 2.5 qt.
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row skuRow"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "0% !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6825137 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "38px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col"
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            Total
                                                                        </span>
                                                                    </div>
                                                                    <div className="col" style={{ textAlign: "right" }}>
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            $599.91
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="row"
                                                                    style={{ width: "-webkit-fill-available", marginTop: '42px' }}
                                                                >
                                                                    <button
                                                                        onClick={toggleTeamViewNinaViewDetailsOpen}
                                                                        style={{
                                                                            width: "125px",
                                                                            height: "48px",
                                                                            backgroundColor: "#FFFFFF",
                                                                            color: "black !important",
                                                                            fontWeight: '700',
                                                                            fontSize: '16px',
                                                                            lineHeight: '19.2px',
                                                                        }}
                                                                    >
                                                                        CLOSE
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Modal>
                                                    {/* MODAL CLOSED */}
                                                </div>
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <Image
                                                        alt="printer-icon"
                                                        src="/printer-icon.svg"
                                                        width={24}
                                                        height={24}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="tableRowStyling">
                                        <td className="salesAssociateColumn">James S</td>
                                        <td className="trCustomerColumnStyling">
                                            <Image
                                                alt="assign-icon"
                                                src="/assign-icon.svg"
                                                width={24}
                                                height={24}
                                                onClick={toggleViewChrisAssignment1}
                                            />
                                            {/* MODEL STARTS HERE */}
                                            <Modal
                                                isOpen={isChrisAssignmentOpen1}
                                                ariaHideApp={false}
                                                onRequestClose={toggleViewChrisAssignment1}
                                                contentLabel="dialogForAssigningChris"
                                                overlayClassName="myoverlayForAssigningChris"
                                                style={customStyleForAssigningChris}
                                            >
                                                <div>
                                                    <div style={{ width: "352px" }}>
                                                        <div style={{ padding: "0% !important" }}>
                                                            <div className='block'>
                                                                <div>
                                                                    <label style-htmlFor="radioA"></label>
                                                                    <input type="radio" name="radio1" value="Chris" />
                                                                    <span className='name'>Chris</span>
                                                                </div>
                                                                <div className='spacingBetweenRadios'>
                                                                    <label htmlFor="radioB"></label>
                                                                    <input type="radio" name="radio1" value="James" />
                                                                    <span className='name'>James </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{
                                                                paddingTop: "19px",
                                                                paddingLeft: "12px",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    fontFamily: "Lato",
                                                                    fontWeight: "700",
                                                                    fontSize: "14px",
                                                                    lineHeight: "16.8px",
                                                                }}
                                                            >
                                                                Add comments
                                                            </span>
                                                        </div>
                                                        <div
                                                            className="textAreaColumn"
                                                        >
                                                            <TextArea
                                                                placeholder='Comments from sales associate'
                                                                style={{
                                                                    minHeight: 120,
                                                                    width: 352,
                                                                    paddingLeft: 16,
                                                                    paddingTop: 16,
                                                                    color: "#545454",
                                                                    fontSize: 14,
                                                                }} />
                                                        </div>
                                                        <div
                                                            className="row"
                                                            style={{ paddingTop: "19px" }}
                                                        >
                                                            <button
                                                                onClick={toggleViewChrisAssignment1}
                                                                style={{
                                                                    width: "115px",
                                                                    height: "48px",
                                                                    marginLeft: "10px",
                                                                    backgroundColor: "#000000",
                                                                    color: "#FFFFFF",
                                                                }}
                                                            >
                                                                ASSIGN
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>
                                            {/* MODAL CLOSED */}
                                        </td>
                                        <td className="pickupScheduleColumn">
                                            Mar 8, 2 pm
                                        </td>
                                        <td className="customerNameColumn">
                                            Ian Joseph
                                        </td>
                                        <td className="normalColumn">
                                            <span>#97036 &nbsp;</span>
                                        </td>
                                        <td className="normalColumn">
                                            Rack #5 - 01
                                        </td>
                                        <td>
                                            <div className="viewButton">
                                                <button
                                                    type="button"
                                                    style={{
                                                        backgroundColor: "#FFFAEB",
                                                        color: "#B54708",
                                                        border: "1px solid #DC6803",
                                                        lineHeight: "19.2px",
                                                        height: "32px",
                                                        fontFamily: 'Lato !important'
                                                    }}
                                                >
                                                    <span className='readyForPickupButtonStyle'>
                                                        Ready For Pickup
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="row">
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <button
                                                        className="thFontColor"
                                                        type="button"
                                                        onClick={toggleTeamViewIanViewDetailsOpen}
                                                        style={{
                                                            backgroundColor: "#FFFFFF",
                                                            border: "1px solid black",
                                                            width: "70px",
                                                            height: "32px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        View
                                                    </button>
                                                    {/* MODEL STARTS HERE */}
                                                    <Modal
                                                        transparent={false}
                                                        isOpen={isTeamViewIanViewDetailsOpen}
                                                        onRequestClose={toggleTeamViewIanViewDetailsOpen}
                                                        ariaHideApp={false}
                                                        contentLabel="My dialog1"
                                                        overlayclassName="overlay"
                                                        style={customStylesForPaulViewButton}
                                                    >
                                                        <div
                                                            style={{
                                                                margin: '64px',
                                                                width: "-webkit-fill-available",
                                                                paddingLeft: '0% !important',
                                                                paddingRight: '0% !important'
                                                            }}
                                                        >
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ margin: "0% !important" }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily: "Lato",
                                                                        fontSize: "31px",
                                                                        lineHeight: "37.2px",
                                                                        color: "#000000",
                                                                    }}
                                                                >
                                                                    ORDER DETAILS
                                                                </span>
                                                            </div>
                                                            <div
                                                                className="row orderDetailsContentWidth"
                                                                style={{ paddingTop: "20px", paddingLeft: '0% !important' }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily: "Lato",
                                                                        fontSize: "20px",
                                                                        lineHeight: "24px",
                                                                    }}
                                                                >
                                                                    <b>Ian Joseph</b> #97036
                                                                </span>

                                                                <div
                                                                    style={{
                                                                        paddingTop: "10px",
                                                                        paddingBottom: "10px",
                                                                        width: "100%",
                                                                        paddingLeft: "0% !important",
                                                                        marginLeft: "0% !important",
                                                                        marginTop: "0% !important",
                                                                        marginBottom: "0% !important",
                                                                    }}
                                                                >
                                                                    <hr
                                                                        style={{
                                                                            width: "472px",
                                                                            float: "none",
                                                                            marginLeft: "0% !important",
                                                                            marginTop: "0% !important",
                                                                            marginBottom: "0% !important",
                                                                        }}
                                                                    />
                                                                </div>
                                                                {/* ORDER DETAILS SECTION */}
                                                                <div
                                                                    className="row orderDetailsContentWidth"
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Lato",
                                                                            fontWeight: "600",
                                                                            fontStyle: "normal",
                                                                            fontSize: "20px",
                                                                            LineHeight: "24px",
                                                                        }}
                                                                    >
                                                                        Items(2)
                                                                    </span>
                                                                </div>
                                                                {/* product column */}
                                                                {/* product1 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "24px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item1"
                                                                            src="/item1.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row itemsStyling" style={{ marginLeft: '24px !important' }}>
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Signature Oval Dutch Oven,
                                                                                8 qt.1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row itemsStyling"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "24px !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6823835 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                {/* product2 */}
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "40px",
                                                                        paddingLeft: "0% !important",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col-4"
                                                                        style={{ paddingLeft: "0% !important" }}
                                                                    >
                                                                        <Image
                                                                            alt="item2"
                                                                            src="/item2.svg"
                                                                            width={125}
                                                                            height={125}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"
                                                                            data-bs-whatever="@mdo"
                                                                        />
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <div className="row>">
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "700",
                                                                                    fontStyle: "bold",
                                                                                    fontSize: "16px",
                                                                                    LineHeight: "19.2px",
                                                                                }}
                                                                            >
                                                                                Le Creuset Multifunction Pan, 2.5 qt.
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row skuRow"
                                                                            style={{
                                                                                paddingTop: "10px",
                                                                                marginLeft: "0% !important",
                                                                                marginRight: "0% !important",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily: "Lato",
                                                                                    fontWeight: "400",
                                                                                    fontStyle: "normal",
                                                                                    fontSize: "14px",
                                                                                    LineHeight: "16.8px",
                                                                                    color: '#545454'
                                                                                }}
                                                                            >
                                                                                SKU: 6825137 <br></br>
                                                                                Qty: 1
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className="row"
                                                                            style={{
                                                                                paddingTop: "25px",
                                                                                textAlign: "right",
                                                                                float: "right",
                                                                                marginRight: '0px'
                                                                            }}
                                                                        >
                                                                            <span style={{
                                                                                fontWeight: '700',
                                                                                fontSize: '16px',
                                                                                lineHeight: '19.2px',
                                                                            }}>$299.96</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    className="horizontalLineStyle"
                                                                />
                                                                <div
                                                                    className="row"
                                                                    style={{
                                                                        marginTop: "38px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="col"
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            Total
                                                                        </span>
                                                                    </div>
                                                                    <div className="col" style={{ textAlign: "right" }}>
                                                                        <span
                                                                            style={{
                                                                                fontFamily: "Lato",
                                                                                fontWeight: "600",
                                                                                fontStyle: "normal",
                                                                                fontSize: "20px",
                                                                                LineHeight: "24px",
                                                                            }}
                                                                        >
                                                                            $599.91
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="row"
                                                                    style={{ width: "-webkit-fill-available", marginTop: '42px' }}
                                                                >
                                                                    <button
                                                                        onClick={toggleTeamViewIanViewDetailsOpen}
                                                                        style={{
                                                                            width: "125px",
                                                                            height: "48px",
                                                                            backgroundColor: "#FFFFFF",
                                                                            color: "black !important",
                                                                            fontWeight: '700',
                                                                            fontSize: '16px',
                                                                            lineHeight: '19.2px',
                                                                        }}
                                                                    >
                                                                        CLOSE
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Modal>
                                                    {/* MODAL CLOSED */}
                                                </div>
                                                <div className="col spaceBetweenPrinterIcon">
                                                    <Image
                                                        alt="printer-icon"
                                                        src="/printer-icon.svg"
                                                        width={24}
                                                        height={24}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </TabPanel>
                    </div>

                    <div>
                        <Link href="/acknowledgealert" passHref>
                            <Checkbox />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
