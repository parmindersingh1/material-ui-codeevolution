import {
  Autocomplete,
  Stack,
  TextField,
  createFilterOptions,
} from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const filter = createFilterOptions();

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  const [skills, setSkills] = useState<any[]>([]);
  console.log("value", value);
  console.log("skill", skill);
  console.log("skills", skills);
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: string | null
  ) => {
    setValue(newValue);
  };

  const handleSkillChange = (
    event: React.ChangeEvent<{}>,
    newValue: Skill | null
  ) => {
    setSkill(newValue);
  };

  const handleSkillsChange = (event: any, newValues: any[]) => {
    console.log("newvalues", newValues);
    setSkills(newValues);
  };
  return (
    <Stack spacing={2} width="500px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} />}
        value={value}
        onChange={handleChange}
        freeSolo
      />

      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} />}
        value={skill}
        onChange={handleSkillChange}
      />

      <Autocomplete
        multiple
        id="tags-outlined"
        options={skillsOptions}
        getOptionLabel={(option) => option.label}
        value={skills}
        // defaultValue={[skillsOptions[0]]}
        // filterSelectedOptions
        onChange={handleSkillsChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />

      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label='Free solo with text demo' />}
        value={value}
        onChange={handleChange}
        freeSolo
        autoSelect
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option);
          if (inputValue !== "" && !isExisting) {
            // filtered.push({
            //   inputValue,
            //   title: `Add "${inputValue}"`,
            // });

            filtered.push(`${inputValue}`);
          }

          return filtered;
        }}
      />
    </Stack>
  );
};
