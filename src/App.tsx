import "./App.css";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { MuiDateRangePicker } from "./components/MuiDateRangePicker";
// import { MuiPicker } from "./components/MuiPicker";
// import { MuiLoadingButton } from "./components/MuiLoadingButton";
// import { MuiProgress } from "./components/MuiProgress";
// import { MuiSkeleton } from "./components/MuiSkeleton";
// import { MuiDialog } from "./components/MuiDialog";
// import { MuiAlert } from "./components/MuiAlert";
// import { MuiSnackbar } from "./components/MuiSnackbar";
// import { MuiTable } from "./components/MuiTable";
// import { MuiTooltip } from "./components/MuiTooltip";
// import { MuiChip } from "./components/MuiChip";
// import { MuiList } from "./components/MuiList";
// import { MuiAvatar } from "./components/MuiAvatar";
// import { MuiBadge } from "./components/MuiBadge";
// import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
// import { MuiSpeedDial } from "./components/MuiSpeedDial";
// import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
// import { MuiDrawer } from "./components/MuiDrawer";
// import { MuiLink } from "./components/MuiLink";
// import { MuiNavBar } from "./components/MuiNavBar";
// import { MuiImageList } from "./components/MuiImageList";
// import { MuiAccordion } from "./components/MuiAccordion";
// import { MuiCard } from "./components/MuiCard";
// import { MuiLayout } from "./components/MuiLayout";
// import { MuiAutocomplete } from "./components/MuiAutocomplete";
// import { MuiRating } from "./components/MuiRating";
// import { MuiSwitch } from "./components/MuiSwitch";
// import { MuiCheckbox } from "./components/MuiCheckbox";
// import { MuiRadioButton } from "./components/MuiRadioButton";
// import { MuiSelect } from "./components/MuiSelect";
// import { MuiTextField } from "./components/MuiTextField";
// import { MuiButton } from "./components/MuiButton";
// import { MuiTypography } from "./components/MuiTypography";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutocomplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavBar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiPicker /> */}
        <MuiDateRangePicker />
      </div>
    </LocalizationProvider>
  );
}

export default App;
