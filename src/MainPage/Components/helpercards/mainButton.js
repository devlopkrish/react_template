import { Box } from "@material-ui/core"

import Fab from "@material-ui/core/Fab";
import WbSunnyIcon from "@material-ui/icons/WbSunny";


function MainButton(props) {


    return (  <Box p zIndex="modal" style={{ top: 500 }}>
        <Fab color="primary" aria-label="add" onClick={props.func}>
          <WbSunnyIcon />
        </Fab>
      </Box>
    )
}

export default MainButton;