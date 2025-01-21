import React from "react";
import { Card, CardHeader, CardContent, TextField, Avatar, Checkbox, FormControlLabel, Switch, IconButton } from "@mui/material";
import { HeartBrokenOutlined, MonitorHeartOutlined, Visibility } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Menu, MenuItem } from "@mui/material";
import { FormatBold, FormatItalic, FormatListBulleted, ArrowDropDown } from "@mui/icons-material";
import '../Style/_notes.scss';
import NotesEditor from "./NotesEditor";

const NotesComponent = () => {

    // const advices = [
    //     "Advised Home isolation and treatment of now. Warning signs explained and review sos.SPO2 and....",
    //     "Streaming gargling",
    //     "Dr WhatsApp number +91 9771221270",
    //   ];

      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
    
      const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
      };

  return (
    <>
    <Card className="notes-card">
      <CardHeader
        title="Notes"
        subheader="NOTES FOR PATIENT (TREATMENT/SURGICAL/OTHERS)"
        className="notes-header"
      />
      <CardContent>
        <TextField
          multiline
          rows={10}
          variant="outlined"
          placeholder="Enter notes here..."
          className="notes-textfield"
        />
      </CardContent>
    </Card>
    <br/>
    <br/>

    <Card className="advices-card">
      <CardHeader className="card-header"
        avatar={
          <Avatar className="advices-avatar">
            <span role="img" aria-label="heartbeat"><MonitorHeartOutlined /></span>
          </Avatar>
        }
         title="Advices"
        action={
          <div className="advices-actions">
            <FormControlLabel
              control={<Checkbox defaultChecked style={{color:"#4BD69E"}} />}
              label="Enable Translations"
            />
            <IconButton>
              <Visibility />
            </IconButton>
          </div>
        }
         
      />
      <NotesEditor/>
    </Card>
    </>
    
  );
};

export default NotesComponent;
