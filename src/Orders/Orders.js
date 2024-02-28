import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Pending from "./Pending";

function CustomTabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Orders() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Pending"
            {...a11yProps(0)}
            style={{ textTransform: "none" }}
          />
          <Tab
            label="Accepted"
            {...a11yProps(1)}
            style={{ textTransform: "none" }}
          />
          <Tab label="AWB Created" {...a11yProps(2)} />
          <Tab
            label="Ready to Ship"
            {...a11yProps(3)}
            style={{ textTransform: "none" }}
          />
          <Tab
            label="Shipped"
            {...a11yProps(4)}
            style={{ textTransform: "none" }}
          />
          <Tab
            label="Completed"
            {...a11yProps(5)}
            style={{ textTransform: "none" }}
          />
          <Tab
            label="Cancelled"
            {...a11yProps(6)}
            style={{ textTransform: "none" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Pending />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Accepted
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        AWB Created
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Ready to Ship
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Shipped
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Completed
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        Cancelled
      </CustomTabPanel>
    </Box>
  );
}
