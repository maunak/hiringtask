import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Featured Required
        </Typography>
      </FlexBetween>
     
      <FlexBetween>
        <Typography color={medium}>●  LogIn / Logout with JWT</Typography>
        
      </FlexBetween>
      <FlexBetween>
      <Typography color={medium}>●    Registration</Typography>
      </FlexBetween>
      <FlexBetween>
      <Typography color={medium}>●   Tweet Create, edit , Delete</Typography>
      </FlexBetween>
      <FlexBetween>
      <Typography color={medium}>●   Fully Responsive</Typography>
      </FlexBetween>
      
      
    </WidgetWrapper>
  );
};

export default AdvertWidget;
