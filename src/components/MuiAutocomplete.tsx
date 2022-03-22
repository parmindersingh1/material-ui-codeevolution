import { Autocomplete, Stack, TextField } from "@mui/material";
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
export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log("value", value);
  console.log("skill", skill);
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
  return (
    <Stack spacing={2} width="250px">
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
    </Stack>
  );
};
