
import { Autocomplete, AutocompleteProps, Box, Chip, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

type Option = string | enrolledList;

type CustomAutocompleteProps<T extends Option> = Omit<
  AutocompleteProps<T, boolean, boolean, boolean>,
  'renderInput'
> & {
  options: T;
  name: string
  componentType?: string
  defaultData?: T[] 
  handleDataFetch: () => void
  handleChange: (option : T) => void
  renderOption?: (option: T) => React.ReactNode;
};


const CustomAutoComplete = <T extends Option> ({name,defaultData,handleDataFetch,options,renderOption,handleChange}: CustomAutocompleteProps<T>) => {
  
  return (
        <Autocomplete
          multiple 
          freeSolo
          name={name}
          id="tags-filled"
          defaultValue={defaultData}
          options={options}
          getOptionLabel={(option) => (typeof option === 'string' ? option : option.name)}
          renderOption={(props, option) => (
            <li {...props}>
              {renderOption ? renderOption(option) : typeof option === 'string' ? option : option.name}
            </li>
          )}
          sx={{ mb:'20px' }}
          onFocus={handleDataFetch}
          onChange={(event,newValue) => handleChange(newValue)}
          renderTags={(value: string[], getTagProps) =>
            value.map((option: string , index: number) => (
              <Chip
                variant="outlined"
                label={renderOption ? renderOption(option) : typeof option === 'string' ? option : option.name}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => <TextField {...params} label="Search"/> }/>
  )
}

export default CustomAutoComplete;
