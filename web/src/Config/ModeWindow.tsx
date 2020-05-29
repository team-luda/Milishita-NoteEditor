import { ModeSelectHandler } from "./ModeSelectHandler";
import { modes, Mode, NoteType, noteTypes } from "~NoteView/types";
import { Button, Segment, Divider } from "semantic-ui-react";
import React from "react";
import { dispatch } from "~StateStore/store";
import { ModeAction } from "~StateStore/_gen/mode_action.ts";

const modeSelectHandler = new ModeSelectHandler();

export const ModeWindow = (props: {
  mode: Mode,
  noteTypeMode: NoteType,
}) => {
  const { mode: currentMode } = props;
  const buttons = modes.map(mode => {
    return <Button
      key={`mode-change-button-${mode}`}
      onClick={() => {
        if (currentMode === mode) {
          return;
        }
        dispatch(ModeAction.changeMode(mode));
      }}
      positive={currentMode === mode}
    > {mode}</Button >;
  });

  const { noteTypeMode: currentNoteTypeMode } = props;
  const noteTypeButtons = noteTypes.map(noteTypeMode => {
    return <Button
      key={`single-note-mode-change-button-${noteTypeMode}`}
      onClick={() => {
        if (currentNoteTypeMode === noteTypeMode) {
          return;
        }
        dispatch(ModeAction.changeNoteTypeMode(noteTypeMode));
      }}
      positive={currentNoteTypeMode === noteTypeMode}
    > {noteTypeMode}</Button>

  });


  return (
    <Segment>
      <Button.Group fluid>
        {buttons}
      </Button.Group>
      <Divider />
      <Button.Group fluid>
        {noteTypeButtons}
      </Button.Group>
    </Segment>
  );
}