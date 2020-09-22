import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Input,
  Grid,
  IconButton,
} from "@material-ui/core";
import {
  LocationOnOutlined,
  NotesOutlined,
  AccessTime,
  Close,
} from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";
import { withStyles } from "@material-ui/styles";

import {
  addScheduleSetTitle,
  addScheduleSetDate,
  addScheduleSetDescription,
  addScheduleSetLocation,
  addScheduleCloseDialog,
} from "../../reducks/schedules/actions";
import {
  getScheduleIsDialogOpen,
  getScheduleTitle,
  getScheduleDate,
  getScheduleDescription,
  getScheduleLocation,
} from "../../reducks/schedules/selectors";

const spacer = { margin: "4px 0" };

const Title = withStyles({
  root: { marginBottom: 32, fontSize: 22 },
})(Input);

const ScheduleDialog = () => {
  // redux hooks
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isDialogOpen = getScheduleIsDialogOpen(selector);
  const title = getScheduleTitle(selector);
  const date = getScheduleDate(selector);
  const description = getScheduleDescription(selector);
  const location = getScheduleLocation(selector);
  console.log(isDialogOpen);
  console.log(title);
  console.log(date);
  console.log(description);
  console.log(location);

  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => dispatch(addScheduleCloseDialog())}
      maxWidth="xs"
      fullWidth
    >
      <DialogActions>
        <div className="closeButton">
          <IconButton
            onClick={() => dispatch(addScheduleCloseDialog())}
            size="small"
          >
            <Close />
          </IconButton>
        </div>
      </DialogActions>
      <DialogContent>
        <Title
          autoFocus
          fullWidth
          placeholder="タイトルと日時を追加"
          value={title}
          onChange={(e) =>
            dispatch(addScheduleSetTitle({ title: e.target.value }))
          }
        />
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <AccessTime />
          </Grid>
          <Grid item xs={10}>
            <DatePicker
              value={date}
              onChange={(d) => dispatch(addScheduleSetDate({ date: d }))}
              variant="inline"
              format="YYYY年M月D日"
              animateYearScrolling
              disableToolbar
              fullWidth
              style={spacer}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <LocationOnOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField
              style={spacer}
              fullWidth
              placeholder="場所を追加"
              value={location}
              onChange={(e) =>
                dispatch(addScheduleSetLocation({ location: e.target.value }))
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <NotesOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField
              style={spacer}
              fullWidth
              placeholder="説明を追加"
              value={description}
              onChange={(e) =>
                dispatch(
                  addScheduleSetDescription({ description: e.target.value })
                )
              }
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined">
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ScheduleDialog;
