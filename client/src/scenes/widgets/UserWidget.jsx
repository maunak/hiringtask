import {} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    friends,
  } = user;

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem" display="flex" flexDirection="column" paddingLeft="100px">
          <UserImage image={picturePath} />
          <Box display="flex" alignItems="center" gap="1rem" >
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            
          </Box>
        </FlexBetween>  
      </FlexBetween>
      <FlexBetween display="flex" alignItems="center" gap="1rem" paddingLeft="130px">
        @maunak
      </FlexBetween>

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" paddingLeft="85px">
        <Typography color={medium}>{friends.length} followers</Typography>
            <Typography color={medium}>{friends.length+3} followers</Typography>
        </Box>
      </Box>

      <Divider />

      {/* THIRD ROW */}
      <Box p="1rem 0"  alignItems="center" gap="1rem" paddingLeft="107px">
        <FlexBetween mb=".5rem" alignItems="center" >
          <Typography color={medium}>Find New people</Typography>
        </FlexBetween>
      </Box>

      <Divider />

      
    </WidgetWrapper>
  );
};

export default UserWidget;
