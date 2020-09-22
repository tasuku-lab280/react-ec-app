import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogContent } from "@material-ui/core";

import { addScheduleCloseDialog } from "../../reducks/schedules/actions";
import { getSchedule } from "../../reducks/schedules/selectors";

const ScheduleDialog = () => {
  // redux hooks
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isDialogOpen = getSchedule(selector);
  console.log(isDialogOpen);

  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => dispatch(addScheduleCloseDialog())}
      maxWidth="xs"
      fullWidth
    >
      <DialogContent>dialog</DialogContent>
    </Dialog>
  );
};

export default ScheduleDialog;
