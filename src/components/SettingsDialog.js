
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle, InputLabel, Select,
} from '@mui/material';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import Cookies from 'universal-cookie';

function SettingsDialog(props) {
  const {
    open,
    handleClose,
    themes = [],
    theme,
    setTheme,
  } = props;

  const onThemeChange = (evt) => {
    const theme = evt.target.value;
    const cookies = new Cookies();

    const selectedTheme = themes.find(tt => tt.theme === theme);
    const themeName = selectedTheme ? selectedTheme.label : "";

    if (themeName) {
      cookies.set('theme', themeName, { path: '/' });
    }

    setTheme(theme);
  };

  return (
    <Dialog
      open={ open }
      onClose={ handleClose }
      fullWidth={ true }
      aria-labelledby='settings-dialog-title'
      aria-describedby='settings-dialog-description'
    >
      <DialogTitle id='settings-dialog-title'>
        Settings
      </DialogTitle>
      <DialogContent id='settings-dialog-description'>
        <FormControl fullWidth sx={{
          marginTop: '10px',
        }}>
          <InputLabel id='theme-select-label'>Theme</InputLabel>
          <Select
            labelId='theme-select-label'
            id='theme-select'
            value={ theme }
            label='Theme'
            onChange={ onThemeChange }
          >
            {
              themes.map(val => (
                <MenuItem key={ val.label } value={ val.theme }>{ val.label }</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={ handleClose }>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SettingsDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  album: PropTypes.object,
  themes: PropTypes.array,
  theme: PropTypes.object,
  setTheme: PropTypes.func,
};

export default SettingsDialog;
