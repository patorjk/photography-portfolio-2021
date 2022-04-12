
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
import ReactGA from 'react-ga';
import Cookies from 'universal-cookie';
import { themes, DefaultTheme } from '../themes';

function SettingsDialog(props) {
  const {
    open,
    handleClose,
    theme,
    setTheme,
  } = props;

  const resetSettings = () => {
    const cookies = new Cookies();
    cookies.remove('theme', { path: '/' });

    setTheme(DefaultTheme.theme);

    handleClose();
  };

  const onThemeChange = (evt) => {
    const theme = evt.target.value;
    const cookies = new Cookies();

    const selectedTheme = themes.find(tt => tt.theme === theme);
    const themeName = selectedTheme ? selectedTheme.label : "";

    if (themeName) {
      cookies.set('theme', themeName, { path: '/' });
    }

    ReactGA.event({
      category: 'Settings',
      action: 'Theme Change',
      label: themeName
    });

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
        <Button onClick={ resetSettings }>
          Reset
        </Button>
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
  theme: PropTypes.object,
  setTheme: PropTypes.func,
};

export default SettingsDialog;
